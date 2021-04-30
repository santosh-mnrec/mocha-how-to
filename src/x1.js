var $ = require("jquery");
var countdown = require("./countdown.js");

describe('Countdown Component tests', () => {
	describe('Verify isNotPastEnd function behavior',
		() => {
			Boolean=jest.fn();
			countdown.countDownModule.isNotPastEnd();
			expect(Boolean).toBeCalledTimes(1);
		});

	describe('Verify CheckTime function behavior',
		() => {
			Boolean=jest.fn().mockReturnValue(true);
			clearInterval = jest.fn();
			countdown.countDownModule.checkTime();
			expect(Boolean).toBeCalledTimes(2);
			expect(clearInterval).toBeCalledTimes(1);
		});

    describe('Verify reloadMethod and updateTime behavior',
		() => {
            jest.clearAllMocks();
			var  getElementSpy;
            beforeAll(() => {
				refreshSWB = jest.fn();
				var hotDealsCat = {
					id: "hotDealsCategoryId",
					value: "hotDeals"
				}, dealsHomeUrl = {
					id: "dealsHomeUrl",
					value: "/shop/deals",
					getAttribute: jest.fn((attr) => ({}))
					}, hotDealsEl = {
                           id: "horDeals",
						remove: jest.fn(() => {})
                    }
                getElementSpy = jest.spyOn(document, "getElementById").mockImplementation((id) => {
					if (id === hotDealsCat.id) {
						return hotDealsCat;
					}
					else if (id == dealsHomeUrl.id) return dealsHomeUrl;
                    return hotDealsEl;
				});
            });

            afterAll(() => {
                $('body').empty();
            });
            it('should call updateTime when remaining time is greater than zero',
	            () => {
		            countdown.countDownModule.updateTime((new Date().getTime())+5000);
		            expect(clearInterval).toBeCalledTimes(0);
		            expect(refreshSWB).toBeCalledTimes(0);
	            });
            it('should call updateTime when remaining time is less than zero',
	            () => {
		            countdown.countDownModule.updateTime((new Date().getTime())-1000);
		            expect(clearInterval).toBeCalledTimes(1);
		            expect(refreshSWB).toBeCalledTimes(1);
	            });
          
            it('should call remove deals',
				() => {
					//Act
					countdown.countDownModule.removeOnSaleDeals();
					//Assert
					expect(getElementSpy).toHaveBeenCalled();
                });
        });
});

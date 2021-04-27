const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("<html><input type='text' value='x' id='claimApiUrl'/></html>").window;
global.document = document;

const $ = require("jquery")(window);

module.exports = $;

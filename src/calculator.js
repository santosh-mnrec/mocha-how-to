class Calculator{
    printHi(msg){
        console.log(msg);
    }
    sum(a,b){
        this.printHi("Santosh");
        return a+b;
    }
}
const calc=new Calculator();

module.exports={calc};

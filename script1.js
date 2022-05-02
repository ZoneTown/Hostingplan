//Hosting Plan//
class Plan{
    constructor(name,price,space,transfer,pages,discountMonths){
        this.name = name;
        this.price = price;
        this.space = space;
        this.transfer = transfer;
        this.pages = pages;
        this.discountMonths = discountMonths;
    }

    //We will define the method as prototype of the constructor
    calcAnnual(percentIfDisc){
    var bestPrice = this.price;
    console.log("Price" + " " + bestPrice);
    var currDate = new Date();
    console.log("Current Date" + " " + currDate);
    var thisMo = currDate.getMonth();
    console.log("This Month" + " " + thisMo);

    for (var i = 0; i < this.discountMonths.length; i++){
        //This is telling the console there are 2 discount months
        console.log(this.discountMonths.length);
        if (this.discountMonths[i] === thisMo){
            bestPrice = this.price * percentIfDisc;
            console.log("Best Price" + " " + bestPrice);
            break;
        }
    }
    return bestPrice * 12;
    console.log("Price with no discount" + " " + bestPrice);
    }
};

/*0-January
1-February
2-March
3-April
4-May
5-June
6-July
7-August
8-September
9-October
10-November
11-December*/

var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0, 7]);

function calculate(){
    var annualPrice = p1.calcAnnual(.80);
    console.log(annualPrice);
    alert("Annual Price" + " " + annualPrice);
}
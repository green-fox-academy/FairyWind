/**Create Sharpie class
We should know each sharpie's color, width and inkAmount
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount */

class Sharpie{
    constructor(color, width){
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }
    use(){
        this.inkAmout--;
    }
}

const test = new Sharpie('red','100')
test.use();
console.log(test.color,test.width,test.inkAmount);

module.exports = Sharpie;
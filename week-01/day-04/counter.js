/**Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */
'use strict';

class  Counter{
    constructor(integer = 0){
        this.integer = parseInt(integer);
        this.initial = parseInt(integer);
    }

    //different methods Cannot use same name is js
    addNum(number = 1){
        this.integer += parseInt(number); 
    }

    // add(){
    //     this.integer++;
    // }

    get(){
        this.integer = `${this.integer}`;
    }

    reset(){
        this.integer = this.initial;
    }
}

var test = new Counter(10);
console.log(test.integer);
test.addNum(2);
console.log(test.integer);
test.addNum();
console.log(test.integer);
test.get();
console.log(test.integer);
test.reset();
console.log(test.integer);

'use strict';

abstract class Animal{
    private age: number;
    private gender: string;
    
  constructor(protected name: string){
    this.name = name;
  }

  abstract getName(): void;
  
  abstract breed(): void;
}

class Mammal extends Animal{
  constructor(name){
    super(name);
  }

  getName(){
    return this.name;
  }

  breed(){
    return 'pushing miniature versions out.';
  }

  feedWithMilk(){
    return true;
  }
}

class Bird extends Animal{
  constructor(name){
    super(name);
  }

  getName(){
    return this.name;
  }

  breed(){
    return 'laying eggs.';
  }

  hasWings(){
    return true;
  }
}

class Reptile extends Animal{
  constructor(name){
    super(name);
  }

  getName(){
    return this.name;
  }

  breed(){
    return 'laying egg.';
  }

  feedWithMilk(){
    return false;
  }
}

export {Mammal, Bird, Reptile};
export {Animal};
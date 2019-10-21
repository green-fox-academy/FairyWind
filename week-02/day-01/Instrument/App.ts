'use strict';

abstract class Instrument {
  constructor(protected name: String) {
    this.name = name;
 }
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  constructor(name: String, protected numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
 }
  abstract sound(): string;
}

class ElectricGuitar extends StringedInstrument{
  constructor (numberOfStrings = 6){
    super('Electric Guitar', numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }

  sound(){
    return 'Twang';
  }

  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}

class BassGuitar extends StringedInstrument{
  constructor (numberOfStrings = 4){
    super('Base Guitar', numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }

  sound(){
    return 'Duum-duum-duum';
  }

  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}

class Violin extends StringedInstrument{
    constructor (){
      super('Violin', 4);
    }
  
    sound(){
      return 'Screech';
    }
  
    play(){
      console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
  }


export {ElectricGuitar, BassGuitar, Violin};
import{Animal} from '../zoo/App'

interface Flyable{
  land(): void;

  fly(): void;

  takeOff():void;
}

abstract class Vehicle{
  private brand: string;
  private maxSpeed: number;
  private load: number;
}

class Helicopter extends Vehicle implements Flyable{
  land(){
    console.log('The helicopter is landing.')
  }

  fly(){
    console.log('The helicopter is flying.')
  }

  takeOff(){
    console.log('The helicopter is taking off.')
  }
}

class Bird extends Animal implements Flyable{
  getName(){
    return this.name;
  }

  breed(){
    return 'laying eggs.';
  }
  
  land(){
    console.log('The bird is landing.')
  }

  fly(){
    console.log('The bird is flying.')
  }

  takeOff(){
    console.log('The bird is taking off.')
  }
}

export {Bird};
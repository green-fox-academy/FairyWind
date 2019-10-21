'use strict';

class Thing {
  private completed: boolean;

  constructor(protected name: string) {
    this.name = name;
  }

  complete() {
    this.completed = true;
  }

  getName() {
    return this.name;
  }

  getCompleted() {
    return this.completed;
  }
}

export{Thing};
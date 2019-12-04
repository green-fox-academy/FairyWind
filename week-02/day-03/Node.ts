'use strict';

class MyNode {
  public item: string;
  public next?: MyNode;

  constructor(item: string) {
    this.item = item;
    this.next = null;
  }
}

export {MyNode};
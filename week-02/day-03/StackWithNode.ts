'use strict';

import { Stack } from './StackInterface';
import { MyNode } from './Node';

class StackWithNode implements Stack {
  private size: number;
  private head: MyNode;

  constructor() {
    ;
    this.size = 0;
    this.head = null;
  }

  empty(): boolean {
    return this.size === 0;
  }

  peek(): string {
    var current = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      current = current.next;
    }
    return current.item;

  }

  push(value: string): void {
    var node = new MyNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      for (let i = 0; i < this.size - 1; i++) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  pop(): string {
    var current = this.head;
    var previous = null;
    for (let i = 0; i < this.size - 1; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    return current.item;
  }

  printList() {
    var current = this.head;
    var str = "";
    for (let i = 0; i < this.size; i++) {
      str += current.item + " ";
      current = current.next;
    }
    console.log(str);
  }
}


const stack = new StackWithNode();
stack.printList();
console.log(stack.empty());
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');
stack.printList();

console.log(stack.empty());
console.log(stack.peek());
stack.printList();

stack.pop();
stack.printList();


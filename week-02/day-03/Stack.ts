'use strict';

import { Stack } from './StackInterface';


class MyStack implements Stack {
  private stack: Array<string>;
  private size: number;

  constructor() {
    this.stack = [];
    this.size = 0;
  }

  empty(): boolean {
    return this.size === 0;
  }

  peek(): string {
    if (this.size > 0) {
      return this.stack[this.size - 1];
    } else {
      return 'Empty';
    }
  }

  push(value: string): void {
    this.stack[this.size++] = value;
  }

  pop(): string {
    this.size--;
    return this.stack.pop();
  }
}

const stack = new MyStack();
console.log(stack);
console.log(stack.empty());
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');
console.log(stack.empty());
console.log(stack.peek());
console.log(stack);
stack.pop();
console.log(stack);







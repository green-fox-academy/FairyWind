'use strict';

import { Queue } from './QueueInterface';

class MyQueue implements Queue {
  private queue: string[];
  private size: number;

  constructor() {
    this.queue = [];
    this.size = 0;
  }

  empty(): boolean {
    return this.size === 0;
  }

  peek(): string {
    if (this.size > 0) {
      return this.queue[this.size - 1];
    } else {
      return 'Empty';
    }
  }

  add(value: string): void {
    this.queue.unshift(value);
    this.size++;
  }

  remove(): string {
    this.size--;
    return this.queue.pop();
  }
}

const queue = new MyQueue();
console.log(queue);
console.log(queue.empty());
queue.add('1');
queue.add('2');
queue.add('3');
queue.add('4');
queue.add('5');
console.log(queue.empty());
console.log(queue.peek());
console.log(queue);
queue.remove();
console.log(queue);
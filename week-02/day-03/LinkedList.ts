'use strict';
import { LinkedList } from './LinkedListInterface';
import { MyNode } from './Node';

class MyLinkedList implements LinkedList {
  private head: MyNode;
  //  private tail: MyNode;
  private listSize: number;

  constructor() {
    this.head = null;
    //    this.tail = null;
    this.listSize = 0;
  }

  add(item: string, index?: number) {
    if (index < 0 && index > this.listSize) {
      return false;
    }
    var node = new MyNode(item);
    var current = this.head;
    var previous = null;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.listSize++;
  }

  get(index: number) {
    if (index < 0 || index > this.listSize) {
      return null;
    }
    var current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.item;
  }

  removeItem(item: string) {
    var current = this.head;
    var previous = null;
    for (let i = 0; i < this.listSize; i++) {
      if (current.item === item) {
        if(previous === null){
          this.head = current.next;
        }else{
          previous.next = current.next
        }
        this.listSize--;
      }
      previous = current;
      current = current.next
    }
  }

  remove(index: number) {
    if (index > 0 && index > this.listSize) {
      return null;
    }
    var current = this.head;
    var previous = null;
    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.listSize--;
    return current.item;
  }

  size() {
    return this.listSize;
  }

  printList() {
    var current = this.head;
    var str = "";
    for (let i = 0; i < this.listSize; i++) {
      str += current.item + " ";
      current = current.next;
    }
    console.log(str);
  }

}



const list = new MyLinkedList();
list.printList();

list.add('0', 0);
list.add('1', 1);
list.add('2', 2);
list.add('3', 3);
list.add('4', 4);
list.add('5', 5);

list.printList();

console.log(list.get(2));

list.removeItem('2');
list.printList();

list.remove(4);
list.printList();

console.log(list.size());
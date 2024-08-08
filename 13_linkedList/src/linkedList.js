import { Node } from "./Node";

export class LinkedList {
  constructor() {
    this.head = new Node();
  }

  head() {
    return this.head;
  }

  tail(node = this.head) {
    if (node.nextNode === null) {
      return node; //tail
    }
    return this.tail(node.nextNode);
  }

  append(value) {
    const newNode = new Node(value, null);

    if (this.head === null) {
      this.headupdateNextNode(newNode);
    }
    this.tail().updateNextNode(newNode);
  }

  prepend(value) {
    const newNode = new Node(value, this.head.nextNode);
    this.head.updateNextNode(newNode);
  }

  size() {
    let size = 0;
    let current = this.head.nextNode;

    while (current) {
      size++;
      current = current.nextNode;
    }

    return size;
  }

  at(index) {
    let i = 0;
    let current = this.head.nextNode;
    while (current !== null) {
      if (i === index) {
        return current;
      }
      current = current.nextNode;
      i++;
    }
  }

  pop() {
    const size = this.size();
    const tail = this.tail();
    const newTail = this.at(size - 2); //0 index - 1
    newTail.updateNextNode(null);
    return tail;
  }

  contains(value) {
    let current = this.head.nextNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head.nextNode;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    const nodeLeft = this.at(index - 1);
    const nodeRight = this.at(index);
    const newNode = new Node(value, nodeRight);
    nodeLeft.updateNextNode(newNode);
  }

  removeAt(index) {
    const nodeLeft = this.at(index - 1);
    const nodeRight = this.at(index + 1);
    nodeLeft.updateNextNode(nodeRight);
  }

  toString() {
    let values = [];
    let current = this.head.nextNode;

    while (current) {
      values.push(current.value);
      current = current.nextNode;
    }

    const string =
      values.map((value) => `( ${value} )`).join(" -> ") + " -> null";

    console.log(string);
  }
}

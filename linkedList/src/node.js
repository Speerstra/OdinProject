export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  updateValue(newValue) {
    this.value = newValue;
  }

  updateNextNode(nextNode) {
    this.nextNode = nextNode;
  }
}

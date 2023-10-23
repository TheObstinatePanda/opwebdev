// doublyLinkedList.js
const carNode = require('./carNode');

class carDLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addToHead(image, heading, text) {
    const newHead = new carNode(image, heading, text);
    const currentHead = this.head;

    if (currentHead) {
        currentHead.setPrevNode(newHead);
        newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if(!this.tail) {
        this.tail = newHead;
    }
  }

  addToTail(image, heading, text) {
    const newTail = new carNode(image, heading, text);
    const currentTail = this.tail;

    if(currentTail) {
        currentTail.setNextNode(newTail);
        newTail.setPrevNode(currentTail);
    }
    this.tail = newTail;
    if(!this.head) {
        this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) {
        return;
    }

    this.head = removedHead.getNextNode();

    if (this.head) {
        this.head.setPrevNode(null);
    }

    if (removedHead === this.tail) {
        this.removeTail();
    }

    return removedHead.heading;
  }

  removeTail() {
    const removedTail = this.tail;

    if (!removedTail) {
        return;
    }

    this.tail = removedTail.getPrevNode();

    if (this.tail) {
        this.tail.setNextNode(null);
    }

    if (removedTail === this.head) {
        this.removeHead();
    }

    return removedTail.heading;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;

    while (currentNode !== null) {
        if (currentNode.heading === data) {
            nodeToRemove = currentNode;
            break;
        }
        currentNode = currentNode.getNextNode();
    }

    if (nodeToRemove === this.head) {
        this.removeHead();
    } else if (nodeToRemove === this.tail) {
        this.removeTail();
    } else {
        const nextNode = nodeToRemove.getNextNode();
        const prevNode = nodeToRemove.getPrevNode();

        nextNode.setPrevNode(prevNode);
        prevNode.setNextNode(nextNode);
    }
    return nodeToRemove
  }

  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode !== null) {
        result.push(currentNode);
        currentNode = currentNode.getNextNode();
    }

    return result;
  }

  print() {
    let currentNode = this.head;
    let output = ``;

    while (currentNode !== null) {
        output += `${currentNode.heading} -> `;
        currentNode = currentNode.getNextNode();
    }

    console.log(output);
  }
}

export default carDLL;
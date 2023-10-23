// Establish the carNode.
class carNode {
    constructor(image, heading, text) {
        this.image = image;
        this.heading = heading;
        this.text = text;
        this.prev = null;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof carNode || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the carNode class!')
        }
    }

    setPrevNode(node) {
        if (node instanceof carNode || node === null) {
            this.prev = node;
        } else {
            throw new Error('Previous node must be a membmer of the carNode class!')
        }
    }

    getNextNode() {
        return this.next;
    }
    getPrevNode() {
        return this.prev;
    }
  }
  
  module.exports = carNode;
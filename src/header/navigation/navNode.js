//the class navNode is a constructor which will help set up the data structure to create dynamic lists.  When creating a list, navNode will have to be called with a title, a url, and a preview (a thumbnail image of the destination, if desired). navNode also sets a next and prev keys both to null so we can manage the datastructure created //

class navNode {
    constructor(title, url, preview) {
        this.title = title;
        this.url = url;
        this.preview = preview;
        this.next = null;
        this.prev = null;
    }
    /* setNextNode checks if the node is a valid node before assigning to this.next else it throws an error */
    setNextNode(node) {
        if (node instanceof navNode || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the naveNode class!')
        }
    }

    /*setPrevNode checks if the node is a valid node before assigning to this.prev else it throws an error */
    setPrevNode(node) {
        if (node instanceof navNode || node === null) {
            this.prev = node;
        } else {
            throw new Error('Previous node must be a membmer of the navNode class!')
        }
    }

    /* getNextNode and getPrevNode return the next and previous nodes respectively */
    getNextNode() {
        return this.next;
    }
    getPrevNode() {
        return this.prev;
    }
}

export default navNode;
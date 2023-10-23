import navNode from './navNode'

/*navDll is a doubly linked list that stores the navigation items. It sets a head and a tail. Each node has a title, url, and preview. The list can add to or remove from the head or tail, remove by data, and print the list. It can also convert the list to an array.*/
class navDLL {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    /*adds a node to the head of the list.*/
    addToHead(title, url, preview) {
        const newHead = new navNode(title, url, preview);
        const currentHead = this.head;
        /*if there is a current head, set it to the next node and set the new head to the current head. */
        if (currentHead) {
            currentHead.setPrevNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        /*if there is no tail, set the tail to the new head. */
        if(!this.tail) {
            this.tail = newHead;
        }
    }
    /*adds a node to the tail of the list.*/
    addToTail(title, url, preview) {
        const newTail = new navNode(title, url, preview);
        const currentTail = this.tail;
        /*if there is a current tail, set it to the previous node and set the new tail to the current tail. */
        if(currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPrevNode(currentTail);
        }
        this.tail = newTail;
        /*if there is no head, set the head to the new tail. */
        if(!this.head) {
            this.head = newTail;
        }
    }
    /*removes the head of the list.*/
    removeHead() {
        const removedHead = this.head;
        /*if there is no head, return nothing ('').*/
        if (!removedHead) {
            return;
        }
        /*set the head to the next node. */
        this.head = removedHead.getNextNode();
        /*if there is a head, set the previous node to null. */
        if (this.head) {
            this.head.setPrevNode(null);
        }
        /*if the removed head is the tail, remove the tail. */
        if (removedHead === this.tail) {
            this.removeTail();
        }
        /*return the title of the removed head. */
        return removedHead.title;
    }
    /*removes the tail of the list.*/
    removeTail() {
        const removedTail = this.tail;
        /*if there is no tail, return nothing ('').*/
        if (!removedTail) {
            return;
        }
        /*set the tail to the previous node. */
        this.tail = removedTail.getPrevNode();
        /*if there is a tail, set the next node to null. */
        if (this.tail) {
            this.tail.setNextNode(null);
        }
        /*if the removed tail is the head, remove the head. */
        if (removedTail === this.head) {
            this.removeHead();
        }
        /*return the title of the removed tail. */
        return removedTail.title;
    }
    /*removes a node by data.*/
    removeByData(data) {
        /*define nodeToRemove as null and set the currentNode to the head. */
        let nodeToRemove;
        let currentNode = this.head;
        /*loop through the list until the currentNode is null. */
        while (currentNode !== null) {
            /*if the currentNode title is equal to the data, set the nodeToRemove to the currentNode and break the loop. */
            if (currentNode.title === data) {
                nodeToRemove = currentNode;
                break;
            }
            /*set the currentNode to the next node to continue the loop. */
            currentNode = currentNode.getNextNode();
        }
        /*if nodeToRemove is the head or tail of the list, call the appropriate method. */
        if (nodeToRemove === this.head) {
            this.removeHead();
        } else if (nodeToRemove === this.tail) {
            this.removeTail();
        } else {
            /*if nodeToRemove is neither, set the next and prev nodes of the nodeToRemove to the next and prev nodes of the nodeToRemove. */
            const nextNode = nodeToRemove.getNextNode();
            const prevNode = nodeToRemove.getPrevNode();
            nextNode.setPrevNode(prevNode);
            prevNode.setNextNode(nextNode);
        }
        /*return the nodeToRemove. */
        return nodeToRemove;
    }
    /*converts the list to an array. */
    toArray() {
        /*define result as an empty array and set the currentNode to the head. */
        const result = [];
        let current = this.head;
        /*loop through the list until the currentNode is null. */
        while (current) {
            /*push the currentNode to the result array and set the currentNode to the next node to continue the loop. */
            result.push(current);
            current = current.getNextNode();
        }
        /*return the result array. */
        return result
    }
    /*prints the list. */
    print() {
        /*set the currentNode to the head and define output as an empty string. */
        let currentNode = this.head;
        let output = ``;
        /*loop through the list until the currentNode is null. */
        while (currentNode !== null) {
            /*add the title, url, and preview of the currentNode to the output string. */
            output += `${currentNode.title} ${currentNode.url} ${currentNode.preview}`
            /*set the currentNode to the next node to continue the loop. */
            currentNode = currentNode.next;
        }
        /*log the output string. */
        console.log(output);
    }
}

export default navDLL
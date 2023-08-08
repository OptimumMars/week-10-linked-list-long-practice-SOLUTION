// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let node = new SinglyLinkedNode(val);
        // Your code here
        node.next = this.head;
        this.head = node;

        this.length++;

        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        // Correct Code below:

        let node = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = node;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;

        return this;

        // Incorrect Code below:
        // let newNode = new SinglyLinkedNode(data);

        // if (!head) {
        //     head = newNode;
        //     return head;
        // }

        // let curr = head;
        // while (curr) {
        //     curr = current.next;
        // }
        // curr.next = newNode;

        // return head;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;

        this.length--;

        return oldHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) return;

        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (!prev) {
            this.head = null;
        } else {
            prev.next = null;
        }

        this.length--;

        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        if (!this.head) return undefined;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        if (!this.head) return;

        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

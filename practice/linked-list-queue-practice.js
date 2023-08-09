// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let length = 0

        if (this.head) {
            let curr = this.head;
            length++
            while (curr.next) {
                length++;
                curr = curr.next;
            }
        }

        return length;
        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let sum = 0;
        if (!this.head) return sum;

        let curr = this.head;
        sum += curr.value;
        while (curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        if (!this.head) return 0;
        return this.sumOfNodes() / this.listLength();

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let curr = this.head;
        while (n && curr) {
            if (n < 0) return null;
            curr = curr.next;
            n--;
        }
        if (n === 0 && curr) return curr;
        return null;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here

        let curr = this.head;

        if (curr) {
            let half = Math.floor((this.listLength() - 1) / 2)

            for (let i = 0; i < half; i += 1) {
                curr = curr.next;
            }
        }

        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    // Add to head as a helper function for the reverse method
    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
        // Does the time complexity change? How about space complexity?

        const newList = new SinglyLinkedList();
        let curr = this.head;

        while (curr) {
            newList.addToHead(curr.value);
            curr = curr.next;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        if (!this.head) return this;

        let curr = this.head;
        let next = curr;
        let prev = null;

        while (next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        let first = this.head;
        let last = this.tail;

        while (first !== last && first.next !== last) {
            first = first.next;
            last = last.prev;
        }

        return first;

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let curr = this.head;
        let prev;

        while (curr.next) {
            prev = curr;
            [curr.prev, curr.next] = [curr.next, curr.prev];
            curr = curr.prev;
        }

        this.head = curr;
        this.head.next = prev;

        return this;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

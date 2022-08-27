class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value, null);
        this.length = 1;
        this.tail = this.head;
    }
    append(value) {
        let newNode = new Node(value, null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    preappend(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    traverseListToAPoint(index) {
        let i = 0;
        let currentNode = this.head;
        let prevNode;
        
        while(i < index + 1) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        return { currentNode, prevNode }
    }

    insert(index, value) {
        if(index > this.length) return this.append(value);
        let newNode = new Node(value, null);
        let {currentNode, prevNode } = this.traverseListToAPoint(index);
        prevNode.next = newNode
        newNode.next = currentNode;
    }

    reverse() {
        if(!this.head.next) return this;

        let node = this.head;
        this.tail = this.head; 
        let next = node.next;

        while(next) {
            const temp = next.next;
            next.next = node;
            node = next;
            next = temp;
        }
        this.head.next = null;
        this.head = node;

        return this;
    }

    delete(value) {
        let index = 0;
        let node = this.head;
        while( node.next && node.value != value){
            node = node.next;
            index++;    
        }
        if (index == this.length && node.value !=value ) return null;
        let {currentNode, prevNode} = this.traverseListToAPoint(index-1);
        const deletedItem = currentNode.value;
        prevNode.next = currentNode.next;
        return deletedItem;

    }
    printList() {
        let listArray = [];
        let currentNode = this.head;
        while(currentNode != null) {
            listArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listArray;
    }
}

let linkedlist = new LinkedList(1);
linkedlist.append(2);
linkedlist.append(4);
linkedlist.preappend(0);
linkedlist.insert(2, 3);

linkedlist.delete(5);

console.log(linkedlist.printList());

linkedlist.reverse();

console.log(linkedlist.printList());


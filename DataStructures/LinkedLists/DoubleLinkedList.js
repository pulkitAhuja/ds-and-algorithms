class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev
    }
}
class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value, null, null);
        this.length = 1;
        this.tail = this.head;
    }
    append(value) {
        let newNode = new Node(value, null, this.head);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    preappend(value) {
        let newNode = new Node(value, this.head, null);
        this.head.prev = newNode;
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
        let {currentNode, prevNode } = this.traverseListToAPoint(index);
        let newNode = new Node(value, null, prevNode);
        prevNode.next = newNode
        newNode.next = currentNode;
        currentNode.prev = newNode;
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
        currentNode.next.prev = prevNode;
        return deletedItem;

    }
    printList() {
        let listArray = [];
        let currentNode = this.head;
        while(currentNode != null) {
            listArray.push( currentNode.prev?.value + ' > ' + currentNode.value + ' > ' + currentNode.next?.value );
            currentNode = currentNode.next;
        }
        return listArray;
    }
}

let linkedlist = new DoubleLinkedList(1);
linkedlist.append(2);
linkedlist.append(4);
linkedlist.preappend(0);
linkedlist.insert(2, 3);

linkedlist.delete(2);

console.log(linkedlist.printList());

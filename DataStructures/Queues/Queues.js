class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek = () => {
        return this.first.value;
    }

    isEmpty = () => {
        return !this.length;
    }

    enqueue = (val) => {
        let newNode = new Node();
        newNode.value = val;
        let oldLast = this.last;
        this.last = newNode;
        this.length++
    

        if(oldLast !== null) {
            oldLast.next = newNode;
         }
        if(this.first == null) this.first = newNode;

    }

    dequeue = () => {
        if(this.first === null) return null;
        let oldFirst = this.first;
        this.first = this.first.next;
        this.length--;
        return oldFirst.value; 
    }

    print = () => {
        let node = this.first
        while(node) {
            console.log(' | ' + node.value + ' | ');
            node = node.next;
        }
    }
 
}

const myQueue = new Queue();

console.log('----- Enqueues -----');
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.print();
console.log('isEmpty', myQueue.isEmpty());
console.log('Length', myQueue.length);

console.log('----- Dequeues -----');
myQueue.dequeue();
myQueue.print();
console.log('isEmpty', myQueue.isEmpty());
console.log('Length', myQueue.length);

console.log('----- Dequeues -----');
myQueue.dequeue();
myQueue.dequeue();

myQueue.print();
console.log('isEmpty', myQueue.isEmpty());
console.log('Length', myQueue.length);
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    isEmpty = () => {
        return !this.length;
    }

    peek = () => {
        return this.top.value;
    }

    push = (value) => {
        let node = new Node(value, null);
        let oldTop = this.top;
        this.top = node;
        this.top.next = oldTop;
        this.length++; 

        if(this.length == 1) this.bottom = this.top;
    }

    pop = () => {
        if(this.length !== 0) {
            let val = this.top.value
            this.top = this.top.next
            this.length--;
            return val;
        } else return null  
    }

    print = () => {
        let node = this.top;
        if(node === null) console.log("Empty Stack") 
        while(node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }
 
}

const myStack = new Stack()

class Queue {
    constructor() {
        this.myStack_one = new Stack();
        this.myStack_two = new Stack();
    }

    enqueue = (val) => {
        // Remove everything from stack 1 and dump to stack 2
        while (!this.myStack_one.isEmpty()) {
            this.myStack_two.push(this.myStack_one.pop(val));
        }
        // Push new item to stack 1 to
        this.myStack_one.push(val);

        // Refill everything in stack 1 and from stack 2
        while (!this.myStack_two.isEmpty()) {
            this.myStack_one.push(this.myStack_two.pop(val));
        }
    }

    dequeue = () => {
        if(this.myStack_one.isEmpty()) return null;
        return this.myStack_one.pop();
    }

    print = () => {
        this.myStack_one.print();
    }
 
}

const myQueue = new Queue();

console.log('----- Enqueues -----');
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.print();
console.log('----- Dequeues -----');
myQueue.dequeue();
myQueue.dequeue();
myQueue.print();
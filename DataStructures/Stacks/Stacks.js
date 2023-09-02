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
        let val = this.top.value
        this.top = this.top.next
        return val;
    }

    print = () => {
        let node = this.top;
        while(node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }
 
}

const myStack = new Stack()

myStack.push(3);
myStack.push(2);
myStack.pop();
console.log(myStack.peek());
myStack.push(1);
myStack.print();

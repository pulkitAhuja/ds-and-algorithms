class Stack {
    constructor() {
        this.stack = [];
        this.top = this.stack[this.stack.length - 1];
        this.bottom = this.stack[0];
        this.length = this.stack.length;
    }

    update = () => {
        this.top = this.stack[this.stack.length - 1];
        this.bottom = this.stack[0];
        this.length = this.stack.length;
    }

    peek = () => {
        return this.top;
    }

    push = (value) => {
        this.stack.push(value);
        this.update();
    }

    pop = () => {
        if(this.length !== 0) {
            let val = this.stack[this.length - 1]
            this.stack.pop();
            this.update();
            return val;
        } else return null  
    }

    print = () => console.log(this.stack);
 
}

const myStack = new Stack()

myStack.push(3);
myStack.push(2);
myStack.pop();
console.log(myStack.peek());
myStack.push(1);
myStack.print();
console.log(myStack.length);
myStack.pop();
myStack.pop();
myStack.print();
console.log(myStack.length);


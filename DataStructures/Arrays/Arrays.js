// -------------------------------------------------------------------
// Basic Usage of Arrays with in-bult functionality
// -------------------------------------------------------------------

const arr = ['a', 'b', 'c', 'd', 'e'];

// push
arr.push('f');
arr.push('g');
console.log('arry after push =>', arr);

// pop
arr.pop();
console.log('arry after pop =>', arr);

// shift
arr.shift();
console.log('arry after shift =>', arr);

//delete
arr.splice(2, 1);
console.log('arry after delete', arr);


// -------------------------------------------------------------------
// Custom Array Implementation 
// -------------------------------------------------------------------

class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) { // O(1)
        this.data[index];
    }

    push(item) { // O(1)
        this.data[this.length] = item;
        this.length++;
    }

    pop() { // O(1)
        delete this.data[this.length - 1]
        this.length--;
    }

    shift(index) { // O(n)
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.pop();
    }

    splice(index, deleteCount) {      // O(n)
        if (deleteCount == 1) this.shift(index)
        else {
            const howManyToPop = deleteCount > this.length - index ? this.length - index : deleteCount;
            this.data[index] = this.data[index + howManyToPop];
            for (let i = 0; i < howManyToPop; i++) this.pop();
        }

    }
}

const arr2 = new CustomArray();

console.log('-------------Custom Array-------------');
console.log(arr);

//push
arr2.push('a');
arr2.push('b');
arr2.push('c');
arr2.push('d');
arr2.push('e');
arr2.push('f');
arr2.push('g');

console.log('arry after push =>', arr2);

//pop 
arr2.pop();
console.log('arry after pop =>', arr2);

//shift 
arr2.shift(2);
console.log('arry after shift =>', arr2);

//splice
arr2.splice(2, 0);
console.log('arry after splice =>', arr2);
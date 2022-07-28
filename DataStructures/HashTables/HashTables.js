class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) this.data[address] = [];
        this.data[address].push([key, value]);
        return this.data[address];
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) return currentBucket[i][1]
            }
        } return undefined;

    }

    keys() {
        const keys = [];
        for( let i=0; i<this.data.length; i++ ) {
            if(this.data[i]) keys.push(this.data[i][0][0])
        }
        return keys
    }
}

const myHashTable = new HashTable(10);

myHashTable.set('keya', 'Hash Value 1');
myHashTable.set('keyb', 'Hash Value 2');
myHashTable.set('keyc', 'Hash Value 3');

console.log(myHashTable);


console.log(myHashTable.get('keya'));
console.log(myHashTable.keys());




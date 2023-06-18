class Table {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key)
        const bucket = this.items[index]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if (sameKey) sameKey[1] = value
            else bucket.push([key, value])
        } else {
            this.items[index] = [[key, value]]
        }
    }
    get(key) {
        const index = this.hash(key)
        const bucket = this.items[index]
        if (bucket) {
            const item = bucket.find(item => item[0] === key)
            console.log(this.items)
            if (item) return item[1]
        } else {
            return null
        }
    }
    delete(key){
        const index = this.hash(key)
        const bucket = this.items[index]
        if(bucket){
            const item = bucket.find((item) => item[0] === key)
            
            if (item) bucket.splice(bucket.indexOf(item),1) 
        }
    }
}


const ht = new Table(10)
ht.set('name','Fawaz')
ht.set('age', 23)
ht.set('naem','Shaminas')
ht.set(10,'Yaseen')
ht.delete('age')

console.log(ht.get(10))
class LocalStorage {
    constructor(key) {
        this.key = key;
    }
    get data() {
        const str = 
            localStorage.getItem(this.key);
        return JSON.parse(str);
    }
    set data(data) {
        localStorage.setItem(
            this.key, 
            JSON.stringify(data));
    }
}
const aStorage = new LocalStorage('a');
aStorage.data = { item: 'abc' };
aStorage.data 

class Util {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static d = 23;
    static get e() {
        return 24;
    }
}

class Person {
    static createPerson() {
        return new Person('아무게');
    }
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
        if (new.target.name !== 'Person') {
            throw new Error('상속하지마');
        }
    }
    sayHi() {
        console.log(`hello ${this.name}`);
    }
}
class Canadian extends Person {
    constructor(name) {
        super(name);
    }
}
class Korean extends Person {
    constructor(name) {
        super(name);
    }
    getLicense() {
        return `${this.name} 면허증`;
    }
}

const koreanJay = new Korean('존');
koreanJay.sayHi();






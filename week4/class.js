class LocalStorage {
    constructor(key) {
        this.key = key;
    }
    get data() {
        const str = localStorage.getItem(this.key);
        return JSON.parse(str);
    }
    set data(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}

const aStorage = new LocalStorage('a');
aStorage.data = {item: 'abc'};

class Util {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // static d = 24;
    static get e() {
        return 22;
    }
}

Util.getRandomInt(1, 2); // 가능
// new Util().getRandomInt(1, 2); // 불가능


class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
        if(new.target.name !== 'Korean') {
            
        }
    }
    sayHi() {
        console.log(`hello ${this.name}`);
    }
}


class Korean extends Person {
    // static function도 상속받아 사용 가능
    constructor(name) {
        super(name); // 반드시 부모 생성자 호출해야 됨
    }
}
const korean1 = new Korean();
korean1.sayHi();
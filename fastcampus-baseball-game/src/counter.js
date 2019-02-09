// class Counter {

// }

const Counter = (function() {
    const VALUE = Symbol("counter value");
    return class {
        constructor(id) {
            this[VALUE] = 1;
            this.container = document.getElementById(id);
            this.container.innerHTML = this[VALUE];
        }
        increase() {

        }
    };
})();
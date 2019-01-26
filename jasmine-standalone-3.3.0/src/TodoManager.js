function TodoManager(todos) {
    // this._todos = todos || [];
    this._todos = [];
    if (todos) {
        todos.forEach(vo => {
            this.addTodo(vo.contents, vo.done);
        }, this);
    }
}

TodoManager.prototype.addTodo = function(contents) {
    var newTodo = {
        contents: contents,
        makeDone: function() {
            // this.done = true;
            Object.defineProperty(newTodo, 'done', {
                writable: false,
                value: true
            });
        }
    };
    Object.defineProperty(newTodo, 'done', {
        writable: false,
        value: false,
        configurable: true
    });

    this._todos.push(newTodo);
    return newTodo;
}

TodoManager.prototype.getList = function() {
    return this._todos;
}

Object.defineProperty(TodoManager.prototype, 'leftTodo', {
    get: function() {
        var leftCount = 0;
        for(let index=0; index<this._todos.length; index++) {
            const todo = this._todos[index];
            if(todo.done === false) {
                leftCount++;
            }
        }
        return leftCount;
    }
})
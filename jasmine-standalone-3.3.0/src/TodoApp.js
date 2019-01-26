function TodoApp(todos) {
    this.todoManager = new TodoManager(todos);
    this.todoContainerEl 
        = document.querySelector('.todo-container')
         || document.createElement('div');
    this.plusBtnEl
        = document.querySelector('.add-todo button')
            || document.createElement('button');
    this.renderTodos();
    this.bindEvent();     
}
TodoApp.prototype.renderTodos = function() {
    this.todoContainerEl.innerHTML = '';
    var todoList = this.todoManager.getList();
    // 파라미터가 없으면 전역(window), 파라미터가 있으면 그 this로 바뀜
    todoList.forEach(function(v, i) {    
        var todoEl = this.createTodoEl(v, i);
        this.todoContainerEl.appendChild(todoEl);
    }, this);// 이쪽 this 는 TodoApp
}
TodoApp.prototype.createTodoEl = function(todo, id) {
    var todoEl = document.createElement('div');
    todoEl.id = id;
    // backtick 으로 javascript 표현식을 넣을 수 있음
    todoEl.innerHTML =
     `<input type="checkbox" ${(todo.done) ? 'checked':''}> 
       <label>${todo.contents}</label>`;
    todoEl.className = 'todo';

    return todoEl;   
}
TodoApp.prototype.addTodo = function(contents) {
    this.todoManager.addTodo(contents);
    this.renderTodos();
}
TodoApp.prototype.bindEvent = function() {
    // this
    this.plusBtnEl.addEventListener('click', function (evt) {
        var inputEl = document.querySelector('.add-todo input');
        this.addTodo(inputEl.value);
        inputEl.value = '';
    }.bind(this));
    this.todoContainerEl.addEventListener('click', function(e){
        if (e.target.nodeName !== 'INPUT') return;
        var clickEl = e.target.parentElement;
        var todo = this.todoManager.getList()[clickEl.id];
        console.log(todo);
        todo.makeDone();
    }.bind(this));
}
describe('할 일 관리', () => {
    var todoManager;

    it('할 일 관리를 생성할 수 있다.', () => {
        todoManager = new TodoManager();
        expect(todoManager).toBeDefined();
    });
    
    it('할 일을 추가할 수 있다. 할 일은 아직 완료되지 않았다.', () => {
        var newTodo = todoManager.addTodo('study javascript')
        expect(newTodo.contents).toBe('study javascript');
        expect(newTodo.done).toBeFalsy();
    });

    it('할 일을 목록을 가져올 수 있다.', () => {
        var todoList = todoManager.getList();
        expect(todoList.length).toBe(1);
    });

    it('할 일을 완료할 수 있다. done 속성으로는 변경이 불가능하다. makeDone 메소드로 완료할 수 있다.', () => {
        var todoList = todoManager.getList();
        var todo = todoList[0];
        todo.done = true;
        expect(todo.done).toBeFalsy();
        todo.makeDone();
        expect(todo.done).toBeTruthy();
    });

    it('남은 할 일을 알 수 있다.', () => {
        todoManager.addTodo('play');
        expect(todoManager.leftTodo).toBe(1);
    });
});
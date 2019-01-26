describe('할 일 관리 앱', () => {
    var todoApp;

    it('초기데이터에 의해서 목록이 그려진다.', () => {
        todoApp = new TodoApp([
            { contents: "공부하기", done: false }
        ]);
        expect(todoApp.todoContainerEl.children.length)
            .toBe(1);
    });

    it('각 할 일요소는 체크박스와 라벨을 가지고 있다.', () => {
        todoApp = new TodoApp();
        var todoEl = 
            todoApp.createTodoEl({ contents: '헬로', done: false }, "1");
        expect(todoEl).toBeDefined();
        expect(todoEl.querySelector('input[type="checkbox"]')).toBeDefined();
        expect(todoEl.querySelector('label')).toBeDefined();
    });

    it('할일을 추가 할 수 있다.', () => {
        todoApp = new TodoApp();
        todoApp.addTodo("밥먹기");

        expect(todoApp.todoManager.getList().length).toBe(1);
        expect(todoApp.todoContainerEl.querySelector('input[type="checkbox"]'))
            .toBeDefined();
        
    })
});
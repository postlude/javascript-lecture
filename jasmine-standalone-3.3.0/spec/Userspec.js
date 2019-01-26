describe('User', function() {
    it('로그인을 할 수 있다.', () => {
        // given
        var user = new User();

        // when
        user.login();

        // then
        expect(user.loggedIn).toBe(true);
    });
});
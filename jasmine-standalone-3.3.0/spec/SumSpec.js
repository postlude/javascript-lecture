describe('Sum', () => {
    it('인자 2개 sum', () => {
        var result = sum(2, 3);

        expect(result).toBe(5);
    });

    it('인자 3개 sum', () => {
        var result = sum(2, 3, 4);

        expect(result).toBe(9);
    });
});
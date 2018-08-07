const add = (x,y) => x+y

test('it adds two numbers', () => {
    const res = add(3,4)
    expect(res).toBe(7)
})
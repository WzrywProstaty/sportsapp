import ClassIterator from './ClassIterator.ts'

const cliter = ClassIterator.default;

test('check if it works', ()=>{
    expect(
        cliter({
                c: true,
                s: 'yes01'
            },
            {
                c: false,
                s: 'yes02'
            },
            {
                c: !false,
                s: 'yes03'
            }
        )).toBe('yes01 yes03')
})

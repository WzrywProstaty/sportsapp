import ClassIterator from './ClassIterator.ts'

const cliter = ClassIterator.default;

test('check if it works', ()=>{
    expect(
        cliter(
            'string1',
            'string2',
            'string3'
        )).toBe('string1 string2 string3')
})

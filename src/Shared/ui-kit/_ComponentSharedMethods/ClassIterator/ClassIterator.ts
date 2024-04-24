import ClassIteratorArgument from './ClassIteratorTypes';

export default function classIterator(...args: ClassIteratorArgument[]): string{
    const classArr = [];
    for(let i=0; i<args.length; i++){
        arguments[i].c && classArr.push(arguments[i].s);
    }
    return classArr.join(' ');
}
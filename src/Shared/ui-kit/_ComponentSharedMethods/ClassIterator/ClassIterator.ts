export default function classIterator(...args: string[]): string{
    const classArr = [];
    for(let i= 0; i<args.length; i++){
        args[i] && classArr.push(args[i])
    }
    return classArr.join(' ');
}
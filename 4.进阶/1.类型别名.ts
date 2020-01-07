// 给类型起一个新的名字
type Name = string; // 后面就可以用Name来代替string
let a: string = "1";
let b: Name = "1"

type NameResolver = () => string;
type NameOrNameResolver = Name | NameResolver;

function getName(n: NameOrNameResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
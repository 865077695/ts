/**
 * 泛型指在定义函数、接口或类的时候，不预先指定具体类型，而在使用时再指定类型的一种特性
 * 
 */

function createArray(length: number, defaultV: any): Array<any> {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = defaultV
    }
    return arr;
}

createArray(3, "x");    // ['x','x','x']

// 上面的写法没有准确的定义返回的数组的值的类型，因此对于数组中元素的类型我们是不可知的。所以有下面这种写法，使我们在确定传入参数时可以知道返回的数组的元素类型
function createTArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createTArray<string>(3, 'x');


// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 泛型接口、泛型类

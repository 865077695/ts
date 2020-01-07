{
    /**
     * 布尔值
     */
    let isDone: boolean = false;

    /**
     * 数值
     */
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    // es中二进制表示法
    let binaryLiteral: number = 0b1010;
    // 8进制
    let octalLiteral: number = 0o744;
    let notANumber: number = NaN;
    let infinityNumber: number = Infinity;
}
{
    /**
     * 字符串
     */
    let myName: string = "zhiq";
    let myAge: number = 20;
    let sentence: string = `Hello, my name is ${myName}`;
}

{
    /**
     * 空值
     * JavaScript没有空值(Void)的概念，在Ts中，可以用void表示没有任何返回值的函数
     */
    let alertName = function (): void {
        alert("My name is zhiq");
    }

    let unusable: void = undefined;
    unusable = null;
    unusable = undefined;
}
{
    /**
     * null undefined
     * 与void的区别是，undefined和null是所有类型的子类型。也就是说undefined类型的变量，可以赋值给number类型的变量
     */
    let u: undefined = undefined;
    let n: null = null;

    let a: number;
    a = u = n;
}

{
    /**
     * 任意值 any,
     * 可以调用任意属性和方法
     * 可以认为声明一个变量为任意值后，对他的任意操作，都返回一个任意值
     */

    let a: any = 1;
    a = "string";

    let anything: any = "hello"
    console.log(anything.name);
    console.log(anything.name.firstname);
    anything.sing().jump().rap().basketball();
}

{
    /**
     * 未声明类型的变量
     * 变量如果在声明(注意是仅声明未赋值)的时候未指定类型，那么就会被识别为任意值类型
     */
    let somthing;
    somthing.name.say().rap();
    /**
     * 类型推论
     * 变量在声明赋值的时候为指定类型，会根据声明时给他赋值的类型来推断并将其类型设置为值的类型
     */
    let num = "123";
    // num = 1;    // 报错
}

{
    /**
     * 联合类型
     * 变量可以是多种类型中的一种
     * 但是我们只能访问多种类型中共有的属性和方法
     * 
     * 当联合类型被赋值之后，可以根据赋值的结果推断类型，然后就可以执行仅存在于该类型的方法
     */

    let a: string | number;
    a = 1;
    a = '1';

    let fn = function (something: string | number): number {
        // return something.length; // 会报错，因为number没有length方法

        something = "asdf"
        return something.length;    // 不会报错，因为something赋值了一个字符串，而字符串拥有length属性
    }

}

{
    /**
     * 对象的类型-接口
     * 在Ts中，使用接口(interface)来定义对象的类型
     * 
     * 什么是接口：在面向对象语言中，接口(interface)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要有由类(class)去实现(implement)
     * 
     * Ts中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对对象的形状进行描述
     * 
     * 对象的变量必须和接口变量保持一致，不能多不能少。对一些可有可无的属性可以通过?标识符来设置
     * 
     * 如果我们不清楚里面还可能有我们不知道是什么的属性可以用[propname: string]: any这种写法来约定
     */

    interface Person {
        readonly id: string;    // 只读属性，只能在第一次给对象设置只时设定
        name: string;
        age: string;
        gender?: string;
        [propname: string]: string; // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集,此时若其他属性为非string类型会报错
    }
    let zhiq: Person = {
        id: "id",
        name: "zhiq",
        age: "20",
        gender: 'male',  // 可选
        a: "1",
        b: "2",
        c: "3"
    }
}

{
    /**
     * 数组类型
     * 数组有多种定义方法
     */
    // 类型+[]
    let arr1: number[] = [1, 3, 4];
    // 数组泛型
    let arr2: Array<number> = [1, 2, 3];
    let arr3: Array<any> = [3, "cs", "asld"];

    // 用接口表示数组
    interface NumberArr {
        [index: number]: number;
    }
    let arr4: NumberArr = [1, 2, 3];

    // 类数组，不能直接定义为array类型，要用接口来定义
    interface Arguments {
        [index: number]: number;
        length: number;
        callee: Function;
    }

    let fn = function () {
        let args: Arguments = arguments;
        // 上面的写法很麻烦，事实上类数组都有自己内置的接口定义：
        let args1: IArguments = arguments;
    }

    // any
    let arr5: any[] = [1, "a", {}, []]
}
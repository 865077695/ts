/**
 * 声明文件： 当使用第三方库时，我们需要引入他的声明文件，才能获得对应的代码补全、接口提示等功能
 */
/**
 * 声明语句
 * declare并未真正的定义一个变量，只是定义了全局变量jquery的类型，仅仅用于编译时的检查，在编译结果中会被删除
 */
declare var $: (selector: string) => any;

/**
 * 声明文件
 * 将声明语句单独放到一个文件中,以.d.ts结尾命名
 *
 * 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了
 */


/**
 * 书写声明文件
 * 前面只介绍了最简单的声明文件内容，而真正书写一个声明文件并不是一件简单的事，以下详细介绍如何书写声明文件。
 * 
 * 不同场景，声明文件内容和使用方式会不一样：
 */
// 1. 全局变量：通过script引入的库。注入全局变量
declare var $0: (selector: string) => any;  // $0是一个接收string参数，返回any数据类型的函数

declare function $1(selector: string): any; // $1是一个接收string参数，返回any类型的函数
declare function $1(domReadyCallback: () => any): any; // 支持重载、接收一个函数参数，返回any

declare class Animal {  // 全局变量是一个类时，通过class来定义它的类型
    name: string;
    constructor(name: string);
    sayHi(): string;
}

declare enum Directions {   // 定义一个枚举类型的全局变量类型
    Up, Down, Left, Right
}

// var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]; // 编译结果  其中 Directions 是由第三方库定义好的全局变量


// declare namespace  namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。
// 比如 jQuery 是一个全局变量，它是一个对象，提供了一个 jQuery.ajax 方法可以调用，那么我们就应该使用 declare namespace jQuery 来声明这个拥有多个子属性的全局变量。



declare function jQuery(selector: string): any; // 声明合并，jQuery既是一个函数，可以被直接调用，又是一个对象，拥有子属性，可以用户声明合并的方式来组合多个声明语句
declare namespace jQuery {  // 全局变量jQuery上有一个方法ajax，ajax方法接收url和其他一些参数，没有返回值
    function ajax(url: string, settings?: any): void;
    const version: number;  // 注意，namespace内部的方法和属性不需要使用declare关键词来定义类型，直接声明就可以了
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }

    // 嵌套的命名空间，通过jQuery.fn.extend()访问
    namespace fn {
        function extend(object: any): void;
    }
}


// 2. npm包
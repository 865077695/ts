/**
 * public: 公有属性方法，除了可以在类内部使用，也可以通过实例访问，还可以在子类中通过super关键词访问，默认所有的属性和方法都是public的
 * private: 私有属性方法，只可以在类内部使用。不能通过实例访问
 * protected: 受保护的属性方法，和private类似，区别在于他在子类中是允许被访问的
 * 
 * 另外，当构造函数constructor由private修饰时，该类不允许被继承或实例化
 * 当构造函数修饰为protected时，该类可以被继承但不能实例化
 * 
 * 修饰符还可以用在构造函数参数中，等同于类中定义了该属性，使代码更简洁
 */

class Animal2 {
    public name;    // 先定义才能在构造函数中传入使用
    constructor(name, private readonly gender) { // 直接在函数参数中修饰、相当于在类中定义了该属性，比name的定义方式简洁，注意有多个修饰符时，readonly在后面
        this.name = name;
        this.gender = gender;
    }

    public age = 1; // es7的写法可以直接在构造函数外写属性
    private b = 2;
}


/**
 * 抽象类：
 * abstract用于定义抽象类和其中的抽象方法
 * 
 * 抽象类不允许被实例化，可以被继承，抽象类内的抽象方法必须被子类实现(implement)
 */


/**
 * 类的类型
 */

class Animal3 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
        return `this is ${this.name}`;
    }
}

let a3: Animal3 = new Animal3("zhiq")

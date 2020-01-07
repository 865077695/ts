/**
 * 前面我们知道接口(interface)可以对对象的形状进行描述。
 * 而实现(implements)是对象中的另一重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可能有一些共性，这时候我们可以把这些特性提取成接口(interface),用implements关键字来实现(注意这里的实现是关键词)。例如门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它
 */

//  共有的方法作为一个接口,implements这个接口的类必须实现这个接口规定的方法
interface Alarm {
    alert();
}

interface Light {
    lightOn();
    lightOff();
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log("SecurityDoor alert");
    }
}

class Car implements Alarm, Light {
    alert() {
        console.log('car alert');
    }
    lightOn() {
        console.log("light on");
    }
    lightOff() {
        console.log("light off");
    }
}
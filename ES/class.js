// 函数声明
// function PersonType(name) {
//     this.name = name;
// }

// PersonType.prototype.output = function () {
//     console.log(this.name);
// }

// var person = new PersonType("读心");

// person.output();

// console.log(person instanceof PersonType);
// console.log(person instanceof Object);


// 类声明
class PersonClass {
    constructor(name) {
        this.name = name;
    };
    output() {
        console.log(this.name)
    }
}

let person1 = new PersonClass("读心悦");

person1.output();

console.log(typeof PersonClass)


/**
 * 函数声明可以被提升，类声明和let声明相似，不能被提升；
 * 类声明中的所有代码自动运行在严格模式下，不能强行让代码脱离严格模式；
 * 在类中，所有的方法都是不可枚举的，函数声明中，需要通过使用Object.defineProperty()放来来指定某个方法为不可枚举；
 * 除了使用new关键字以外的方式调用类的构造函数，会导致程序抛出错误；
 */


let PersonType2 = (function () {
    "use strict";
    const PersonType2 = function (name) {
        if (typeof new.target === "undefined") {
            console.log(900000000)
            throw new Error("必须使用new关键字调用构造函数");
        }
        this.name = name;
    }

    Object.defineProperty(PersonType2.prototype, "output", {
        value: function () {
            if (typeof new.target !== "undefined") {
                throw new Error("不能使用new关键字调用该方法");
            }
            console.log(this.name);
        },
        enumerable: false, // 属性是否可以被遍历
        writable: true,// 属性是否可以写入
        configurable: true, // 属性是否可以被删除
    });

    return PersonType2
}());


const ss = new PersonType2("读心悦12");

console.log(ss.name)


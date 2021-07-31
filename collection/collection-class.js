/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-30 23:21:43
 * @LastEditTime: 2021-07-31 12:04:06
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 集合的类声明
 * @FilePath: \JavaScript\collection\collection-class.js
 * 
 */
class Set {
    constructor() {
        this.items = {}; // 用对象来表示集合
    }

    has(element) {
        // Object原型有hasOwnProperty方法，它返回一个表明对象是否具有特定属性的布尔值
        //  in 运算符返回的是对象在原型链上是否具有特定属性的布尔值
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    // 往集合添加成员
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    //  删除集合成员
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    // 清空集合成员

    clear() {
        return this.items = {}
    }
    // 返回集合大小
    size() {
        return Object.keys(this.items).length;
    }
    // 返回的集合成员的值
    values() {
        return Object.values(this.items)
    }
}


const set = new Set();


set.add(1)
console.log(set.values()); // [1]
console.log(set.has(2));// false
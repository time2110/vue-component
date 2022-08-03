// 拷贝函数
export const deepClone = (target) => {
    const type = getObjType(target)
    let result;
    if (type === 'array') {
        result = [];
        for (let i in target) {
            result.push(deepClone(target[i]))
        }
    }else if(type === 'object'){
        result = {};
        for (let i in target) {
            result[i] = deepClone(target[i]);
        }
    }else {
        result = target
    }
    return result;
}
// 获取对象类型
export const getObjType = obj => {
    let toString = Object.prototype.toString
    let map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    if (obj instanceof Element) {
        return 'element'
    }
    return map[toString.call(obj)]
}
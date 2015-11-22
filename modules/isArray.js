export  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}


export function isString(input) {

    return Object.prototype.toString.call(input) === '[object String]';

}

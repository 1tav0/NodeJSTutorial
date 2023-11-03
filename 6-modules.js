//modules: is encapsulated code (only sharing the minimum)
// every file in node is a module
const names = require('./2-names');
const sayHi = require('./3-utils');
const data = require('./4-exports');
require('./5-ming-grenade');
console.log(data);
sayHi(names.tavo);

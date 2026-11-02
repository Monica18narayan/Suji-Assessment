A1.
Write the EXACT console output and explain the ordering strictly in terms of the call stack, the microtask queue, and the macrotask queue.
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
(async () => {
 console.log('4');
 await Promise.resolve();
 console.log('5');
})();
Promise.resolve().then(() => console.log('6'));
console.log('7');

1
4
7
3
5
6
2

1,4,7 is Synchronous ,
3 is asynchronous with microtask->it has high priority compare to macrotask
5 is aynchronous here we used await it will wait until the operation complete
6 is microtask asynchronous
2 is macrotask 


A2.   
Give the output of the following, then explain precisely WHY the two halves differ. Finally, rewrite the first loop so it prints the same values as the second WITHOUT using let or const.
const fns = [];
for (var i = 0; i < 3; i++) { fns.push(() => i); }
for (let j = 0; j < 3; j++) { fns.push(() => j); }
console.log(fns.map(f => f()).join(','));

0,1,2,0,1,2

fns is empty array,from that we used var that is function scoped iterating 0,1,2 , and push into fns and same using let block scoped interate 0,1,2 and using join it converts the array into string 

var->it is function scoped
let->it is block scoped
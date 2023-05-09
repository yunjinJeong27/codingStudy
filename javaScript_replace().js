// replace()
var str = 'hello java';
console.log(str.replace('java', 'javascript')); //hello javascript

// 특정 값을 모두 바꾸고 싶으면: /java/g
var str = "hello javascript java";
console.log(str.replace(/java/g, 'type')); //"hello typescript type'

// 대소문자를 구별하지 않으려면,  /java/gi
var str = "hello javascript Java";
console.log(str.replace(/java/gi, 'type'));
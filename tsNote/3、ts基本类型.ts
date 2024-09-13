/*
//声明变量a，同时指定它的类型为number
let a:number;
//a 的类型设置为了number,在以后得使用过程中a的值只能是数字
a=10;
a=30;
//a=''hello";//此代码会报错，因为变量a的类型是number，不能赋字符串；

let b:string;
b='hello'
b=10；//会报错

//有指定类型后  出错的机会会降低很多

//声明完变量后直接进行赋值
let c:boolean=false;
//如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let c=false;
c=true;

js中的函数是不考虑参数的类型和个数的
function sum(a:number,b:number):number{  //最后的number表示函数返回值的类型
   rerurn a+b；
}
sum（a:123,b:456）
console.log(sum)

*/
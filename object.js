// let stud={name:"alan",age:20,cls:"10th"}

// let studkeys=Object.keys(stud)
// for(i in studkeys){
//     console.log(studkeys[i]+"="+stud[studkeys[i]])
// }



// let stud={name:"alan",age:20,cls:"10th"}
// // console.log(Object.entries(stud));

// studarray=Object.entries(stud);
// for(i in studarray){
//     console.log(studarray[i][0]+" : "+studarray[i][1]);

// }


// let stud={name:"alan",age:20,cls:"10th"}


// studarray=Object.entries(stud);
// for(let[key,value]of studarray){
//     console.log(key+":"+value);
// }


//NESTEDdestructuring


// let stud={name:"alan",age:20,cls:"10th",marks:{math:90,science:95}};
// let {name,age,cls,marks:{math,science}}=stud;
// console.log(math);


//function destructuring

// let stud={name:"alan",age:20,cls:"10th",Marks:{math:90,science:95}};
// function asd({name,age,cls,Marks:{math,science}}){
//     console.log(`Name: ${name},Age: ${age},class:${cls},Math Marks: ${math},Science:${science} `);
// }
// asd(stud)


//array destructuring

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let[a,b,c,d,e,f,g,h,i,j]=arr;

// console.log(`a: ${a},b:${b},c:${c},d:${d},e:${e},f:${f},g:${g},h:${h},i:${i},j:${j}`);




//call by referencre

// let a=[100]
// let b=a
// b[0]+=1
// console.log(a[0]);
// console.log(b[0]);



//spread operator

// let a=[100]
// let b=[...a]
// b[0]+=1
// console.log(a[0]);
// console.log(b[0]);



//call by reference


// function ChangeValue(num){
//     // console.log(num);
//     num=30;
//     console.log(num,"inside the function")
// }

// let number=20;
// console.log(number,"before calling function")

// ChangeValue(number);
// console.log(number,"after calling the function")



// function ChangeValue(array){
//     array=[10,20,30,40]
//     console.log(array,"inside the functoion")


// } 
// let array=[1,2,3,4,5,6]
// console.log(array,"before calling function")
// ChangeValue(array);

// console.log(array,"after calling the funnction")



// function ChangeValue(array){
//     array.push(7)
//     console.log(array,"inside the functoion")


// } 
// let array=[1,2,3,4,5,6]
// console.log(array,"before calling function")
// ChangeValue(array);

// console.log(array,"after calling the funnction")



//call back function

// function synnefo(parm1) {
//     console.log("hello inside the function");
//     parm1("some other function"); 
// }

// console.log("hi outside the function");

// synnefo(message) {
//     console.log("Callback executed with message:", message);
// });


//set timeout
// console.log("start")
// setTimeout(() => {
//         console.log("hello there")
//     }, 5000);

//     console.log("end")


//set interval

// setInterval(()=>{

//     console.log("printing hello")
// },1000)

console.log("start")
function abc(){
    setTimeout(() =>{
        console.log("inside the outer set tiimeout");
        setTimeout(()=>{
            console.log("inside the inner settimeout");
            setTimeout(()=>{
                console.log("inner the innermost settimeout");
                setTimeout(()=>{
                    console.log("outer the set timeout")
                },1000)
            },2000)
        },3000)

    },4000)
}

console.log("end")







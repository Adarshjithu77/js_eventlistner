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




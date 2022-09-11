// console.log("hello world",(4+6) ,"anpther log");
//         // document.write("this is a document write")
// console.warn("This is the warning")
// console.error("this is an error")
//         // alert("me")
        var number1=34;
        var number2=45;
        // console.log(number1 + number2);
        //numbers
        var num1=453;
        var num2=56.566;
        //strings
        var str1="this is a string";
        var str2="this is a another string";
        // objects 
        var marks={
        ravi:34,
        shunham: 76,
        Aakriti : 89
        }
        //booleans
        var a= true;
        var b=false;
        // console.log(marks)
        // console.log(a,b)
         var und=undefined;
         var n= null
        //  console.log(und);
        //  console.log(n)
          var arr=[1,2,3,4,5]
        var c=34;
        var d= 56;
        console.log("the value of c+d is ",c+d);
        console.log("the value of c-d is ",c-d);
        console.log("the value of c*d is ",c*d);
        console.log("the value of c/d is ",c/d);
         var e=d;
         e +=2;
        //  console.log(e);
        //  var x=90;
        //  var y=79;
        //  console.log(x==y)
        //  console.log(x>=y);
        //  console.log(x<y);
//logical operator
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && true)

// console.log(true ||true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


// logical nor
// console.log(! false)
// console.log(!true)


// using function 
//DRY = Do no repeat yourself
function avg(a,b)
{
return (a+b)/2;
}
c1=avg(4,6);
c2=avg(10,15);
// console.log(c1,c2)

// conditionals in javascript
// var age=34;
// if (age>18)
// {
//  console.log("you are not a kid") 
// }
// else{
//   console.log("you are a kid")
// }

//loops
var arr=[1,2,3,4,5,6,7]
// console.log(arr)
// //for loop
// for(var i = 0; i<arr.length;i++)
// {
//   console.log(arr[i])
// }

//next way to display
  // arr.forEach(function(element)
  // {
  //   console.log(element)
  // })

  //while loop
   let j=0;
  // while(j<arr.length)
  // {
  //   console.log(arr[j])
  //   j++
  // }

  // do while
  // do{
  //   console.log(arr[j])
  //   j++
  // }
  // while(j<arr.length)

  // let myarr=["fan","camera",34,null,true];
  // // Array methods
  // console.log(myarr.lenght)
  // myarr.pop();
  // // myarr.push("Aakriti")
  // myarr.shift()
  // myarr.unshift("Aakriti")
  
  // console.log(myarr)

  //string methods
  // let mystring="Aakriti is a good girl"
  // console.log(mystring)
  //show the index of good 
  // console.log(mystring.indexOf("good"))

  // to slice the words

  // console.log(mystring.slice(0,3))

  // to replace the data 

  // d=mystring.replace("Aakriti","Rama")
  // console.log(d,mystring)

//   let mydate= new Date();
//   console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
// console.log(mydate.getHours());
 
//DOM manipulation 
 
let elem = document.getElementById('click');
// console.log(elem);
 let elemclass = document.getElementsByClassName("container")
//  console.log(elemclass);
//  elemclass[0].style.background="yellow"

// to add the element 

// elemclass[0].classList.add('bg-primary')
// elemclass[0].classList.add('text-success')
 
// // to remove the element 

// elemclass[0].classList.remove('text-success')
//  console.log(elem.innerHTML)
//  console.log(elem.innerText)

//  console.log(elemclass[0].innerHTML)
//  console.log(elemclass[0].innerText)

// get element by tag name

tn = document.getElementsByTagName('div')
console.log(tn)





































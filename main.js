// Exercise 1:///

// var form = document.getElementById("userForm");
// var userMail = document.getElementById("userMail");
// var password1 = document.getElementById("password");
// var password2 = document.getElementById("confirmPassword");
// var subButton = document.getElementById("btn1");
// var para1 = document.getElementById("para1");
// var container = document.getElementById("container");
// var newArr =[];

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (password1.value == password2.value) {
//     container.innerHTML += `<p style="background-color: red;">password is not correct</p>`;
//   } else {
//     container.innerHTML += `<p style="background-color: green;">pssword is correct</p>`;
//   }

//   if (password1.value.length != password2.value.length > 8) {
//     container.innerHTML += `<p style="background-color: red;">password lenght is not correct</p>`;
//   } else {
//     container.innerHTML += `<p style="background-color: green;">pssword length is correct</p>`;
//   }
//   var user = {
//       email: userMail.value,
//       password: password1.value,
//       validPassword: password2.value
//   };
//   newArr.push(user);
// });

// console.log(newArr);



// Exercise 7:///

// const btn = document.getElementById("btn");
// const targetDiv = document.getElementById("target");

// btn.addEventListener("click",()=>{
//     console.log(targetDiv.style.height);
//     targetDiv.style.height=parseInt(targetDiv.style.height)-10 + "px";
//     targetDiv.style.width=parseInt(targetDiv.style.width)-10 + "px";
//     targetDiv.style.marginTop=parseInt(targetDiv.style.marginTop)-50+"px";
//     targetDiv.style.marginLeft=parseInt(targetDiv.style.marginLeft)+50+"px";
// });

// Exercise 8:///

// const btn2 = document.getElementById("btn2");
// const targetDiv2 = document.getElementById("target2");

// var moveRandom =setInterval(() => {
//     targetDiv2.style.top = Math.floor(Math.random()*300)+"px";
//     targetDiv2.style.left = Math.floor(Math.random()*1000)+"px";
// }, 1000);

// btn2.addEventListener("click", () => {
//   clearInterval(moveRandom);
// });

// Exercise 9:///

// var divContainer= document.getElementById("flagesHolder");
// var para1= document.getElementById("counterHolder");
// var btnFlag =document.getElementById("btnFlag");
// var counter = 0;

// const countries = [
//   { country: "Ethioia", flag: "https://www.worldometers.info/img/flags/et-flag.gif" },
//   { country: "South-Africa", flag: "https://www.worldometers.info/img/flags/sf-flag.gif" },
//   { country: "Jamaica", flag: "https://www.worldometers.info/img/flags/jm-flag.gif" },
//   { country: "Spain", flag: "https://www.worldometers.info/img/flags/sp-flag.gif" },
//   { country: "Thailand", flag: "https://www.worldometers.info/img/flags/th-flag.gif" },
//   { country: "Israel", flag: "https://www.worldometers.info/img/flags/is-flag.gif" },
//   { country: "United-states", flag: "https://www.worldometers.info/img/flags/us-flag.gif" },
// ];

// // a://

// setInterval(() => {
//     for(var i=0; i<countries.length; i++){
//         // divContainer.innerHTML+=`<h2>${countries[i].country}</h2>`;
//         divContainer.innerHTML+=`<img src="${countries[i].flag}">`;
//     }
//     setTimeout(() => {
//         divContainer.innerHTML=""
//     },3000);
    
// },7000);

// // // b://
// divContainer.addEventListener("click",(e)=>{
//     console.log(e.clientX,e.clientY);
//     e.target.remove();
//     counter+=1;
//     para1.innerHTML=counter+1;
// })

// btnFlag.onclick=()=>{
//     divContainer.innerHTML+=counter=0;
// }

// c://


// Exercise 10:///





























































let pass=document.getElementById("password")
const upperCase = document.getElementById("upperCase")
const lowerCase = document.getElementById("lowerCase")
const number = document.getElementById("numbers")
const symbol = document.getElementById("symbols")
let passRange = document.getElementById("rangeInput")
let rangeId = document.getElementById("rangeId")

document.querySelector(".copyBtn").addEventListener("click",()=>{
  navigator.clipboard.writeText(pass.innerText);
  alert("password copyed");
});

passRange.addEventListener("input",()=>{
    rangeId.innerHTML=passRange.value;
});

const generatePassBtn = document.querySelector('.generatePassBtn')

generatePassBtn.addEventListener("click",()=>{

let upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseStr = "abcdefghiklmnopqrstuvwxyz";
let numberStr = "0123456789";
let symbolStr = "!~@#$%^&*?";

let password ="";

if(upperCase.checked){
  password += upperCaseStr;
}

if(lowerCase.checked){
   password += lowerCaseStr;
 }

 if(number.checked){
   password += numberStr;
 }

 if(symbol.checked){
   password += symbolStr;
 }
 
 if(password !=""){
  let finalPassword = "";

     for (let i = 0; i < passRange.value; i++) {

      let rendomNumber = Math.floor(Math.random()*password.length);
         finalPassword += password[rendomNumber];
      }
      pass.innerText = finalPassword;
      //console.log(password);
      //console.log(finalPassword);
 }
 else{
  alert("please eatlist select one option");
 }

});
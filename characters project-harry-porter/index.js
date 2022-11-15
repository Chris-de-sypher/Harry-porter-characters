const sigup = document.querySelector("#signUp")
const login = document.querySelector("#login")
const forget = document.querySelector("#forget")

const fail = document.querySelector("#fail")
const sucess = document.querySelector("#suc")
const msg = document.querySelector("#msg")

const form = document.querySelector("form")
const forEmail = document.querySelector(".forEmail")
const forName = document.querySelector(".forName")
const forTel = document.querySelector(".forTel")
const forPass = document.querySelector(".forPass")

const name = document.querySelector("#myname")
const email = document.querySelector("#myemail")
const mynum = document.querySelector("#mynum")
const pass = document.querySelector("#mypass")

const eyesSpan = document.querySelector("#eyes-yes")
const eyes = document.querySelector(".fa-eye")
const eyeSlash = document.querySelector(".fa-eye-slash")
// const btn = document.querySelector('button')

form.addEventListener("submit", function(e){
    e.preventDefault();
    run()
})

function run(){
    if(name.value === '' || email.value === '' || mynum.value === '' || pass.value === ''){
        fail.style.background = "red";
        msg.style.display = "block";
        msg.innerHTML = "Please fill in details";
        setTimeout(()=>{
            fail.style.background = "";
            msg.style.display = "";
        },2000);
    }else{
        if(name.value.includes('@') || name.value.includes('#')){
            fail.style.background = "red";
            name.style.borderColor = "red";
        } if(!email.value.includes('@')){
            fail.style.background = "red";
            msg.style.display = "block";
            msg.innerHTML = "Email must include @"; 
        }if(mynum.value.includes('')){
            fail.style.background = "red";
            mynum.style.borderColor = "red";
        }
    }
}


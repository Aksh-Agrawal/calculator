let inputMSG = document.querySelector(".input-msg");
let btn = document.querySelectorAll(".icon");
let eq = document.querySelector(".eq");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let Back = document.querySelector(".backspace")

function calc () {btn.forEach((button) => {
  button.addEventListener("click", () => {
    let EQ = button.getAttribute("id");
   let valu = eq.innerText = eq.innerText+=EQ
   let uu = inputMSG.innerText=valu
   console.log(uu)
})
})};
calc(inputMSG);
clear.addEventListener("click", () => {
  inputMSG.innerText = ""
  eq.innerText = ""
})
equal.addEventListener("click",()=> {
  try{
  inputMSG.innerText = eval(inputMSG.innerText)
  } catch(errot){
    inputMSG.innerText = "Error"
  }
})

Back.addEventListener("click", () => {
  console.log("back")
  inputMSG.innerText = inputMSG.innerText.slice(0,-1);
  eq.innerText = eq.innerText.slice(0,-1)
})
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
const number = document.querySelector(".span");
const save = document.querySelector("#save")
const par = document.querySelector("h3");
let count = 0;
// Click event on increase
increase.addEventListener("click", function(){
    count ++;
    number.innerHTML = count;
});
decrease.addEventListener("click", function(){
    count --;
    number.innerHTML = count;
    if(count < 1){
        number.style.color= "red";
    }
});
reset.addEventListener("click", function(){
    count = 0;
    number.textContent = "";
})
save.addEventListener("click", function(){
    par.textContent += `${count}     `+",";
    par.style.color = "green";
    par.style.fontSize = "1.8rem";
});
const button = document.querySelector("button");
const List = document.querySelector("ul");
const input = document.querySelector("input");

const li = document.createElement("li");
const liButton = document.createElement("button");
const liText = document.createElement("span");

button.addEventListener('click',function(){
    const item = input.value; 
    input.value = " ";

    li.appendChild(liText);
    liText.innerText = item;

    console.log(li)
}); 
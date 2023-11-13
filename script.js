const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");

const li = document.createElement("li");
const liButton = document.createElement("button");
const liText = document.createElement("span");

button.addEventListener('click',function(){
    const item = input.value; 
        input.value = " ";

    li.appendChild(liText);
    liText.innerText = item;
    li.appendChild(liButton);
    liButton.innerText = "Delete";
    list.appendChild(li);

}); 

liButton.addEventListener('click', function(){
    list.removeChild(li);
});
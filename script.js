const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");

button.addEventListener('click',function(){
    const li = document.createElement("li");
    const liButton = document.createElement("button");
    const liText = document.createElement("span");
    
    const item = input.value; 
        
    li.appendChild(liText);
    liText.textContent = item;
    li.appendChild(liButton);
    liButton.textContent = "Delete";
    list.appendChild(li);

console.log(liText);

    liButton.addEventListener('click', function(){
        list.removeChild(li);

    input.focus();
}); 
});
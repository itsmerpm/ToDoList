//Enter button to submit
const input = document.querySelector(".textbox");
const pressbtn = document.querySelector(".btn")
input.addEventListener("keyup",(e)=>{
    e.preventDefault();
    if(e.keyCode === 13){
        pressbtn.click();
    }

})
//main code -- Adding Tasks
document.querySelector(".btn").onclick = function () {
    if (document.querySelector(".textbox").value.length == 0) {
        alert("Enter a Task");
    } else {
        const inputbox = document.querySelector(".textbox");
        const ul = document.querySelector("#tasks ul");
        const li = document.createElement("li");
        const span = document.createElement("span");
        const editBtn = document.createElement("button");
        editBtn.classList.add("sp1");
        editBtn.innerHTML = '<i class="fa-solid fa-edit"></i>'
        li.innerText = inputbox.value;
        ul.appendChild(li);
        span.innerHTML = '<i class="fa-solid fa-check"></i>';
        li.appendChild(span);
        li.appendChild(editBtn);
    }
    // edit btn
    const deletebtn = document.querySelectorAll(".sp1")
    let li = document.querySelector("li")
    for (let i = 0; i < deletebtn.length; i++){
        deletebtn[i].addEventListener("click",()=>{
            document.querySelector(".textbox").value = deletebtn[i].parentNode.innerText;
            document.querySelector(".textbox").focus();
            deletebtn[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                deletebtn[i].parentElement.remove();
            }, 200);
            
        })
    }
    // Tick button
    const close = document.querySelectorAll("span");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", () => {
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.remove();
            }, 500);
        });
    }

  
//clear all button 
    const clearallbtn = document.querySelector("#clearallbtn");
    for (let i = 0; i < close.length; i++) {
        clearallbtn.addEventListener("click", () => {
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                clearallbtn.style.display = "none"
                close[i].parentElement.remove();
            }, 500);
            
        });
       
    }
    //clear button visibility
    if(close){
        clearallbtn.style.display = "block";
    }
    



   //empty input box after enter
    document.querySelector(".textbox").value = "";
};



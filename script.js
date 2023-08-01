document.querySelector(".btn").onclick = function () {
    if (document.querySelector(".textbox").value.length == 0) {
        alert("Enter a Task");
    } else {
        const inputbox = document.querySelector(".textbox");
        const ul = document.querySelector("#tasks ul");
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerText = inputbox.value;
        ul.appendChild(li);
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(span);
    }

    const close = document.querySelectorAll("span");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", () => {
            console.log(close[0].parentElement);
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.remove();
            }, 500);
        });
    }

    document.querySelector(".textbox").value = "";
};

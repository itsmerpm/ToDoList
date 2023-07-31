document.querySelector(".btn").onclick=function(){
    if (document.querySelector(".textbox").value.length==0){
        alert("Enter a Task")
    }
    else{
      document.querySelector("#tasks").innerHTML+=`
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.textbox').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // var current_task = document.querySelector(".delete");
        // for(var i=0; i<current_task.length; i++)
        // {
        //     current_task[i].onclick= function()
        //     {
        //         this.parentNode.remove();
        //         console.log(this.parentElement.remove());
        //     }
        // }
    
   
    // const del= document.querySelector(".delete");
    // const taskname = document.querySelector("#taskname");
    // del.onclick= function(){
    //     taskname.remove()
    //     del.remove()

    // }

    
       
    }

    const del= document.querySelectorAll(".delete");
    
    

    for(i=0;i<del.length;i++){

        del[i].addEventListener('click',()=>{
            alert("hello")
            console.log(del.parentElement);

            del[i].parentElement.style.display="none"



        })

    }

    
    }

    // ref https://www.youtube.com/watch?v=7Yigdj6lEXk
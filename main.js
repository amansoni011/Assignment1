const formContainer = document.getElementById("formContainer");
const Create = document.getElementById("Create");
const userForm = document.getElementById("userForm");
const items = document.getElementById("items");


let Users = JSON.parse(localStorage.getItem("Users")) || [];
showUsers(Users);

Create.addEventListener("click",() =>{
    console.log("add ho gaya");
formContainer.classList.toggle("hidden");
userForm.reset();
})

userForm.addEventListener("submit",() =>{
    console.log("user add ho gaya ");
    const userUrl = document.getElementById("userUrl");
    const First = document.getElementById("First");
    const Last = document.getElementById("Last");
    const userEmail = document.getElementById("userEmail");
    const userObj={
    userUrl:userUrl.value,
    First:First.value,
    Last:Last.value,
    userEmail:userEmail.value
    }
    Users.push(userObj);
    localStorage.setItem("Users",JSON.stringify(Users));
})

// Display Users on the dom
 function showUsers(Users){
    Users.forEach((user,index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML= `
        <h2>${index+1}</h2>
        <div class="itImg">
        <img src="${user.userUrl}" alt="image" />
        </div>
        <h2>${user.First}</h2>
        <h2>${user.Last}</h2>
        <h2>${user.userEmail}</h2>
        <div>
           <button id="Edit" onclick="editUser(${index})">Edit</button>
            <button id="Delete" onclick="deleteUser(${index})">Delete</button>
        </div>
        `;
    items.appendChild(itemDiv);
    });

 }
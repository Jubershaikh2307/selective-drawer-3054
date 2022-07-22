let arr= JSON.parse(localStorage.getItem("selective-drawer-3054")) || []

document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(name== "" || email== "" || password ==""){
        alert("Please fill all details")
    }else{
        let obj={
            name:name,
            email:email,
            password:password
        }
        arr.push(obj);
        localStorage.setItem("selective-drawer-3054",JSON.stringify(arr))
    }

})

console.log(arr)
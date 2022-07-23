let arr= JSON.parse(localStorage.getItem("selective-drawer-3054")) || []

document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
    let check=false
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(email== "" || password ==""){
        alert("Please fill all details")
    }else{
        arr.map(function(val){
            if(email==val.email && password == val.password){
                check=true;
            }
        })
        if(check){
            alert("Successfull")
        }else{
            alert("Fail")
        }
    }
})

// console.log(arr)
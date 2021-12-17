var flag=false;
function Signup(e){
    e.preventDefault();
    let myform = document.getElementById("signup-form");
    let firstname=myform.firstname.value;
    let lastname =myform.lastname.value;
    let Email = myform.email.value;
    let password=myform.password.value;

    console.log(email);
    
    if(localStorage.getItem("users")==null){
        localStorage.setItem("users", JSON.stringify([]));
    }
    let user = {
        firstname,
        lastname,
        Email,
        password,
    }
    if(user.Email===""){
       alert("Not an valid Email")
    }
    else{
        window.location.href='login.html';
    }
    /// get arr from local storage 
    let arr =  JSON.parse(localStorage.getItem("users"));
    arr.push(user);

    localStorage.setItem("users", JSON.stringify(arr));
}



var all_users = JSON.parse(localStorage.getItem("users"));
        function login(e){
                e.preventDefault();
                let myform = document.getElementById("login-form");
                let Email = myform.email.value;
                let password=myform.password.value;
                for(var i=0;i<all_users.length;i++){
                    if(all_users[i].Email===Email&&all_users[i].password===password){
                        flag=true;
                        break;                   
                    }else{
                        flag=false;
                    }
                }
                if(flag===true){
                    window.location.href = "index.html";
                }else{
                    alert("Please enter a valid Email and Password");
                }
             }



    let tab=document.getElementById("tab-1");
    tab.addEventListener("click",openlogin);
    function openlogin(){
        window.location.href="login.html"
    }
    let tab1=document.getElementById("tab-2");
    tab1.addEventListener("click",opensignup);
    function opensignup(){
        window.location.href="signup.html"
    }
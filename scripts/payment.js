let mail=document.getElementById("mail");
let address1=document.getElementById("address");
let mode = document.getElementById("mode");
let btn=document.getElementById("codbtn");

let address = JSON.parse(localStorage.getItem('skin_address'))
console.log(address[address.length - 1]);
let lastAddress = address[address.length - 1];
mail.textContent=lastAddress.Email;
address1.textContent=lastAddress.firstname+" "+lastAddress.lastname+" "+lastAddress.Adress+" "+lastAddress.Adress1+" "+lastAddress.City+" "+lastAddress.State+" "+lastAddress.Pincode+" "+lastAddress.country1;
mode.textContent="Cash on Delivery"

btn.onclick =()=>{
    alert("thank you ! You have successfully ordered");
    window.location.href="index.html"
}


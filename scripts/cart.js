let cart_data = JSON.parse(localStorage.getItem("skin_cart"));
        var total = 0;
// let data_div = document.querySelector("#cart_data");
let totalAmount = document.getElementById('totalAmount');
let proceedToPay = document.getElementById('proceedtopay');
let cartItem = document.getElementById('cartItem');
let order = document.getElementById('order');
let shipping = document.getElementById('shipping');
let count = 0;
let datadiv = document.getElementById("cart_data");
let data = []
cart_data = filter(cart_data);
console.log(cart_data);
function Cart_items() {
    proceedToPay.onclick = ()=>{
        window.location.href = 'adress.html'
    }
        cart_data.forEach(function (product) {
                let div = document.createElement("div");
                let divtxt = document.createElement("span");
                let pn=document.createElement("p");
                pn.innerText=product.prodh2
                let m_name = document.createElement('p');
                m_name.innerText = product.prodpar;
                m_name.setAttribute("id","m_name")
                let m_price1 = document.createElement('p');
                m_price1.setAttribute("id","m_price1")
                m_price1.innerText = '₹ ' + product.prodprice;
                let m_quantity = document.createElement('div');
                m_quantity.style.display = 'flex'
                m_quantity.style.alignItems = 'center'
                let quan = document.createElement('p');
                let buttonMinus = document.createElement('button')
                let buttonPlus = document.createElement('button')
                buttonMinus.innerText = '-'
                buttonPlus.innerText = '+'
                buttonMinus.setAttribute('class','quantity_btn')
                buttonPlus.setAttribute('class','quantity_btn')
                quan.textContent =  product.quantity;
                total += product.prodprice*product.quantity;
                m_quantity.append(buttonMinus,quan,buttonPlus)
                buttonPlus.onclick = ()=>{
                    
                     product.quantity++;
                     quan.textContent = product.quantity;
                     localStorage.setItem('skin_cart',JSON.stringify(cart_data))
                     total += product.prodprice;
                     totalAmount.textContent= "TOTAL" +" "+" "+ "Rs."+total;;
                     proceedToPay.innerHTML = `Checkout`;
                }
                buttonMinus.onclick = ()=>{
                    
                    product.quantity--;
                     quan.textContent = product.quantity;
                     localStorage.setItem('skin_cart',JSON.stringify(cart_data))
                     total =  total -product.prodprice;
                     totalAmount.textContent= "TOTAL" +" "+" "+ "Rs."+total;;
                     refresh()
                } 
                div.style.textAlign = 'center'
                let imgProduct = document.createElement('img');
                imgProduct.src = product.prodimg;
                divtxt.append(m_name,m_quantity,m_price1)
                div.append(imgProduct, divtxt);
                datadiv.append(div);
        });
        proceedToPay.innerHTML = `Checkout `;
        proceedToPay.addEventListener('click', function(){
                location.href = "#";
        })
        localStorage.setItem('total_care',total)
        if(localStorage.getItem('skin_care') == "true")
                     {
                         total = Math.floor(total*0.7);
                         document.getElementById('app').textContent = 'Code Applied! Click Here to Remove'
                         proceedToPay.innerHTML ="Checkout";
                         
                         localStorage.setItem('skin_health',Math.floor(total*0.3))
                     }else{
                        localStorage.setItem('skin_health',false)
                     }
        totalAmount.textContent = "TOTAL" +" "+" "+ "Rs."+total;
        
        cartItem.innerHTML = `My Cart`
}
Cart_items()
document.getElementById('app').onclick =()=>{
                            localStorage.setItem('skin_care', 'false')
                            refresh()
                         }
// function increaseQuan(product){
    
    function filter(cart_data){

        let arr = [];
        cart_data.forEach(pro=>{

            if(pro.quantity>0)
            {
                arr.push(pro)
            }
        })
        localStorage.setItem('skin_cart',JSON.stringify(arr))
        return arr;
    }
// }
function decreaseQuan(product){
    product.quantity--;
}
function refresh(){
    window.location.href = 'cart.html'
}
let product=[{
    prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/IsclinicalPoly-vitaminSerum_300x.jpg?v=1613972422",
    prodpar:"IS CLINIC",
    prodh2:"IS CLINICAL Poly-Vitamin card Serum15ml,0.5fl. oz",
    prodprice:6000,
    },
    {
    prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/71OnYy30CCL._SL1500_300x.jpg?v=1637911412",
    prodpar:"IS CLINIC",
    prodh2:"IS CLINICAL C Eye Serum Advance+15ml,0.5fl. oz",
    prodprice:5450,
    },
    {
        prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/SuperSerumAdvance_300x.jpg?v=1607759469",
        prodpar:"IS CLINIC",
        prodh2:"IS CLINICAL  Super Serum Advance+15ml,0.5fl. oz",
        prodprice:8300,
        },
        {
            prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/71QSuB108IL._SL1500_300x.jpg?v=1607759837",
            prodpar:"IS CLINIC",
            prodh2:"IS CLINICAL  Active Serum Advance+15ml,0.5fl. oz",
            prodprice:7700,
            },
            {
                prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/isclinicalcleansingcomplex_300x.jpg?v=1607761941",
                prodpar:"IS CLINIC",
                prodh2:"IS CLINICAL  Cleansing Cpmlex X+180ml,6fl. oz",
                prodprice:3980,
                },
                {
                    prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/iS-Clinical-GeneXC-Serum-15ml_300x.jpg?v=1610090675",
                    prodpar:"IS CLINIC",
                    prodh2:"IS CLINICAL  GeneXc Serum 15ml e 0.5fl.oz",
                    prodprice:9500,
                    },
                    {
                        prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/ISC0069__72954.1604423643_300x.jpg?v=1610168239",
                        prodpar:"IS CLINIC",
                        prodh2:"IS CLINICAL cream Cleanser 120ml e 4fl.oz",
                        prodprice:4070,
                        },
                        {
                            prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/2031033_1_300x.jpg?v=1610168535",
                            prodpar:"IS CLINIC",
                            prodh2:"IS CLINICAL Pure Clarity Collection kit Box",
                            prodprice:14300,
                            },
                            {
                                prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/71peBxDTHiL._SL1500_300x.jpg?v=1610168801",
                                prodpar:"IS CLINIC",
                                prodh2:"IS CLINICAL Pure Clarity Collection kit Box",
                                prodprice:14300,
                                },
                                {
                                    prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/complex_300x.jpg?v=1629280775",
                                    prodpar:"IS CLINIC",
                                    prodh2:"IS CLINICAL Pure Clarity Collection kit Box",
                                    prodprice:14300,
                                    },
                                    {
                                        prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/iS-CLINICAL-Warming_Honey_120g_300x.jpg?v=1610169433",
                                        prodpar:"IS CLINIC",
                                        prodh2:"IS CLINICAL Pure Clarity Collection kit Box",
                                        prodprice:14300,
                                        },
                                        {
                                            prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/iS-Clinical-Sheald-Recovery-Balm_300x.jpg?v=1610169895",
                                            prodpar:"IS CLINIC",
                                            prodh2:"IS CLINICAL Pure Clarity Collection kit Box",
                                            prodprice: 14300
                                            },
                                            {
                                            prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/bright_300x.jpg?v=1629280349",
                                            prodpar:"IS CLINIC",
                                            prodh2:"IS CLINICAL Poly-Vitamin Serum15ml,0.5fl. oz",
                                            prodprice:6000
                                            },
                                            {
                                            prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/ISC0016_300x.jpg?v=1616157060",
                                            prodpar:"IS CLINIC",
                                            prodh2:"IS CLINICAL Poly-Vitamin Serum15ml,0.5fl. oz",
                                            prodprice:6000
                                            },
                                            {
                                                prodimg:"https://cdn.shopify.com/s/files/1/0415/0548/9058/products/11291497-1434444651070574_300x.jpg?v=1613556618",
                                                prodpar:"IS CLINIC",
                                                prodh2:"IS CLINICAL Poly-Vitamin Serum15ml,0.5fl. oz",
                                                prodprice:6000,
                                           },
    ];
    
    let thirddiv=document.getElementById("thirddiv");
    function products(items){
        items.forEach((item)=>{
            let div=document.createElement("div");
            let div1=document.createElement("div");
            let image=document.createElement("img");
            image.src=item.prodimg;
            div1.append(image);
            let para=document.createElement("p");
            para.innerText=item.prodpar;
            let prodh2=document.createElement("h5");
            prodh2.innerText=item.prodh2;
            let price=document.createElement("p");
            price.setAttribute("id","price");
            price.innerText="Rs"+" ."+item.prodprice;
            let addtocartbtn=document.createElement("button");
            addtocartbtn.setAttribute("id","addtocartbtn")
            addtocartbtn.innerText="Add to cart";
            let addtoquickbtn=document.createElement("button");
            addtocartbtn.onclick=()=>{
                addtoCart(item)

                addtocartbtn.onclick=()=>{
                    window.location.href="cart.html";
                }
                
            }
            addtoquickbtn.setAttribute("id","addtoquickbtn")
            addtoquickbtn.innerText="Quick view";
            div.append(div1,para,prodh2,price,addtocartbtn,addtoquickbtn)
            thirddiv.append(div);
        })
    }
    products(product);
    
    
    
    function addtoCart(item) {
          
    
    
        if (localStorage.getItem("skin_cart") === null) {
            localStorage.setItem("skin_cart", JSON.stringify([]));
        }
        let array = JSON.parse(localStorage.getItem("skin_cart"));
        let present  = false;
        
          array.forEach((pro)=>{
            if(pro.prodh2 == item.prodh2)
            {  
                pro["quantity"]++;
                present = true;
            }
         })
        if(present)
        {
        localStorage.setItem("skin_cart", JSON.stringify(array));
        }else{
          item["quantity"] = 1;
          array.push(item);
          localStorage.setItem("skin_cart", JSON.stringify(array));
        }
        }
       
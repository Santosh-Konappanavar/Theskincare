function nextPage(e){
    e.preventDefault()
   let form = document.getElementById("form_data")

   let user_address={
     Email:form.email.value ,
     country1:form.country.value,
     firstname:form.firstname.value ,
     lastname:form.lastname.value ,
     company1:form.company.value,
     Adress:form.adress.value ,
     Adress1:form.adress1.value ,
     City:form.city.value ,
     State:form.state.value ,
     Pincode:form.pin.value ,
     Mobile:form.number.value ,

   }
  console.log(user_address)

  let ARRAY = JSON.parse(localStorage.getItem('skin_address'))

ARRAY.push(user_address)

localStorage.setItem('skin_address',JSON.stringify(ARRAY))
window.location.href = 'payment.html'
}
function tolocalStorage(){
    if(localStorage.getItem('skin_address') === null){

    localStorage.setItem('skin_address', JSON.stringify([]));
}
}

tolocalStorage()
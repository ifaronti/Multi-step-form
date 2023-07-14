// ************** personal info variables *******

let nextBtn = document.querySelector(".next_btn")
let Name = document.querySelector(".info_name")
let phone = document.querySelector('.info_phone')
let email = document.querySelector(".info_email")
let tags = document.querySelector(".input_p")
let nameP = document.getElementById("name_p")
let emailP = document.getElementById("email_p")
let phoneP = document.getElementById("phone_p")
let infoNumber = document.getElementById("info_number")
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// ************************* plans variables  *****************************
let planBox = document.getElementById("plans_next")
let arcade = document.querySelector(".arcade")
let advance = document.querySelector(".advance")
let pro= document.querySelector(".pro")
let total = ""
let erot = document.querySelector(".plans_error")
let chek = document.querySelector("input[name=chek]")
let plansBack = document.getElementById("plans_back")
let plansNumber = document.getElementById("plans_number")
let freeMonths = document.querySelector(".free_months")
let freet = document.querySelector(".freet")
let freeby = document.querySelector(".freeby")
let switcher = localStorage.getItem('checked')
let cadePrice = document.querySelector('.arcade_yearly')
let vancePrice = document.querySelector('.advance_yearly')
let proPrice = document.querySelector('.pro_yearly')
let mql = window.matchMedia("(max-width: 960px)")
let trueQl = window.matchMedia("(min-width: 961px)")

// ************************* addons variables ******************************
let online = document.querySelector(".online_price")
let storagees = document.querySelector(".storage_price")
let profinojutsu = document.querySelector(".profile_price")
let nexto = document.querySelector(".addons_next")
let serviceCheck = document.querySelector("input[name=service_check]")
let storageCheck = document.querySelector("input[name=storage_check]")
let profileCheck = document.querySelector("input[name=profile_check]")
let newTotal = localStorage.getItem('total')
let profile = document.querySelector(".profile")
let service = document.querySelector(".service")
let storage = document.querySelector(".storage")
let addTotal = ''
let addonsBack = document.getElementById("addons_back")
let addonsNumber = document.getElementById("addons_number")

// *************************** summary variables ****************************

let chosenPlan = document.querySelector(".chosen_plan")
let chosenPrice = document.querySelector(".chosen_price")
let price = localStorage.getItem('total')
let potOne = document.querySelector(".pot1")
let costOne = document.querySelector(".cost1")
let potTwo = document.querySelector(".pot2")
let costTwo = document.querySelector(".cost2")
let potThree = document.querySelector(".pot3")
let costThree = document.querySelector(".cost3")
let tots = document.querySelector(".tots")
let finalAmount = document.querySelector(".total_amount")
let changeBtn = document.querySelector(".change_btn")
let summaryBack = document.getElementById("summary_back")
let summaryNumber = document.getElementById("summary_number")
let sumCont = document.querySelector(".summary_container")
let sumConfirm = document.getElementById("summary_confirm")
let addons_top = document.querySelector(".addons_top")
let thanks = document.querySelector(".thank_you")
let thanksbtn = document.getElementById("thank_yall")
// ****************** personal info function ********************************

nextBtn.addEventListener('click', function(){
    if(Name.value === ""){
        nameP.style.display = 'block'
    }else{
        nameP.style.display = 'none'
    }
    if(isFinite(phone.value) && phone.value !=""){
        phoneP.style.display = 'none'
    }else {
        phoneP.style.display ='block'
    }
    if(email.value.match(regex)){
        emailP.style.display = 'none'
    }
    else{
        emailP.style.display = 'block'
    }

    if(((nameP.style.display == 'none') && (phoneP.style.display == 'none')) && (emailP.style.display == 'none')){
        window.location = 'plans.html'
    }
})


// ************* plan functions ***********

 function selecto(e){
    e.classList.toggle('selected')
    if (e.classList.contains('selected')){
        e.style.borderColor = 'blue'
        e.style.background = 'rgb(232, 232, 242)'
    }else{
        e.style.borderColor = 'rgb(221, 221, 221)'
        e.style.background = 'white'
    }
} 

chek.addEventListener('change', function(){
    if(mql.matches && chek.checked == true){
        advance.style.height = '80px'
        pro.style.height = '80px'
        arcade.style.height = '80px'
        cadePrice.innerHTML =`$90/yr`
        vancePrice.innerHTML =`$120/yr`
        proPrice.innerHTML =`$150/yr`
        freeMonths.style.display = 'block'
        freet.style.display = 'block'
        freeby.style.display = 'block'
    }
    else{
        if(mql.matches && chek.checked == false){
            advance.style.height = '75px'
            pro.style.height = '75px'
            arcade.style.height = '75px'
            cadePrice.innerHTML = `$9/mo` 
            vancePrice.innerHTML =`$12/mo`
            proPrice.innerHTML =`$15/mo`
            freeMonths.style.display = 'none'
            freet.style.display = 'none'
            freeby.style.display = 'none'
        }
    }
    if(trueQl.matches && chek.checked == true){
        advance.style.height = '175px'
        pro.style.height = '175px'
        arcade.style.height = '175px'
        cadePrice.innerHTML =`$90/yr`
        vancePrice.innerHTML =`$120/yr`
        proPrice.innerHTML =`$150/yr`
        freeMonths.style.display = 'block'
        freet.style.display = 'block'
        freeby.style.display = 'block'
    }
    else{
        if(trueQl.matches && chek.checked == false){
            advance.style.height = '155px'
            pro.style.height = '155px'
            arcade.style.height = '155px'
            cadePrice.innerHTML =`$9/yr`
            vancePrice.innerHTML =`$12/yr`
            proPrice.innerHTML =`$15/yr`
            freeMonths.style.display = 'none'
            freet.style.display = 'none'
            freeby.style.display = 'none'
        }
    }
})

planBox.addEventListener('click', function(){
    if(advance.classList.contains('selected')){
        total = 12
        localStorage.setItem('plan', 'Advance (Monthly)')
    }
    else{
        total = 0
    }
    if((chek.checked == true) && (advance.classList.contains('selected'))){
        total = 120 
        localStorage.setItem('plan', 'Advance (Yearly)')
    }
    else{

    }
    if(arcade.classList.contains('selected')){
        total = 9
        localStorage.setItem('plan', 'Arcade (Monthly)')
    }
    else{
    
    }
    if((chek.checked == true) && (arcade.classList.contains('selected'))){
        total = 90 
        localStorage.setItem('plan', 'Arcade (Yearly)')
    }
    else{
    }
    if(pro.classList.contains('selected')){
        total = 15
        localStorage.setItem('plan', 'Pro (Monthly)')
    }
    else{

    }
    if ((chek.checked == true) && (pro.classList.contains('selected'))){
        total = 150
        localStorage.setItem('plan', 'Pro (Yearly)')
    }
    else{
    }
    if (arcade.classList.contains('selected') && advance.classList.contains('selected')){
        erot.style.display = 'block'
        arcade.classList.remove('selected')
        advance.classList.remove('selected')
        arcade.style.borderColor = 'rgb(221, 221, 221)'
        arcade.style.background = 'white'
        advance.style.borderColor = 'rgb(221, 221, 221)'
        advance.style.background = 'white'
        total = 0
    }
    else{
        erot.style.display = 'none'
    }
    if (arcade.classList.contains('selected') && pro.classList.contains('selected')){
        erot.style.display = 'block'
        arcade.classList.remove('selected')
        pro.classList.remove('selected')
        arcade.style.borderColor = 'rgb(221, 221, 221)'
        arcade.style.background = 'white'
        pro.style.borderColor = 'rgb(221, 221, 221)'
        pro.style.background = 'white'
        total = 0
    }
    else{
    }
    if (pro.classList.contains('selected') && advance.classList.contains('selected')){
        erot.style.display = 'block'
        pro.classList.remove('selected')
        advance.classList.remove('selected')
        pro.style.borderColor = 'rgb(221, 221, 221)'
        pro.style.background = 'white'
        advance.style.borderColor = 'rgb(221, 221, 221)'
        advance.style.background = 'white'
        total = 0
    }
    else{
    }
    if ((advance.classList.contains('selected')) && (pro.classList.contains('selected')) && (arcade.classList.contains('selected'))){
        erot.style.display = 'block'
        pro.classList.remove('selected')
        advance.classList.remove('selected')
        arcade.classList.remove('selected')
        pro.style.borderColor = 'rgb(221, 221, 221)'
        pro.style.background = 'white'
        advance.style.borderColor = 'rgb(221, 221, 221)'
        advance.style.background = 'white'
        arcade.style.borderColor = 'rgb(221, 221, 221)'
        arcade.style.background = 'white'
        total = 0
    }
    else{
    }
    if(total == 0){
        erot.style.display = 'block'
        erot.innerHTML = `Error: One plan only must be selected`
    }
    else{
        erot.style.display = 'none'
    }
    if((erot.style.display == 'none') && (total > 0)){
        localStorage.setItem('total', total)
        window.location = 'addons.html'
    }
})

// ******************************* addons functions **********************************

window.addEventListener("DOMContentLoaded", function(){
    if (newTotal > 15){
        online.innerText = "$10/yr"
        storagees.innerText = "$20/yr"
        profinojutsu.innerText = "$20/yr"
    }
    else{
        online.innerText = "$1/mo"
        storagees.innerText = "$2/mo"
        profinojutsu.innerText = "$2/mo"
    }

    if(mql.matches && chek.checked == true){
        advance.style.height = '80px'
        pro.style.height = '80px'
        arcade.style.height = '80px'
        cadePrice.innerHTML =`$90/yr`
        vancePrice.innerHTML =`$120/yr`
        proPrice.innerHTML =`$150/yr`
        freeMonths.style.display = 'block'
        freet.style.display = 'block'
        freeby.style.display = 'block'
    }
    else{
        if(mql.matches && chek.checked == false){
            advance.style.height = '75px'
            pro.style.height = '75px'
            arcade.style.height = '75px'
            cadePrice.innerHTML = `$9/mo` 
            vancePrice.innerHTML =`$12/mo`
            proPrice.innerHTML =`$15/mo`
            freeMonths.style.display = 'none'
            freet.style.display = 'none'
            freeby.style.display = 'none'
        }
    }
    if(trueQl.matches && chek.checked == true){
        advance.style.height = '175px'
        pro.style.height = '175px'
        arcade.style.height = '175px'
        cadePrice.innerHTML =`$90/yr`
        vancePrice.innerHTML =`$120/yr`
        proPrice.innerHTML =`$150/yr`
        freeMonths.style.display = 'block'
        freet.style.display = 'block'
        freeby.style.display = 'block'
    }
    else{
        if(trueQl.matches && chek.checked == false){
            advance.style.height = '155px'
            pro.style.height = '155px'
            arcade.style.height = '155px'
            cadePrice.innerHTML =`$9/yr`
            vancePrice.innerHTML =`$12/yr`
            proPrice.innerHTML =`$15/yr`
            freeMonths.style.display = 'none'
            freet.style.display = 'none'
            freeby.style.display = 'none'
        }
    }
})

nexto.addEventListener('click', function(){
    if(serviceCheck.checked == true ){
        localStorage.setItem('online', 'Online service')
        localStorage.setItem('service_price', `+${online.innerText}`)
        potOne.innerText = localStorage.getItem('online')
        costOne.innerText = localStorage.getItem('service_price')
    }
    else{

    }
    if (storageCheck.checked == true){
        localStorage.setItem('storage', 'Larger storage')
        localStorage.setItem('storage_price', `+${storagees.innerText}`)
        potTwo.innerText = localStorage.getItem('storage')
        costTwo.innerText = localStorage.getItem('storage_price')
    }
    else{

    }
    if (profileCheck.checked == true){
        localStorage.setItem("profile", 'Customizable profile')
        localStorage.setItem('profile_price', `+${profinojutsu.innerText}`)
        potThree.innerText = localStorage.getItem('profile')
        costOne.innerText = localStorage.getItem('profile_price')
    }
    else{

    }

    if (serviceCheck.checked == false){
        potOne.innerText = localStorage.getItem('storage')
        costOne.innerText = localStorage.getItem('storage_price')
        potTwo.innerText = localStorage.getItem('profile')
        costTwo.innerText = localStorage.getItem('profile_price')
        localStorage.removeItem("online")
        localStorage.removeItem('service_price')
    }
    else{

    }
    if (storageCheck.checked == false){
        potTwo.innerText = localStorage.getItem('profile')
        costTwo.innerText = localStorage.getItem('profile_price')
        localStorage.removeItem('storage')
        localStorage.removeItem('storage_price')
    }
    else{
    }
    if(profileCheck.checked == false){
        localStorage.removeItem('profile')
        localStorage.removeItem('profile_price')
    }
    if ((price > 15) && (serviceCheck.checked == true)){
        addTotal = Number(addTotal) + 10
    }
    else{
    }
    if((price <= 15 ) && (serviceCheck.checked == true)){
        addTotal =  Number(addTotal) + 1
    }
    else {
        
    }
    if((price <= 15 ) && (storageCheck.checked == true)){
        addTotal = Number(addTotal) + 2

    }
    else{
        if ((price > 15) && storageCheck.checked == true){
            addTotal = Number(addTotal)+ 20
        }
    }
    if((price <= 15 ) && (profileCheck.checked == true)){
        addTotal = Number(addTotal) + 2

    }
    else{
        if ((price > 15) && profileCheck.checked == true){
            addTotal = Number(addTotal) + 20
        }
    }
    localStorage.setItem('addTotal', addTotal)
    window.location = 'summary.html'
})

// ******************* summary functions *********************
window.addEventListener("DOMContentLoaded", function(){
    chosenPlan.innerText = localStorage.getItem('plan')
    finale = localStorage.getItem('addTotal')
    if (price > 15){
        chosenPrice.innerHTML = `$${price}/yr`
        tots.innerText = 'Total (per year)'
    }
    else{
        chosenPrice.innerHTML = `$${price}/mo`
        tots.innerText = 'Total (per month)'
    }
    if (localStorage.getItem('online') === null){
        potOne.innerText = localStorage.getItem('storage')
        costOne.innerText = localStorage.getItem('storage_price')
        potTwo.innerText = localStorage.getItem('profile')
        costTwo.innerText = localStorage.getItem('profile_price')
        costThree.innerHTML =``
        potThree.innerHTML =``
    }
    else{
        potOne.innerText = localStorage.getItem('online')
        costOne.innerText = localStorage.getItem('service_price')
        potTwo.innerText = localStorage.getItem('storage')
        costTwo.innerText = localStorage.getItem('storage_price')
        potThree.innerText = localStorage.getItem('profile')
        costThree.innerText = localStorage.getItem('profile_price')
    }
    if(localStorage.getItem('storage') == null){
        potOne.innerText = localStorage.getItem('online')
        costOne.innerText = localStorage.getItem('service_price')
        potTwo.innerText = localStorage.getItem('profile')
        costTwo.innerText = localStorage.getItem('profile_price')
        potThree.innerHTML =``
        costThree.innerHTML = ``
    }
    else{
    }
    if((localStorage.getItem('online') == null) && (localStorage.getItem('storage') == null)){
        potOne.innerText = localStorage.getItem('profile')
        costOne.innerText = localStorage.getItem('profile_price')
        potTwo.innerHTML = ``
        costTwo.innerHTML = ``
        potThree.innerHTML = ``
        costThree.innerHTML = ``
    }
    if (price > 15){
        finalAmount.innerHTML = `$${Number(finale) + Number(price)}/yr`
    }
    else{
        finalAmount.innerHTML = `$${Number(finale) + Number(price)}/mo`
    }
})

sumConfirm.addEventListener('click', function(){
    summaryBack.style.display = 'none'
    sumConfirm.style.display = 'none'
    sumCont.style.display = 'none'
    addons_top.style.display = 'none'
    thanks.style.display = 'block'

})

thanksbtn.addEventListener('click', function(){
    window.location = 'index.html'
})

changeBtn.addEventListener('click', function(){
    window.location = 'plans.html'
    localStorage.clear()
})

plansBack.addEventListener('click', function(){
    window.location = 'index.html'
})

addonsBack.addEventListener('click', function(){
    window.location = 'plans.html'
})

summaryBack.addEventListener('click', function(){
    window.location = 'addons.html'
})
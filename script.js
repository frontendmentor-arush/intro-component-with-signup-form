const form = document.getElementById("form")
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')



form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e);
    var firstName = fname.value.trim()
    var lastName = lname.value.trim()
    var emailVal = email.value.trim()
    var passVal = password.value.trim()
    
    if(firstName === ""){
        errorFunc(fname, "First Name cannot be empty")
    }else{
        successFunc(fname, 'Valid first name')
    }
    if(lastName === ""){
        errorFunc(lname, "Last Name cannot be empty")
    }else{
        successFunc(lname, "Valid last name")
    }

    if(emailVal === ""){
        errorFunc(email, "Email Address cannot be empty")
    }else{
        successFunc(email, "Valid email")
    }

    if(passVal === ""){
        errorFunc(password, "Password cannot be empty")
    }else {
        successFunc(password ,"Valid password")
    }

})

function errorFunc(req, message){
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    req.className = "error"
    span.className = 'error-text'
    const expand= document.getElementById("formcard")
    expand.className="expandformerror"
}

function successFunc(req, message) {
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    span.className = "success-text"
    req.className ='success'
    const expand= document.getElementById("formcard")
    expand.className="expandformsuccess"
}
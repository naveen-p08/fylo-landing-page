const email1 = document.querySelector('.form1input')
const email2 = document.querySelector('.form2input')
const submitb1 = document.querySelector('.submit1')
const submitb2 = document.querySelector('.submit2')

let emailTemplate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

submitb1.addEventListener('click', () => {
    validate(email1)
})
submitb2.addEventListener('click', () => {
    validate(email2)
})

function validate(element) {
    // checks if input is empty
    if (!element.value) {  
        element.nextElementSibling.classList.remove('hidden')
        element.classList.add('error')
    }
    // checks if entered input is in email format

    // if input in email format removes the error
    if (emailValue(element)) {
        element.nextElementSibling.classList.add('hidden')
        element.classList.remove('error')
    }
    else { // if input is not in email format adds error classes
        element.nextElementSibling.classList.remove('hidden')
        element.classList.add('error')
    }
}


// checks entered string is in email format
function emailValue(element) {
    return element.value.match(emailTemplate) ? true : false
}
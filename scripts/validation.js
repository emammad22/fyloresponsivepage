var email = document.getElementById('mail');
var submit = document.getElementById('submit');
var label = document.getElementById('validate');

var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener('click', (e) => {
    if (email.value.match(mailFormat)) {
        if (email.classList.contains('error') && label.classList.contains('validation-error')) {
            email.classList.remove('error');
            label.classList.remove('validation-error');
        }
    } else {
        email.classList.add('error');
        label.classList.add('validation-error');
    }
    e.preventDefault();
})

// access section validation

var accessMail = document.getElementById('email');
var text = document.getElementById('text');

accessMail.addEventListener('input', (e) => {
    if (accessMail.value.match(mailFormat)) {
        if(text.classList.contains('invalid')){
            text.classList.remove('invalid');
        }
        text.innerHTML= 'Your email addres is valid';
        text.classList.add('valid')
    } else {
        text.innerHTML="Invalid email address";
        text.classList.add('invalid');
    }
})
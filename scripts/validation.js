var email = document.getElementById('mail');
var submit = document.getElementById('submit');
var label = document.getElementById('validate');

var mailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener('click',(e)=>{
    if(email.value.match(mailFormat)){
        if(email.classList.contains('error') && label.classList.contains('validation-error')){
        email.classList.remove('error');
        label.classList.remove('validation-error');
    }
    }else{
        email.classList.add('error');
        label.classList.add('validation-error');
    }
    e.preventDefault();
})
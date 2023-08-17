// event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // get the mail address
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // get the password
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // verify email and password
    if(email === 'sakib@hotmail.com' && password==='secret420'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }

});
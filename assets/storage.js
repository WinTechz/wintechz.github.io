function Register() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let bday = document.getElementById('bday').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phnum = document.getElementById('phnum').value;
    let password = document.getElementById('password').value;
    localStorage.setItem('fullname',fname)
    localStorage.setItem('lastname',lname)
    localStorage.setItem('username',username)
    localStorage.setItem('birthday',bday)
    localStorage.setItem('email',email)
    localStorage.setItem('phone number',phnum)
    localStorage.setItem('pword',password)
    document.getElementById('alert').style.display = 'inline';
    document.getElementById('alert').innerText = 'Registration complete!!!'
    
}


function Auth() {
    let username;
    let password;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value
    if (localStorage.getItem('username')==username) {
        if (localStorage.getItem('pword')==password){
            alert('welcome  '+localStorage.getItem('fullname'))
        }
        else{
            alert('invalid password')
        }
    
    }else{
        alert('invalid username')
    }
    
}


console.log(localStorage.getItem('fullname'))
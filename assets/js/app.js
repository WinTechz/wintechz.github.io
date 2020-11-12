let database = {'username':'ironside','password':'1234'}


function Submit(){
    let uname = document.getElementById('username').value
    let pword = document.getElementById('password').value
    // console.log(uname)
    // console.log(pword)

    if (uname == database.username) {

        if (pword == database.password) {
            document.getElementById('alert').style.display = 'block'
            document.getElementById('alert').innerText = "Welcome "+database.username
        }
        else{
            console.log('invalid password')
        }
        
    }else{
        console.log('invalid username')
    }

}






// bucketlist = ['xbox','ps5','Lambo','luxury']
// console.log(bucketlist.sort())

// console.log(bucketlist)
// let x = 10
// let K = 50
// let total = K+x/6


// document.write("<h1>"+total+"</h1>")

// alert(name)
// console.log(total)






let i = 0
for (i; i<11; i++){
    if (i == 10) {
        document.write("<h1 class='alert alert-info'>"+i*5+"</h1>")
    }
    // document.write("The number is "+ i + "<br>")
}
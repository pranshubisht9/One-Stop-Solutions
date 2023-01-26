document.querySelector("form").addEventListener("submit", async (ev)=> {
    ev.preventDefault();
     let loginData = {
         username : document.getElementById("username").value,
         password : document.getElementById("password").value
     }
 
     console.log(loginData)
 
         let res = await fetch("http://localhost:8880/customer/login", {
             method: 'POST',
             body: JSON.stringify(loginData),
             headers: {
                 'Content-Type': 'application/json',
             },
         })
     
         let data = await res.json();  
         console.log('data:', data)
         fetchData(data);
     })
 
     let fetchData = (data) => {
         if(data.customerId == undefined){
             // alert("wrong credential...")
             visiblePOP();
             popText.innerHTML=`<br>
             <img id="wrong_psd_gif" src="https://media4.giphy.com/media/uVFGDyOshK7I6geXyg/giphy.gif?cid=790b7611fd6fb1eeba3f3e60cc9a6794c636693dc8e6be3c&rid=giphy.gif&ct=g" alt="">
             <p style="display: block;">Wrong Password</p>
             <br>`
         }
         else{
             window.location.href="../subpages/admin.html";
             
         }
        //  let customerId = data.adminId;
        //  let firstName = data.firstName;
        //  let lastName = data.lastName;
        //  let username = data.login.username;
        //  let email = data.email;
        //  let city = data.login.type;
 
        //  let adminObj = {customerId,firstName,lastName,username,email,type}
 
        //  console.log("adfasdf");
        //  console.log(adminObj);
 
        //  localStorage.setItem("admin",JSON.stringify(adminObj));
     }
 
 
 
 
     // visiblePOP();
     // popText.innerHTML=`<br>
     // <p style="display: block;">Register Successfully</p>
     // <br>
     // <button onclick="goToLogin()" id="goToLogin">Go to Login</button>`
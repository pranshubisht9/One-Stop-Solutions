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
             <img id="wrong_psd_gif" src="https://media.tenor.com/B1ySTFIj8fcAAAAi/error.gif" alt="">
             <p style="display: block;">Wrong Password</p>
             <br>`
         }
         else{
             window.location.href="../subpages/customer.html";
             
         }
         let customerId = data.customerId;
         let firstName = data.firstName;
         let lastName = data.lastName;
         let username = data.login.username;
         let email = data.email;
         let city = data.city;
         let mobile = data.mobile;
 
         let customerObj = {customerId,firstName,lastName,username,email,city,mobile}
 
         console.log(customerObj);
 
         localStorage.setItem("customer",JSON.stringify(customerObj));
     }
 
 
 
 
     // visiblePOP();
     // popText.innerHTML=`<br>
     // <p style="display: block;">Register Successfully</p>
     // <br>
     // <button onclick="goToLogin()" id="goToLogin">Go to Login</button>`
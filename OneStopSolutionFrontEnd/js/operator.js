

// Logout admin
function logOutOper(){
    let sure = confirm("Are You Sure Want To Log Out?");

    if(sure){
        alert("Loging You Out");
        localStorage.removeItem("operator")

        window.location.href="index.html";
    }
}





// fetch

/////////////////////////////////////////////


let operatorObj = JSON.parse(localStorage.getItem("operator"));

console.log(operatorObj);


let tr1 = document.createElement("tr");
let fName = document.createElement("td");
fName.innerText="First Name:";
let firstName = document.createElement("td");
firstName.innerText = operatorObj.firstName;
tr1.append(fName,firstName);

let tr2 = document.createElement("tr");
let lName = document.createElement("td");
lName.innerText = "Last Name:"
let lastName = document.createElement("td");
lastName.innerText = operatorObj.lastName;
tr2.append(lName,lastName);


let tr3 = document.createElement("tr");
let uname = document.createElement("td");
uname.innerText="Username:"
let username = document.createElement("td");
username.innerText = operatorObj.username;
tr3.append(uname,username);

let tr4 = document.createElement("tr");
let e = document.createElement("td");
e.innerText="Email:"
let email = document.createElement("td");
email.innerText = operatorObj.email;

tr4.append(e,email);


let tr5 = document.createElement("tr");
let aId = document.createElement("td");
aId.innerText="Admin Id:"
let adminId = document.createElement("td");
adminId.innerText = operatorObj.operatorId;
tr5.append(aId,adminId);

let tr6 = document.createElement("tr");
let t = document.createElement("td");
t.innerText="Type:"
let type = document.createElement("td");
type.innerText = "Operator";
tr6.append(t,type);

document.getElementById("profile").append(tr1,tr2,tr3,tr4,tr5,tr6);
document.getElementById("profile").style.color="white";



////////////////////////////////// get issue by Cx id

document.querySelector("#issueByCustId").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let cxId = document.getElementById("cxId").value;



    let res = await fetch(`http://localhost:8880/operator/issues/id/${cxId}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

   visibleOut(data);
})

    let visibleOut = (data) => {
        visiblePOP();
        popText.innerHTML=`<br>
        <h2 style="display: block;"><u> All Issues By Type: </u></h2>
        <br>`
    
        
        let cont = document.getElementById("popAlert");
    
        data.forEach(({issueId,issueType,issueDescription}, i) => {
    
    
    let p = document.createElement("p");
    p.innerText = ` No: ${i},  IssueId: ${issueId},  Issue Type: ${issueType},  Description: ${issueDescription}`;
    let br = document.createElement("br");
   
    cont.append(p,br);

    });
    }






// //////////////////////////////////////Get Issues By Type

document.querySelector("#issueByType").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let type = document.getElementById("type").value;

        console.log(type);

    let res = await fetch(`http://localhost:8880/operator/issues/${type}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

   visibleOutput(data);
})

    let visibleOutput = (data) => {
        visiblePOP();
        popText.innerHTML=`<br>
        <h2 style="display: block;"><u> All Issues By Type: </u></h2>
        <br>`
    
        
        let cont = document.getElementById("popAlert");
    
        data.forEach(({issueId,issueType,issueDescription}, i) => {
    
    
    let p = document.createElement("p");
    p.innerText = ` No: ${i},  IssueId: ${issueId},  Issue Type: ${issueType},  Description: ${issueDescription}`;
    let br = document.createElement("br");
   
    cont.append(p,br);

    });
    }



// //////////////////////////////////////Close Issue by cx id

document.querySelector("#closeIssueById").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let closeId = document.getElementById("cId").value;

    let res = await fetch(`http://localhost:8880/operator/issues/${closeId}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

    console.log(data);

    if(data.customerId == undefined){
        // alert("wrong credential...")
        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://media4.giphy.com/media/uVFGDyOshK7I6geXyg/giphy.gif?cid=790b7611fd6fb1eeba3f3e60cc9a6794c636693dc8e6be3c&rid=giphy.gif&ct=g" alt="">
        <p style="display: block;">${data.message}</p>
        <br>`
    }
    else{

        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://i.gifer.com/7efs.gif" alt="">
        <p style="display: block;"><h3> ${data.message} </h3></p>


        <br>`
        
    }
})


// document.querySelector("#deleteDepart").addEventListener("submit",async(e)=>{

//     e.preventDefault();
    
//         let id = document.getElementById('dId').value;
    
//         // console.log(id);
    
//         let res = await fetch(`http://localhost:8880/operator/departments/${id}`, {
    
//             method: 'DELETE',
    
//             headers: {
//                 'Content-Type': "application/json",
//             }
//         })
    
//         let data = await res.json();
//         //  console.log('data:', data)
    
//          visiblePOP();
//          popText.innerHTML=`<br>
//          <img id="wrong_psd_gif" src="https://i.gifer.com/7efs.gif" alt="">
//          <p style="display: block;">${data.message}</p>
         
//          <br>`
    
//     })



// //////////////////////////////////////Get cx by id

document.querySelector("#getCustomerById").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let customerId = document.getElementById("cId").value;

    let res = await fetch(`http://localhost:8880/operator/customer/id/${customerId}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

    console.log(data);

    if(data.customerId == undefined){
        // alert("wrong credential...")
        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://media4.giphy.com/media/uVFGDyOshK7I6geXyg/giphy.gif?cid=790b7611fd6fb1eeba3f3e60cc9a6794c636693dc8e6be3c&rid=giphy.gif&ct=g" alt="">
        <p style="display: block;">Wrong Password</p>
        <br>`
    }
    else{

        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://i.gifer.com/7efs.gif" alt="">
        <p style="display: block;"><h3> ${data.login.type} </h3></p>
        <p style="display: block;">${data.firstName} ${data.lastName}</p>
        <p style="display: block;">Email: ${data.email}</p>
        <p style="display: block;">Customer Id: ${data.customerId}</p>
        <p style="display: block;">Mobile Number: ${data.mobile}</p>
        <p style="display: block;">Username:  ${data.login.username}</p>
        <p style="display: block;">City:  ${data.city}</p>
        <p style="display: block;">No of issues:  ${data.issues.length}</p>

        <br>`
        
    }
})

// ////////////////////////Get Customer By Firstname


document.querySelector("#getCustomerByFirstname").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let fName = document.getElementById("fname").value;

    let res = await fetch(`http://localhost:8880/operator/customer/${fName}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

    console.log(data);
        fres(data)

    })

function fres(arrRes){
    if(arrRes.length == 0){
        // alert("wrong credential...")
        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://media4.giphy.com/media/uVFGDyOshK7I6geXyg/giphy.gif?cid=790b7611fd6fb1eeba3f3e60cc9a6794c636693dc8e6be3c&rid=giphy.gif&ct=g" alt="">
        <p style="display: block;">Wrong Password</p>
        <br>`
    }
    else{

    visiblePOP();
    popText.innerHTML=`<br>
    <h2 style="display: block;">${arrRes[0].login.type}</u></h2>
    <br>`
    
    
    let cont = document.getElementById("popAlert");
    
    arrRes.forEach(data => {
    
    
        let p = document.createElement("p");
        p.innerText = ` Name: ${data.firstName} ${data.lastName},  Email: ${data.email},  CustomerId: ${data.customerId},  Mobile No: ${data.mobile},  Username:${data.login.username},  City: ${data.city},  No of issues:  ${data.issues.length}`;
        let br = document.createElement("br");

        
        
        cont.append(p,br);
            
            
        })
}
}



// ////////////////////////Get Customer By Email

document.querySelector("#getCustomerByEmail").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let email = document.getElementById("em").value;

    let res = await fetch(`http://localhost:8880/operator/customers/${email}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

    console.log(data);

    if(data.customerId == undefined){
        // alert("wrong credential...")
        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://media4.giphy.com/media/uVFGDyOshK7I6geXyg/giphy.gif?cid=790b7611fd6fb1eeba3f3e60cc9a6794c636693dc8e6be3c&rid=giphy.gif&ct=g" alt="">
        <p style="display: block;">Wrong Password</p>
        <br>`
    }
    else{

        visiblePOP();
        popText.innerHTML=`<br>
        <img id="wrong_psd_gif" src="https://i.gifer.com/7efs.gif" alt="">
        <p style="display: block;"><h3> ${data.login.type} </h3></p>
        <p style="display: block;">${data.firstName} ${data.lastName}</p>
        <p style="display: block;">Email: ${data.email}</p>
        <p style="display: block;">Customer Id: ${data.customerId}</p>
        <p style="display: block;">Mobile Number: ${data.mobile}</p>
        <p style="display: block;">Username:  ${data.login.username}</p>
        <p style="display: block;">City:  ${data.city}</p>
        <p style="display: block;">No of issues:  ${data.issues.length}</p>

        <br>`
        
    }
})


// //////////////////////lock Customer

// /////////////////////////Create Solution   Issue Id , Solution Description

document.querySelector("#createSolution").addEventListener("submit",async(e)=>{
    e.preventDefault();


    let operatorId = operatorObj.operatorId;
    console.log(operatorId);

    let issueId = document.getElementById("issueId").value;


   let issueObj = {
    solutionDescription: document.getElementById("desc").value,
    solutionDate: new Date().toJSON().slice(0, 10)
}
console.log(issueObj);

   let res = await fetch(`http://localhost:8880/operator/solution/${issueId}/${operatorId}`, {
    method: 'POST',
    body: JSON.stringify(issueObj),
    headers: {
        'Content-Type': 'application/json',
    },
})

let data = await res.json();  
visiblePOP();
popText.innerHTML=`<br>
<img id="wrong_psd_gif" src="https://i.gifer.com/7efs.gif" alt="">
<p style="display: block;">${data.message}</p>

<br>`
})


// 




// /////////////////Get Solutions Of IssueId

document.querySelector("#getSolutionByIssueId").addEventListener("submit",async(e)=>{

    e.preventDefault();

    let issueId = document.getElementById("getIssueId").value;

    let res = await fetch(`http://localhost:8880/operator/solutions/${issueId}`, {
        method: 'Get',
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();

    console.log(data);
    freSol(data)

    })

    function freSol(arrRes){
        if(arrRes.length == 0){
            // alert("wrong credential...")
            visiblePOP();
            popText.innerHTML=`<br>
            <img id="wrong_psd_gif" src="https://media4.giphy.com/media/uVFGDyOshK7I6geXyg/giphy.gif?cid=790b7611fd6fb1eeba3f3e60cc9a6794c636693dc8e6be3c&rid=giphy.gif&ct=g" alt="">
            <p style="display: block;">Wrong Password</p>
            <br>`
        }
        else{
    
        visiblePOP();
        popText.innerHTML=`<br>
        <h2 style="display: block;">All Solutions</u></h2>
        <br>`
        
        
        let cont = document.getElementById("popAlert");
        
        arrRes.forEach(data => {
        
        
            let p = document.createElement("p");
            p.innerText = ` Solution Id: ${data.solutionId},  Solution Date: ${new Date(parseInt(data.solutionDate))}, Solution Desc: ${data.solutionDescription}`;
            let br = document.createElement("br");
    
            
            
            cont.append(p,br);
                
                
            })
    }
    }


// ////////////////////////////Delete Solution By Id

document.querySelector("#deleteSolnById").addEventListener("submit",async(e)=>{

    e.preventDefault();
    
        let solutionId = document.getElementById('solnId').value;
    
        // console.log(id);
    
        let res = await fetch(`http://localhost:8880/operator/solution/${solutionId}`, {
    
            method: 'DELETE',
    
            headers: {
                'Content-Type': "application/json",
            }
        })
    
        let data = await res.json();
        //  console.log('data:', data)
    
         visiblePOP();
         popText.innerHTML=`<br>
         <img id="wrong_psd_gif" src="https://i.gifer.com/7efs.gif" alt="">
         <p style="display: block;">${data.message}</p>
         
         <br>`
    
    })




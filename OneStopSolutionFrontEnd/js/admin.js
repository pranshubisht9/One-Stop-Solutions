// opening tables
function openTable(id){
    document.querySelector("#"+id+">table").classList.remove("hide");
    window.location.href="#"+id;
}



// Logout Admin
function logOutAdmin(){
    let sure = confirm("Are You Sure Want To Log Out?");

    if(sure){
        alert("Loging You Out");
        window.location.href="index.html";
    }
}

let adminObj = JSON.parse(localStorage.getItem("admin"));

console.log(adminObj);


let tr1 = document.createElement("tr");
let fName = document.createElement("td");
fName.innerText="First Name:";
let firstName = document.createElement("td");
firstName.innerText = adminObj.firstName;
tr1.append(fName,firstName);

let tr2 = document.createElement("tr");
let lName = document.createElement("td");
lName.innerText = "Last Name:"
let lastName = document.createElement("td");
lastName.innerText = adminObj.lastName;
tr2.append(lName,lastName);


let tr3 = document.createElement("tr");
let uname = document.createElement("td");
uname.innerText="Username:"
let username = document.createElement("td");
username.innerText = adminObj.username;
tr3.append(uname,username);

let tr4 = document.createElement("tr");
let e = document.createElement("td");
e.innerText="Email:"
let email = document.createElement("td");
email.innerText = adminObj.email;

tr4.append(e,email);


let tr5 = document.createElement("tr");
let aId = document.createElement("td");
aId.innerText="Admin Id:"
let adminId = document.createElement("td");
adminId.innerText = adminObj.adminId;
tr5.append(aId.adminId);

let tr6 = document.createElement("tr");
let t = document.createElement("td");
t.innerText="Type:"
let type = document.createElement("td");
type.innerText = adminObj.type;
tr6.append(t,type);

document.getElementById("profile").append(tr1,tr2,tr3,tr3,tr4,tr5,tr6);
document.getElementById("profile").style.color="white";



document.querySelector("#deptForm").addEventListener("submit",async(e)=>{
    e.preventDefault();

   let res = await fetch("http://localhost:8880/admin/department", {
    method: 'POST',
    body: document.getElementById("deptName").value,
    headers: {
        'Content-Type': 'application/json',
    },
})

let data = await res.json();  
console.log('data:', data)
})


// get all department

let getAllDept = () => {
let url = "http://localhost:8880/admin/departments";
fetch(url).then((res)=>{
    return (res.json());
}).then((data)=>{
    console.log(data);
    response(data)
}).catch(function(err){
    console.log(err)
})
}

let response = (data) => {
    visiblePOP();
    popText.innerHTML=`<br>
    <h2 style="display: block;"><u> All Departments </u></h2>
    <br>`

    
    let container = document.getElementById("popAlert");
    
    let table = document.createElement('table');
    
    let tr1 = document.createElement("tr");
    
    let th1 = document.createElement('th')
    th1.innerText = "Department Id ";
    
    let th2 = document.createElement('th')
    th2.innerText = "Department Name";
    
    tr1.append(th1,th2);
    
    data.forEach(({departmentId,departmentName}, i) => {

let tr2 = document.createElement("tr");
let td1 = document.createElement("td");
td1.innerText = departmentId;
let td2 = document.createElement("td");
td2.innerText=departmentName;

tr2.append(td1,td2);

table.append(tr1,tr2)
});
container.append(table);
}



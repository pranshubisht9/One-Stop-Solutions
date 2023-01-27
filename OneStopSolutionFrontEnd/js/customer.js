// fetch data  from local storage
let customerObj = JSON.parse(localStorage.getItem("customer"));


let tr1 = document.createElement("tr");
let fName = document.createElement("td");
fName.innerText="First Name:";
let firstName = document.createElement("td");
firstName.innerText = customerObj.firstName;
tr1.append(fName,firstName);

let tr2 = document.createElement("tr");
let lName = document.createElement("td");
lName.innerText = "Last Name:"
let lastName = document.createElement("td");
lastName.innerText = customerObj.lastName;
tr2.append(lName,lastName);


let tr3 = document.createElement("tr");
let uname = document.createElement("td");
uname.innerText="Username:"
let username = document.createElement("td");
username.innerText = customerObj.username;
tr3.append(uname,username);

let tr4 = document.createElement("tr");
let e = document.createElement("td");
e.innerText="Email:"
let email = document.createElement("td");
email.innerText = customerObj.email;

tr4.append(e,email);


let tr5 = document.createElement("tr");
let aId = document.createElement("td");
aId.innerText="Customer Id:"
let cId = document.createElement("td");
cId.innerText = customerObj.customerId;
tr5.append(aId,cId);


let tr6 = document.createElement("tr");
let t = document.createElement("td");
t.innerText="City:"
let city = document.createElement("td");
city.innerText = customerObj.city;
tr6.append(t,city);

let tr7 = document.createElement("tr");
let c = document.createElement("td");
c.innerText="Mobile No:"
let mob = document.createElement("td");
mob.innerText = customerObj.mobile;
tr7.append(c,mob);

document.getElementById("profile").append(tr1,tr2,tr3,tr4,tr5,tr6,tr7);
document.getElementById("profile").style.color="white";



//////////////////////////////////////////////////////////
//   view customer issues 
////////////////////////////////////////////////////////////

let viewCustomerIssue = () => {


    let url = "http://localhost:8880/admin/departments";
    fetch(url).then((res)=>{
        return (res.json());
    }).then((data)=>{
        // console.log(data);
        getAllDeptResponse(data)
    }).catch(function(err){
        console.log(err)
    })
    
    let getAllDeptResponse = (data) => {
        visiblePOP();
        popText.innerHTML=`<br>
        <h2 style="display: block;"><u> All Departments </u></h2>
        <br>`
    
        
        let cont = document.getElementById("popAlert");
    
    
        let table = document.createElement("table");
    
    
        let thead = document.createElement("thead");
    
        
        let tr1 = document.createElement("tr");
        tr1.setAttribute("class","col")
        tr1.setAttribute("id", "thead-d")
        
        let th1 = document.createElement('th')
        th1.innerText = "Department Id ";
        
        let th2 = document.createElement('th')
        th2.innerText = "Department Name";
        
        tr1.append(th1,th2);
    
    
        thead.append(tr1);
    
        table.append(thead);
        
        let tbody = document.createElement("tbody");
    
        tbody.innerHTML="";
    
        data.forEach(({departmentId,departmentName}, i) => {
    
    
    let row = document.createElement("tr");
    row.setAttribute("class","col")
    
    let col1 = document.createElement("td");
    col1.innerText = departmentId;
    let col2 = document.createElement("td");
    col2.innerText=departmentName;
    
    row.append(col1,col2);
    
    tbody.append(row);
    table.append(tbody);
    cont.append(table)
    });
    }
}
    
    
    










//////////////////////////////////////////////////////////
function openTable(id){
    document.querySelector("#"+id+">table").classList.remove("hide");
    window.location.href="#"+id;
}

// opeanig form
function openCustForm(id){
    document.querySelector("#"+id+">form").classList.remove("hide");
    window.location.href="#"+id;
}


// Logout customer 
function logOutCustomer(){
    let sure = confirm("Are You Sure Want To Log Out?");

    if(sure){
        alert("Loging You Out");
        window.location.href="index.html";
    }
}

// Delete customer Account
function deleteCustomer(){
    let sure = confirm("Are You Sure Want To Delete Account?");

    if(sure){
        alert("Deleting Your Account!");
        window.location.href="index.html"
    }
}




// fetching customer profile
function getCustomerProfile(){



}

// View Customer Issue
function viewCustomerIssue(){

}

// Cerate Customer Issue
function createCustomerIssue(){

}

// Update Customer Password
function updateCustomerIssue(){

}
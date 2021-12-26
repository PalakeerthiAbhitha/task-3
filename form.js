
let con=document.createElement('form')
con.setAttribute('id','form')

document.body.appendChild(con);

var br=document.createElement('br')

let h2=document.createElement('h2')
h2.setAttribute('id','title')
h2.innerText="Sample Forms"
document.body.appendChild(con).appendChild(h2)




// name1
let ftitle=document.createElement("label")
ftitle.innerText="First Name"
ftitle.classList.add('form-label')
let name1=document.createElement("input")
name1.classList.add('form-control')
name1.setAttribute('id','first-name')
name1.setAttribute('type','text')
name1.setAttribute('required','')
document.body.appendChild(con).appendChild(ftitle)
document.body.appendChild(con).appendChild(name1)

// name2
let ltitle=document.createElement("label") 
ltitle.innerText="Last Name"
ltitle.classList.add('form-label')
let name2=document.createElement("input")
name2.setAttribute("required",'')
name2.setAttribute('id','last-name')
name2.classList.add('form-control')
document.body.appendChild(con).appendChild(ltitle)
document.body.appendChild(con).appendChild(name2)

//addrs
let add_title=document.createElement("label") 
add_title.innerText="Address"
add_title.classList.add('form-label')
let addrs=document.createElement("textarea")
addrs.setAttribute('id',"address")
addrs.setAttribute('required','')
addrs.classList.add('form-control')
document.body.appendChild(con).appendChild(add_title)
document.body.appendChild(con).appendChild(addrs)

//pincode
let pin_title=document.createElement("label") ; 
pin_title.innerText="Pincode"
pin_title.classList.add('form-label')
let pin=document.createElement("input")
pin.setAttribute('id','pincode')
pin.setAttribute('required','')
pin.classList.add('form-control')
document.body.appendChild(con).appendChild(pin_title)
document.body.appendChild(con).appendChild(pin)

 //gender
let gen_title=document.createElement("label") 
gen_title.innerText="Gender"
gen_title.classList.add('form-label')    
let gen=document.createElement('input')
gen.setAttribute('id',"gender")
gen.setAttribute('required','')
gen.classList.add('form-control')
document.body.appendChild(con).appendChild(gen_title)
document.body.appendChild(con).appendChild(gen)

//state
let state_title=document.createElement("label")
state_title.innerText="State"
state_title.classList.add('form-label')
let state=document.createElement('input')
state.setAttribute('id',"state")
state.setAttribute('required','')
state.classList.add('form-control')
document.body.appendChild(con).appendChild(state_title)
document.body.appendChild(con).appendChild(state)


// subimt
// let btn=document.createElement('input');
// btn.innerHTML="Submit";
// btn.classList.add("btn","btn-success","my-4")
// btn.setAttribute('type','submit')
// btn.setAttribute('id','submit')
// btn.setAttribute('onclick','addRow()')
// document.body.appendChild(con).appendChild(btn) 


// //buttn
// let r_btn=document.createElement('input');
// r_btn.innerHTML="Reset";
// r_btn.classList.add("btn","btn-warning","my-4","mx-4")
// r_btn.setAttribute9('type','reset')
// r_btn.setAttribute('id','reset')
// r_btn.setAttribute("onclick","deleteRow(this)")
// document.body.appendChild(con).appendChild(r_btn)

function fun(){  
document.getElementById("myForm").reset();  
}

  
function addRow() {
          
  var fname = document.getElementById("first-name");
  var lname = document.getElementById("last-name");
  var addres = document.getElementById("address");
  var gender1 = document.getElementById("gender");
  var pincod1 = document.getElementById("pincode");
  var state1= document.getElementById("state");
  var submit1=document.getElementById("submit");
  var reset1=document.getElementById("reset");
  var table = document.getElementById("myTableData");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
  row.insertCell(1).innerHTML= fname.value;
  row.insertCell(2).innerHTML= lname.value;
  row.insertCell(3).innerHTML= addres.value;
  row.insertCell(4).innerHTML= gender1.value;
  row.insertCell(5).innerHTML= pincod1.value;
  row.insertCell(6).innerHTML= state1.value;
  

}

function deleteRow(obj) {
    
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
  
}

function addTable() {
    
  var myTableDiv = document.getElementById("myDynamicTable");
    
  var table = document.createElement('TABLE');
  table.border='1';
  
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
    
  for (var i=0; i<3; i++){
     var tr = document.createElement('TR');
     tableBody.appendChild(tr);
     
     for (var j=0; j<4; j++){
         var td = document.createElement('TD');
         td.width='75';
         td.appendChild(document.createTextNode("Cell " + i + "," + j));
         tr.appendChild(td);
     }
  }
  myTableDiv.appendChild(table);
  
}

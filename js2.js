<<<<<<< HEAD
//stayle for Documnet
function style() {
  var mystyle = document.createElement("style");
  document.head.appendChild(mystyle);
  mystyle.sheet.insertRule("#main{display:flex;justify-content:space-around");
  mystyle.sheet.insertRule(
    ".input-container{border:2px solid ;display:inline-block;padding:20px}"
  );
  mystyle.sheet.insertRule(".element{padding:3px}");
  mystyle.sheet.insertRule("#canbtn{margin-left:20px;background-color:yellow}");
  mystyle.sheet.insertRule("#subbtn{margin-right:20px;background-color:green}");
  mystyle.sheet.insertRule(
    ".output-container{border:2px solid;display:inline-block;}"
  );
  mystyle.sheet.insertRule("th{border:1px solid;padding:0px 20px}");
  mystyle.sheet.insertRule("td{border:1px solid;padding:0px 20px}");
  mystyle.sheet.insertRule(".btn1{background-color:red;}");
  mystyle.sheet.insertRule(".btn2{background-color:yellow}");
}
style();


var div0 = document.createElement("div");
document.body.appendChild(div0);
div0.id = "main";

var div1 = document.createElement("div");
div1.className = "input-container";

//creating input box for Name
var div2 = document.createElement("div");
div2.className = "element";
let label1 = document.createElement("label");
label1.setAttribute("for", "inputname");
label1.textContent = "Name:";
let inputname = document.createElement("input");
inputname.id = "inputname";
div2.appendChild(label1);
div2.appendChild(inputname);
div1.appendChild(div2);

//Creating input box for class
var div3 = document.createElement("div");
div3.className = "element";
let label2 = document.createElement("label");
label2.setAttribute("for", "inputclass");
label2.textContent = "Class:";
let inputclass = document.createElement("input");
inputclass.id = "inputclass";
div3.appendChild(label2);
div3.appendChild(inputclass);
div1.appendChild(div3);

//create submit button
var div4 = document.createElement("div");
div4.className = "element";
let submitbtn = document.createElement("input");
submitbtn.type = "submit";
submitbtn.id = "subbtn";
div4.appendChild(submitbtn);

//create cancle button
let canclebtn = document.createElement("input");
canclebtn.id = "canbtn";
canclebtn.type = "reset";
canclebtn.value = "Cancle";
div4.appendChild(canclebtn);
div1.appendChild(div4);
var div5 = document.createElement("div");
div5.className = "output-container";

var div6 = document.createElement("div");
div5.appendChild(div6);

var mytable = document.createElement("table");
div6.appendChild(mytable);
mytable.id = "record";
tbhead = document.createElement("thead");
mytable.appendChild(tbhead);

th1 = document.createElement("th");
th1.textContent = "Student Name";
th2 = document.createElement("th");
th2.textContent = "Class";
th3 = document.createElement("th");
th3.textContent = "Edit";
th4 = document.createElement("th");
th4.textContent = "Delete";

tbhead.appendChild(th1);
tbhead.appendChild(th2);
tbhead.appendChild(th3);
tbhead.appendChild(th4);

var tablebody = document.createElement("tbody");
mytable.appendChild(tablebody);

div0.appendChild(div1);
div0.appendChild(div5);



canclebtn.addEventListener("click", clear);

function clear() {}

submitbtn.addEventListener("click", addrecord);
get();
//function for add record in local storage
function addrecord() {
  stdname = document.getElementById("inputname").value;
  stdclass = document.getElementById("inputclass").value;
  if (stdname == "" || stdclass == "") {
    alert("Please enter name and class");
  } else if (localStorage.getItem("record") == null) {
    myrecord = [];
    myrecord.push([stdname, stdclass]);
    localStorage.setItem("record", JSON.stringify(myrecord));
    get();
  } else {
    myrecord = JSON.parse(localStorage.getItem("record"));
    myrecord.push([stdname, stdclass]);
    localStorage.setItem("record", JSON.stringify(myrecord));
    get();
  }
  location.reload();
}
//function for display Data in to the screen
function get() {
  var tr = [];
  myrecord = JSON.parse(localStorage.getItem("record"));
  myrecord.forEach((element, index) => {
    tr[index] = document.createElement("tr");
    tr[index].className = "mytable";
    tablebody.appendChild(tr[index]);
    td1 = document.createElement("td");
    td1.textContent = element[0];
    td2 = document.createElement("td");
    td2.textContent = element[1];
    tr[index].appendChild(td1);
    tr[index].appendChild(td2);

    td3 = document.createElement("td");
    tr[index].appendChild(td3);
    edit = document.createElement("button");
    edit.id = `editbtn${index}`;
    edit.setAttribute("onclick", `javascript:editit(${index});`);
    editit = function (index) {
      inputname.value = myrecord[index][0];
      inputclass.value = myrecord[index][1];
      myrecord.splice(index, 1);
      localStorage.setItem("record", JSON.stringify(myrecord));
    };
    edit.className = "btn2";
    edit.textContent = "Edit";
    td3.appendChild(edit);

    td4 = document.createElement("td");
    tr[index].appendChild(td4);
    del = document.createElement("button");
    del.className = "btn1";
    del.id = `delbtn${index}`;
    del.setAttribute("onclick", `javascript:deleteit(${index});`);
    del.textContent = "Delete";
    td4.appendChild(del);
    deleteit = function (index) {
      myrecord = JSON.parse(localStorage.getItem("record"));
      tablebody.removeChild(tr[index]);
      // myrecordstr=localStorage.getItem('record')
      myrecord.splice(index, 1);
      localStorage.setItem("record", JSON.stringify(myrecord));
    };
  });
}
=======
var header=document.createElement('header')
h1=document.createElement('h1')
h1.textContent="Student Deatils"
header.appendChild(h1)
document.body.appendChild(header)

let label1=document.createElement('label')
label1.setAttribute('for','inputname')
label1.textContent="Name:"
document.body.appendChild(label1)

let inputname=document.createElement('input')
inputname.id="inputname"
document.body.appendChild(inputname)
document.write('<br><br>')


let label2=document.createElement('label')
label2.setAttribute('for','inputclass')
label2.textContent='Class:'
document.body.appendChild(label2)

let inputclass=document.createElement('input')
inputclass.id="inputclass"
document.body.appendChild(inputclass)
document.write('<br><br>')


let submitbtn=document.createElement('input')
submitbtn.type='submit'
submitbtn.id="subbtn"
document.body.appendChild(submitbtn)

submitbtn.addEventListener('click',myFunction);

function myFunction(){

    let stdname=inputname.value;
    let stdclass=inputclass.value;

    if(stdname=='' || stdclass==''){
        alert("Please enter Name and Class")
    }
    else{
        var retrivename =localStorage.getItem('Name');
        retrivename = retrivename?retrivename.split(','):[];
        retrivename.push(stdname);
        localStorage.setItem('Name',retrivename.toString());

        var retriveclass =localStorage.getItem('Class');
        retriveclass = retriveclass?retriveclass.split(','):[];
        retriveclass.push(stdclass);
        localStorage.setItem('Class',retriveclass.toString());

    }
}




>>>>>>> 1721b5f3d71cb1d8be4c66fbc9c14dcebaf34eb9

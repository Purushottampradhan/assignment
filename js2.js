//style for Document
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

var main_div = document.createElement("div");
document.body.appendChild(main_div);
main_div.id = "main";
var input_div = document.createElement("div");
input_div.className = "input-container";
var submitCanclebtn_div = document.createElement("div");
submitCanclebtn_div.className = "element";

//creating input name element
var input_name_div = document.createElement("div");
input_name_div.className = "element";
let input_name_label = document.createElement("label");
input_name_label.setAttribute("for", "inputname");
input_name_label.textContent = "Name:";
let inputname = document.createElement("input");
inputname.id = "inputname";
input_name_div.appendChild(input_name_label);
input_name_div.appendChild(inputname);
input_div.appendChild(input_name_div);

//creating input class element
var input_class_div = document.createElement("div");
input_class_div.className = "element";
let input_class_label = document.createElement("label");
input_class_label.setAttribute("for", "inputclass");
input_class_label.textContent = "Class:";
let inputclass = document.createElement("input");
inputclass.id = "inputclass";
input_class_div.appendChild(input_class_label);
input_class_div.appendChild(inputclass);
input_div.appendChild(input_class_div);

//creating submit button
var submitbtn = document.createElement("input");
submitbtn.type = "submit";
submitbtn.id = "subbtn";
submitCanclebtn_div.appendChild(submitbtn);

//creating cancle button
let canclebtn = document.createElement("input");
canclebtn.id = "canbtn";
canclebtn.type = "reset";
canclebtn.value = "Cancle";
submitCanclebtn_div.appendChild(canclebtn);
input_div.appendChild(submitCanclebtn_div);

//creating output table
var output_div = document.createElement("div");
output_div.className = "output-container";
var table_div = document.createElement("div");
output_div.appendChild(table_div);
var mytable = document.createElement("table");
table_div.appendChild(mytable);
mytable.id = "record";

tbhead = document.createElement("thead");
mytable.appendChild(tbhead);

student_name = document.createElement("th");
student_name.textContent = "Student Name";
student_class = document.createElement("th");
student_class.textContent = "Class";
edit_btn = document.createElement("th");
edit_btn.textContent = "Edit";
delete_btn = document.createElement("th");
delete_btn.textContent = "Delete";

tbhead.appendChild(student_name);
tbhead.appendChild(student_class);
tbhead.appendChild(edit_btn);
tbhead.appendChild(delete_btn);

var tablebody = document.createElement("tbody");
mytable.appendChild(tablebody);
main_div.appendChild(input_div);
main_div.appendChild(output_div);

tr = [];
submitbtn.addEventListener("click", addrecord);
get();

//function for add record
function addrecord() {
  stdname = document.getElementById("inputname").value;
  stdclass = document.getElementById("inputclass").value;
  obj = {
    name: stdname,
    class: stdclass,
  };
  if (stdname == "" || stdclass == "") {
    alert("Please enter name and class");
  } else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        get();
        location.reload();
      }
    };
    xhttp.open(
      "POST",
      "https://us-central1-services-example-39773.cloudfunctions.net/app/api/students",
      true
    );
    // xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhttp.send("name=" + stdname + "&" + "class=" + stdclass);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(obj));
  }
}

//function for display record
function showData(index, obj) {
  tr[index] = document.createElement("tr");
  tr[index].className = "mytable";
  tablebody.appendChild(tr[index]);
  td1 = document.createElement("td");
  td1.textContent = obj[index].name;
  td2 = document.createElement("td");
  td2.textContent = obj[index].class;
  tr[index].appendChild(td1);
  tr[index].appendChild(td2);
  td3 = document.createElement("td");
  tr[index].appendChild(td3);
  edit = document.createElement("button");
  edit.id = `editbtn${index}`;
  edit.setAttribute("onclick", `javascript:editit(${index});`); //call edit function
  edit.className = "btn2";
  edit.textContent = "Edit";
  td3.appendChild(edit);
  td4 = document.createElement("td");
  tr[index].appendChild(td4);
  del = document.createElement("button");
  del.className = "btn1";
  del.id = `delbtn${index}`;
  del.setAttribute("onclick", `javascript:deleteit(${obj[index].id});`); //call delete function
  del.textContent = "Delete";
  td4.appendChild(del);
}

//function for GET API method 
function get() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      obj = JSON.parse(this.responseText);
      obj.forEach((element, index) => {
        showData(index, obj);
      });
    }
  };
  xmlhttp.open(
    "GET",
    "https://us-central1-services-example-39773.cloudfunctions.net/app/api/students",
    true
  );
  xmlhttp.send();
}

//function for edit option
editit = function (index) {
  this.index = index;
  inputname.value = obj[index].name;
  inputclass.value = obj[index].class;
};

//function for cancle button
canclebtn.addEventListener("click", refreshit);
function refreshit() {
  document.getElementById("inputname").value = " ";
  document.getElementById("inputclass").value = " ";
}
//function for DELETE API method
deleteit = function (index) {
  console.log(index)
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload()
    }
  };
  xmlhttp.open(
    "DELETE",
    "https://us-central1-services-example-39773.cloudfunctions.net/app/api/students/"+index,
    true
  );
  xmlhttp.send();
};

let label1=document.createElement('label')
label1.setAttribute('for','inputname')
label1.innerText="Name:"

let label2=document.createElement('label')
label2.setAttribute('for','inputclass')
label2.innerHTML="<br><br>Class:"

let inputname=document.createElement('input')
inputname.id="inputname"

let inputclass=document.createElement('input')
inputclass.id="inputclass"

let label3=document.createElement('label')
label3.innerHTML="</br></br>"

let submitbtn=document.createElement('input')
submitbtn.type='submit'
submitbtn.id="subbtn"

document.body.appendChild(label1)
document.body.appendChild(inputname)
document.body.appendChild(label2)
document.body.appendChild(inputclass)
document.body.appendChild(label3)
document.body.appendChild(submitbtn)

submitbtn.addEventListener('click',myFunction);

function myFunction(){
    let stdname=inputname.value;
    let stdclass=inputclass.value;

    console.log(stdclass);
    console.log();
    if(stdname=='' || stdclass==''){
        alert("Please enter Name and Class")
    }
    else{
        
        let arr=[stdname,stdclass];
        localStorage.setItem("studentdetails",arr);
        // alert("Submited");
        
    }
}





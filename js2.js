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
        retriveclass.push(stdname);
        localStorage.setItem('Class',retriveclass.toString());

    }
}





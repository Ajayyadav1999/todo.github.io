function getAndupdate(){

    console.log("updating")
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray = [];
        itemJsonArray.push([tit , desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)) 
    }
    
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)) 

    }
    update();

}


function update(){
    
    // populate the table

    if (localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)) 
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }
    
   
        let tablebody = document.getElementById('tablebody')
        let str = "";
        itemJsonArray.forEach((element , index) =>{
           
            str +=` <tr><th scope="row">${index+1}</th> <td>${element[0]}</td><td>${element[1]}</td> <td><button class="btn btn-sm btn-danger"onclick="del(${index})">Delete</button></td>  </tr>`;
       });

       tablebody.innerHTML =str;
}

add = document.getElementById("add")
add.addEventListener("click",getAndupdate)
update();


function del(itemindex){
console.log("deleted")
itemJsonArrayStr = localStorage.getItem('itemsJson')
itemJsonArray = JSON.parse(itemJsonArrayStr)
// delete item index array from array
itemJsonArray.splice(itemindex,1)
localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)) 
update();

}

function clearstorage(){
   if (confirm("do you really want to clear list")){
   localStorage.clear();
   console.log("cleared records")
   update();
}
}
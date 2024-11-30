
 var book;
 var addbtn= document.getElementById("addbtn").value
 
 var removebtn =  document.getElementById("removebtn").value
 var cartona;
 var globalindex;
 if(localStorage.getItem("cartona")) {
cartona=JSON.parse(localStorage.getItem("cartona"))
display(cartona)
 }
else{
  cartona=[]

}

  function site(){
    book={
      index:document.getElementsByClassName("rownmr").value,
      bookmark: document.getElementById("bookmark").value,
      url: document.getElementById("bookmarkurl").value
 
}
cartona.push(book)
console.log(cartona)

display(cartona)
savetolocalstorage()

empty()

  //clear//
  
   }
  

function empty(){
  document.getElementById("bookmark").value=null;
  document.getElementById("bookmarkurl").value=null;
}

    function visit(event){
    //   visit={
      //  window.open("https://www.google.com");
      //  window.open(cartona[4].url);
      // console.log(document.getElementById("visit"));


      
      document.getElementById('tablecontent').addEventListener('click', function(event) {
        if (event.target.id === 'visit') {
            // Get the closest 'tr' element (the parent row)
            const row = event.target.closest('tr');
    
            // Get the 'rownmr' element within the row
            const rowNmrElement = row.querySelector('.rownmr');
    
            // Get the text content of the 'rownmr' element
            const rowNmrValue = rowNmrElement.textContent.trim();
    
            // Now you have the 'rownmr' value for the clicked row
            console.log('Row number:', rowNmrValue);
            console.log(cartona[rowNmrValue-1].url);
            window.open(cartona[rowNmrValue-1].url)
            
    
            // You can use this value to perform further actions, such as making an AJAX request or updating other elements on the page.
        }
    });

     
   
  }
  // console.log(document.getElementById("bookmarkurl").)
  function display(pist) {
    console.log(pist)
// display(cartona)


var content="";

for(var i = 0 ;i<cartona.length ;i++){
  content+=` <tr>
        <td class="rownmr">${[i+(1)]}</td>
        <td >${cartona[i].bookmark}</td>
        <td><button onclick="visit()" id="visit" type="button" class="btn btn-success  text-center">visit</button></td>
         <td><button onclick="dele(${i})" id="dele" type="button" class="btn btn-danger  text-center">Delete</button></td>
         <td><button onclick="setformupdate(${i})" id="update" type="button" class="btn btn-warning  text-center">update</button></td>
        
       </tr>`
  


}

document.getElementById("tablecontent").innerHTML=content


  }

  function dele(indexx){
    cartona.splice(indexx,1);
    localStorage.setItem("cartona",JSON.stringify(cartona))
    display(indexx);
  }
  
  function searc(userword){
    var sear="";
    for(var i=0; i<cartona.length;i++){
      if(cartona[i].bookmark.toLowerCase().includes(userword.toLowerCase())){
        sear+=` <tr>
        <td class="rownmr">${[i+(1)]}</td>
        <td >${cartona[i].bookmark}</td>
        <td><button onclick="visit()" id="visit" type="button" class="btn btn-success  text-center">visit</button></td>
         <td><button onclick="dele(${i})" id="dele" type="button" class="btn btn-danger  text-center">Delete</button></td>
         <td><button onclick="setformupdate(${i})" id="update" type="button" class="btn btn-warning  text-center">update</button></td>
       
       </tr>`
  
      }
      document.getElementById("tablecontent").innerHTML=sear
      
    }
    
  }
  function savetolocalstorage(){
    localStorage.setItem("cartona",JSON.stringify(cartona))
  }
  var pnameregex=/^[A-Z a-z]+$/
  function demo(pvalue){
   if(pnameregex.test(pvalue)){
    document.getElementById("bookmark").classList.add("is-valid")
    document.getElementById("bookmark").classList.remove("is-invalid")
    
   }
  else { 
    document.getElementById("bookmark").classList.add("is-invalid")
    document.getElementById("bookmark").classList.remove("is-valid")

    Swal.fire("please enter correct site name ");
   }
   
  }

  var pnameregexx =/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=])*/
  function demoo(pvalue){
   
   if(pnameregexx.test(pvalue)){
    document.getElementById("bookmarkurl").classList.add("is-valid")
  
    document.getElementById("bookmarkurl").classList.remove("is-invalid")
    console.log("f")
   }
   else{
    document.getElementById("bookmarkurl").classList.add("is-invalid")
    document.getElementById("bookmarkurl").classList.remove("is-valid")
  Swal.fire("please enter correct url by starting http:/");
   }
  }
  function setformupdate(indexx){
    console.log(indexx)
    globalindex=indexx;
    bookmark.value =cartona[indexx].bookmark;
    bookmarkurl.value =cartona[indexx].url;
    
    document.getElementById("addbtn").classList.add("d-none");
    document.getElementById("removebtn").classList.remove("d-none");
  
  }
  function updatebtn(){
    // console.log("hi",globalindex);
    cartona[globalindex].bookmark= bookmark.value;
    cartona[globalindex].url= bookmarkurl.value;
    console.log(cartona);
    display(cartona);
    savetolocalstorage();
    document.getElementById("addbtn").classList.remove("d-none");
    document.getElementById("removebtn").classList.add("d-none");
    // removebtn.innerHTML="d-none"
  }
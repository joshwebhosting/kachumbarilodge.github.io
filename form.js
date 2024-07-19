function validateform(){
    var name= document.myform.name.value;
    if (fullname=="")
        alert("please enter your name")
    return false;
      
    if(email=="")
        alert("please provide your email")
    return false;
    
}
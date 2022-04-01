function isFieldEmpty(){
    const field = document.querySelector("#username_input")
    if(field.value === ''){
        return true;
    } else {
        return false;
    }
}

var fieldTest = isFieldEmpty();
if(fieldTest){
    alert("Please insert your username.");
    
}

const input = () => {
    const input = document.querySelector("username_input");
    if(input == "username"){
        return false;
    } else {
        return true
    }
}    
    var inputCorrect = input();
    if(inputCorrect){
        alert("Your username is wrong.")
    }
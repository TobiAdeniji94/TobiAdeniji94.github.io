function validation (){
    var title = document.getElementById("title").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (name.length < 4) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 4) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length < 20) {
        text = "Please Enter More than 20 Characters";
        error_message.innerHTML = text;
        return false; 
    }
    alert("Message Submitted!")
    return true;
    
}


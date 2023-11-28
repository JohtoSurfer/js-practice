function valid() {
    let email = document.getElementById("text").value;
    let regex = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if(regex.text(email)) {
        alert("Valid Access")
        return true
    } else {
        alert("Access Denied")
    }
}

addEventListener(valid);
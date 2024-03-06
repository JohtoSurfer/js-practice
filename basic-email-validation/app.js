function valid() {
    let email = document.getElementById("text").value;
    let regex = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)?$/;

    if(regex.test(email)) {
        alert("Valid Access");
        return true;
    } else {
        alert("Access Denied");
    }
}

document.getElementById("btn").addEventListener("click", valid);

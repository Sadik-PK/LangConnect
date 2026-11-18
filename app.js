
function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let nativeLanguage = document.getElementById("native").value;
    let learningLanguage = document.getElementById("learning").value;
    let level = document.getElementById("level").value;

    if (name == "" || email == "" || password == "" || nativeLanguage == "" || learningLanguage == "" || level == "") {
        alert("Please fill in all details.");
    } 
    else {
        let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

        let user = {
            name: name,
            email: email,
            password: password,
            native: nativeLanguage,
            learning: learningLanguage,
            level: level
        };

        profiles.push(user);

        localStorage.setItem("profiles", JSON.stringify(profiles));

        alert("Registration successful!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("native").value = "";
        document.getElementById("learning").value = "";
        document.getElementById("level").value = "";
    }
}


function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

    let found = false;

    for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].email == email && profiles[i].password == password) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("Login successful! Welcome to LangConnect.");
        window.location.href = "partners.html";
    } 
    else {
        alert("Invalid email or password. Please register first.");
    }
}

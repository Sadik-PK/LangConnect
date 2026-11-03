function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let nativeLanguage = document.getElementById("native").value;
    let learningLanguage = document.getElementById("learning").value;
    let level = document.getElementById("level").value;

    if (name == "" || email == "" || password == "" || nativeLanguage == "" || learningLanguage == "" || level == "") {
        alert("Please fill in all details.");
    } else {
        let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

        profiles.push({
            name: name,
            email: email,
            password: password,
            native: nativeLanguage,
            learning: learningLanguage,
            level: level
        });

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
        }
    }

    if (found == true) {
        alert("Login successful!");
        window.location.href = "partners.html";
    } else {
        alert("Invalid email or password.");
    }
}

function findPartner() {
    let language = document.getElementById("searchLanguage").value;
    let level = document.getElementById("searchLevel").value;
    let profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    let found = false;

    document.getElementById("partnerTable").innerHTML = "";

    if (language == "") {
        alert("Please select a language.");
    } else {
        for (let i = 0; i < profiles.length; i++) {
            if (profiles[i].native.toLowerCase() == language.toLowerCase() &&
                (level == "" || profiles[i].level == level)) {

                document.getElementById("partnerTable").innerHTML +=
                    "<tr><td>" + profiles[i].name +
                    "</td><td>" + profiles[i].native +
                    "</td><td>" + profiles[i].learning +
                    "</td><td>" + profiles[i].level + "</td></tr>";

                found = true;
            }
        }

        if (found == false) {
            alert("No matching partners found.");
        }
    }
}

function sendRequest() {
    let name = document.getElementById("requestName").value;

    if (name == "") {
        alert("Please enter a partner name.");
    } else {
        let requests = JSON.parse(localStorage.getItem("requests")) || [];

        requests.push({
            name: name,
            status: "Pending"
        });

        localStorage.setItem("requests", JSON.stringify(requests));

        displayRequests();

        document.getElementById("requestName").value = "";
        alert("Conversation request sent.");
    }
}

function displayRequests() {
    let requests = JSON.parse(localStorage.getItem("requests")) || [];
    document.getElementById("requestTable").innerHTML = "";

    for (let i = 0; i < requests.length; i++) {
        document.getElementById("requestTable").innerHTML +=
            "<tr><td>" + requests[i].name +
            "</td><td>" + requests[i].status + "</td></tr>";
    }
}

function sendMessage() {
    let recipient = document.getElementById("recipient").value;
    let message = document.getElementById("message").value;

    if (recipient == "" || message == "") {
        alert("Please enter the recipient and message.");
    } else {
        let messages = JSON.parse(localStorage.getItem("messages")) || [];

        messages.push({
            recipient: recipient,
            message: message,
            status: "Sent"
        });

        localStorage.setItem("messages", JSON.stringify(messages));

        displayMessages();

        document.getElementById("recipient").value = "";
        document.getElementById("message").value = "";

        alert("Message sent successfully.");
    }
}

function displayMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    document.getElementById("messageTable").innerHTML = "";

    for (let i = 0; i < messages.length; i++) {
        document.getElementById("messageTable").innerHTML +=
            "<tr><td>" + messages[i].recipient +
            "</td><td>" + messages[i].message +
            "</td><td>" + messages[i].status + "</td></tr>";
    }
}

function reportUser() {
    let name = document.getElementById("reportName").value;
    let reason = document.getElementById("reportReason").value;

    if (name == "" || reason == "") {
        alert("Please enter the user's name and report reason.");
    } else {
        let reports = JSON.parse(localStorage.getItem("reports")) || [];

        reports.push({
            name: name,
            reason: reason,
            status: "Pending"
        });

        localStorage.setItem("reports", JSON.stringify(reports));

        displayReports();

        document.getElementById("reportName").value = "";
        document.getElementById("reportReason").value = "";

        alert("Report submitted successfully.");
    }
}

function displayReports() {
    let reports = JSON.parse(localStorage.getItem("reports")) || [];
    document.getElementById("reportTable").innerHTML = "";

    for (let i = 0; i < reports.length; i++) {
        document.getElementById("reportTable").innerHTML +=
            "<tr><td>" + reports[i].name +
            "</td><td>" + reports[i].reason +
            "</td><td>" + reports[i].status + "</td></tr>";
    }
}

if (document.getElementById("requestTable")) {
    displayRequests();
}

if (document.getElementById("messageTable")) {
    displayMessages();
}

if (document.getElementById("reportTable")) {
    displayReports();
}
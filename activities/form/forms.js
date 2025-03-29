document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const Age = document.getElementById('age').value;

    // Check if the fullname field is empty
    if (!fullname) {
        alert("You need to enter your name.");
        return;
    }

    // Check if Age is entered and greater than or equal to 18
    if (!Age || Age < 18) {
        alert("You need to be 18 or older.");
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        password: pass,
        age: Age
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myform").innerHTML = "";
        } else if (xhr.readyState === 4){
            alert('Error submitted form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(formData)
});
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("genderError").textContent = "";

    if (!name) {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
    }

    if (age < 18 || age > 99) {
        document.getElementById("ageError").textContent = "Age must be between 18 and 99.";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Please select a gender.";
        valid = false;
    }

   
    if (valid) {
     
        let storedData = localStorage.getItem("formData");

        let formDataArray = storedData ? JSON.parse(storedData) : [];

        
        formDataArray.push({ name, email, age, gender });

        localStorage.setItem("formData", JSON.stringify(formDataArray));

        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset(); 
    }

});

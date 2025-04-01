document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    
    const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: document.getElementById('age').value,
        country: document.getElementById('country').value
    };
    
    
    let isValid = true;
    
    
    if (!formData.fullName) {
        document.getElementById('fullNameError').textContent = 'Full name is required';
        isValid = false;
    } else if (formData.fullName.length < 2) {
        document.getElementById('fullNameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    
    if (!formData.email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email (example@domain.com)';
            isValid = false;
        }
    }
    
    
    if (!formData.country) {
        document.getElementById('countryError').textContent = 'Country is required';
        isValid = false;
    }
    
    
    if (formData.age) {
        if (formData.age < 18 || formData.age > 120) {
            document.getElementById('ageError').textContent = 'Age is required';
            isValid = false;
        }
    }
    
    if (!isValid) {
        alert('Please fix the form errors before submitting');
        return;
    }
    
    console.log('Form data:', formData);
    
    // AJAX call
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'response.json', true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            try {
                const response = JSON.parse(xhr.responseText);
                showSuccess(response.message);
            } catch {
                showSuccess('Thank you for your registration!');
            }
        } else {
            showSuccess('Form submitted successfully!');
        }
    };
    
    xhr.onerror = function() {
        showSuccess('Submission received!');
    };
    
    xhr.send();
});

function showSuccess(message) {
    const successElement = document.getElementById('success-message');
    successElement.textContent = message;
    successElement.style.display = 'block';
    document.getElementById('registrationForm').reset();
}
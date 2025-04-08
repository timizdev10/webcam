     // Ensure default state on load
    
     window.onload = function () {
    
        document.getElementById('loginContainer').classList.add('hidden');

        document.getElementById('signupContainer').classList.remove('hidden');

    };



    // Show Login form

    function showLogin() {

        document.getElementById('signupContainer').classList.add('hidden');

        document.getElementById('loginContainer').classList.remove('hidden');

    }



    // Show Signup form

    function showSignup() {

        document.getElementById('loginContainer').classList.add('hidden');

        document.getElementById('signupContainer').classList.remove('hidden');

    }



    // Handle Sign Up

    document.getElementById('signupForm').addEventListener('submit', function (event) {

        event.preventDefault();



        const firstname = document.getElementById('firstInp').value;

        const lastname = document.getElementById('lastInp').value;

        const email = document.getElementById('emailInp').value;

        const password = document.getElementById('passwordInp').value;

        const confirmPassword = document.getElementById('confirmPasswordInp').value;



        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }



        const userData = { firstname, lastname, email, password };

        localStorage.setItem('userData', JSON.stringify(userData));



        showLogin();

        alert("Signup successful! Please log in.");

    });



    // Handle Log In

    document.getElementById('loginForm').addEventListener('submit', function (event) {

        event.preventDefault();



        const email = document.getElementById('loginEmail').value;

        const password = document.getElementById('loginPassword').value;



        const userData = JSON.parse(localStorage.getItem('userData'));



        if (userData && userData.email === email && userData.password === password) {

            alert("Login successful!");

            window.location.href ='../alreadysignedup.html';

        } else {

            alert("Invalid email or password.");

        }

    });

document.addEventListener('DOMContentLoaded', function() {
    const showSignUp = document.getElementById('showSignUp');
    const showSignIn = document.getElementById('showSignIn');
    const formContainer = document.getElementById('formContainer');
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');

    showSignUp.addEventListener('click', function(e) {
        e.preventDefault();
        signInForm.classList.remove('active');
        signUpForm.classList.add('active');
    });

    showSignIn.addEventListener('click', function(e) {
        e.preventDefault();
        signUpForm.classList.remove('active');
        signInForm.classList.add('active');
    });

    // Form validation would go here in a real implementation
});
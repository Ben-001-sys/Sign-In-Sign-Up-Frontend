document.addEventListener('DOMContentLoaded', function() {
    const showSignUp = document.getElementById('showSignUp');
    const showSignIn = document.getElementById('showSignIn');
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');

    showSignUp.addEventListener('click', function(e) {
        e.preventDefault();
        signInForm.classList.add('slide-out-left');
        signUpForm.classList.add('slide-in-right');
        setTimeout(() => {
            signInForm.classList.remove('active', 'slide-out-left');
            signUpForm.classList.add('active');
            signUpForm.classList.remove('slide-in-right');
        }, 500);
    });

    showSignIn.addEventListener('click', function(e) {
        e.preventDefault();
        signUpForm.classList.add('slide-out-right');
        signInForm.classList.add('slide-in-left');
        setTimeout(() => {
            signUpForm.classList.remove('active', 'slide-out-right');
            signInForm.classList.add('active');
            signInForm.classList.remove('slide-in-left');
        }, 500);
    });
});

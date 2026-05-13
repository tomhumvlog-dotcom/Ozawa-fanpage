let count = 0;

const signupButton = document.getElementById('signup');

signupButton.onclick = function() {
    count++;
    if (count == 1) {
        alert('Hahah, you are a troll!');
    }
    else if (count == 2) {
        alert('You are still a troll, try again!');
    }
        else
        {
            alert('You are not a troll anymore, you can sign up now!');
            signupButton.disabled = true; // Disable the button after 3 clicks
            window.location.href = '//www.youtube.com/watch?v=pRpeEdMmmQ0&list=RDpRpeEdMmmQ0&start_radio=1';
        }
    }
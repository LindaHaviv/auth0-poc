

// Initiating our Auth0Lock
var lock = new Auth0Lock(
  'XUUHpy2jo4CdPX2AUevDkuPcezjp3n1g',
  'lindahaviv.auth0.com'
);

// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});

document.getElementById('btn-login').addEventListener('click', function() {
  lock.show();
});


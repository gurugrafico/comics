(function() {


  const btnLogout = document.getElementById('btnLogout');


    btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });



 firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
     // btnLogout.classList.remove('hide');
      //location.href='dash.html';
    } else {
    	//location.href='dash.html';
      console.log('no logueado');
     // btnLogout.classList.add('hide');
     location.href='init.html';
    }    
  });

	} ());
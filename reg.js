(function() {


  const btnLogout = document.getElementById('btnLogout');
    const btnBack = document.getElementById('btnBack');

 const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  
  
  


  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = fire.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

//firebase.auth().signOut();

  });

btnBack.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
 
 location.href='init.html';
  });

 firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);

         alert("Usuario Registrado!!");

           firebase.auth().signOut();
    location.href='init.html';
     // btnLogout.classList.remove('hide');
      //location.href='dash.html';
    } else {
      //location.href='dash.html';
     // console.log('no logueado');
     // btnLogout.classList.add('hide');
     //location.href='init.html';
    }    
  });

	} ());
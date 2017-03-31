(function() {

//Inicializar Firebase
 // Initialize Firebase




  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');


  // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = fire.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));   
  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
   location.href='registro.html';
  });




  // Añadir un listener en tiempo real
   fire.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
     // btnLogout.classList.remove('hide');
      location.href='dash.html';
    } else {
    	//location.href='dash.html';
      console.log('no logueado');
     // btnLogout.classList.add('hide');
    }    
  });
} ());
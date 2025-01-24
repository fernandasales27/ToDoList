authForm.onsubmit = function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    
    if (authForm.submitAuthForm.innerHTML == 'Acessar') {
        firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value)
        .then(function(user) {
            console.log('Acessou com sucesso!');
            console.log(user);
        })
        .catch(function(error) {
            console.log('Erro ao acessar');
            console.log(error);
        });
    } else {
        console.log("Outra ação pode ser executada aqui.");
    }
};

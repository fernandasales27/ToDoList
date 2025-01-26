// Obtendo os módulos necessários da nova API modular
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Inicializando a autenticação
const auth = getAuth();

// Referência do formulário
const authForm = document.getElementById('authForm');

// Função chamada ao submeter o formulário
authForm.onsubmit = function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const email = authForm.email.value;
    const password = authForm.password.value;

    if (authForm.submitAuthForm.innerHTML == 'Acessar') {
        // Realizando o login com a função da nova API
        signInWithEmailAndPassword(auth, email, password)
        .then(function(userCredential) {
            // Sucesso no login
            const user = userCredential.user;
            console.log('Acessou com sucesso!');
            console.log(user); // Exibe as informações do usuário no console
        })
        .catch(function(error) {
            console.log('Erro ao acessar');
            console.log(error); // Exibe o erro no console
        });
    } else if (authForm.submitAuthForm.innerHTML == 'Cadastrar conta') {
        // Realizando o cadastro com a função da nova API
        createUserWithEmailAndPassword(auth, email, password)
        .then(function(userCredential) {
            // Sucesso no cadastro
            const user = userCredential.user;
            console.log('Cadastrado com sucesso!');
            console.log(user); // Exibe as informações do usuário no console
        })
        .catch(function(error) {
            console.log('Falha no cadastro');
            console.log(error); // Exibe o erro no console
        });
    } else {
        console.log("Outra ação pode ser executada aqui.");
    }
};

// Monitorando o estado de autenticação do usuário
onAuthStateChanged(auth, function(user) {
    if (user) {
        console.log('Usuário autenticado');
        console.log(user); // Exibe as informações do usuário autenticado

        // Escondendo os campos de login e mostrando informações ou áreas específicas do usuário
        hideItem(authForm);
        // Aqui, você pode mostrar o que é necessário quando o usuário está autenticado, como um painel ou página do usuário.

    } else {
        console.log('Usuário não autenticado');
        // Mostra o formulário de login ou cadastro quando não há um usuário autenticado
        showItem(authForm);
    }
});

// Função para deslogar o usuário
function logoutUser() {
    hideItem(loading); // Usa a função hideItem definida em outro arquivo para esconder o elemento de loading

    signOut(auth).then(() => {
        console.log('Usuário desautenticado com sucesso');
    }).catch((error) => {
        console.error('Erro ao desautenticar o usuário:', error);
    });
}


// Se você quiser deslogar o usuário em um determinado momento (por exemplo, em um clique de botão), 
// você pode chamar a função logoutUser()
// logoutUser();

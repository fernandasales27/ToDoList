// Importando os módulos necessários da versão modular do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB83FVmNCizvNSkUrOTaOL_YFiWNgPT8No",
    authDomain: "todolist-e377a.firebaseapp.com",
    projectId: "todolist-e377a",
    storageBucket: "todolist-e377a.firebasestorage.app",
    messagingSenderId: "204061803413",
    appId: "1:204061803413:web:4ee5f4f27299c2185dec9c"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando a autenticação
const auth = getAuth(app);

// Verificar se o usuário está autenticado antes de deslogar
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Usuário autenticado, procedendo com o logout...');
        signOut(auth).then(() => {
            console.log('Usuário desautenticado com sucesso');
        }).catch((error) => {
            console.error('Erro ao desautenticar o usuário:', error);
        });
    } else {
        console.log('Nenhum usuário autenticado');
    }
});

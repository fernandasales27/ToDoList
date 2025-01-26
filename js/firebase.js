// Importando os módulos necessários da versão modular do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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

// Verificar o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Usuário autenticado:', user.email);
    } else {
        console.log('Nenhum usuário autenticado');
    }
});

// Exportando auth para usar em outros arquivos
export { auth };

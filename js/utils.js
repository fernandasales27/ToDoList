

//Definindo referencias para elementos da página
    var authForm = document.getElementById('authForm')
    var authFormTitle = document.getElementById('authFormTitle')
    var register = document.getElementById('register')
    var access = document.getElementById('access')
    var submitAuthForm = document.getElementById('submitAuthForm');


    //Alterar formulário de autenticação de novas contas

    function toggleToRegister(){
        submitAuthForm.innerHTML = 'Cadastrar conta';
        authFormTitle.innerHTML = 'Insira seus dados para se cadastrar';
        hideItem(register)
        showItem(access)

    }

    //Alterar formulário de autenticação para o acesso de contas já existentes

    function toggleToAccess(){
        submitAuthForm.innerHTML = 'Acessar';
        authFormTitle.innerHTML = 'Acesse a sua conta para continuar';
        hideItem(access)
        showItem(register)

    }

    //Simplifica a exibição de elementos da página
    function showItem(element){
        element.style.display = 'block'

    }

    //Simplifica a remoção de elementos da página
    function hideItem(element){
        element.style.display = 'none'

    }

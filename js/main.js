document.getElementById('btnSubmit').addEventListener('click', cargarJSON);

const idUsuario = document.getElementById('usuario')
const userPassword = document.getElementById('password')
const navigationAvatar = document.querySelector('.navigation__brand')

const url = "/js/database/usuarios.json"
function cargarJSON(e){
    e.preventDefault();
    fetch(url)
        .then( function(res) {
            return res.json();
        })
        .then(function(data){
            callData( data )
        })
        .catch(function(error){
            console.log(error);
        });
}

function callData( obj ){

    for(let i = 0; i < obj.length; i++){
        if(obj[i].user == idUsuario.value && obj[i].password == userPassword.value){
            alert(`Bienvenido ${obj[i].user}`)
            let avatar = document.createElement('img')
            avatar.src = obj[i].perfil
            navigationAvatar.appendChild(avatar)
        }
    }
}
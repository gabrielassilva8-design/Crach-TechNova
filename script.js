const gerar = document.getElementById('btn-gerar');
const nome = document.getElementById('nome');
const cargo = document.getElementById('occupation');
const depart = document.getElementById('departamento');
const operator = document.getElementById('operario');
const cargo2 = document.getElementById('cargo');
const depart2 = document.getElementById('depart');
const cracha = document.getElementById('card')

gerar.addEventListener('click', function() {
    const userName = nome.value;
    const userOccupe = cargo.value;
    const userDepart = depart.value;

    if (userName && userOccupe && userDepart !== "") {
        operator.textContent = "Nome: " + userName;
        cargo2.textContent = "Cargo: " + userOccupe;
        depart2.textContent = userDepart;
    
    }else{
        alert('Por favor, preencha o campo.');
    }

    if (userDepart == "Desenvolvimento") {
     cracha.style.backgroundColor = "rgb(29, 151, 233)";
    }else if (userDepart == "Design"){
     cracha.style.backgroundColor = "#7c3ec2";
    }
})
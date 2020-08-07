//procurar o botão 
document.querySelector("#add-time")

//quando clicar
.addEventListener('click', cloneField)

//executar uma ação 
function cloneField () {
    console.log("cheguei aqui")

    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //repetição de limpeza
    fields.forEach(function(field) {
        field.value = ""
    });

    //colocar na página
        //onde
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
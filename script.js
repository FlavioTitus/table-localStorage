const inputDesc = document.querySelector('.desc')
const btnRegistrar = document.querySelector('.btn')
const selectTipos = document.querySelector('.tipos')
const tabela = document.querySelector('.table')
const tableBody = document.querySelector('.tableBody')
let texto = ''

inputDesc.addEventListener('input',(event) => {
    texto = event.target.value
})

btnRegistrar.addEventListener('click', () => {
    tabela.style.display = 'flex'
    alimentarTabela()
    limparCampos()
})

alimentarTabela = () => {
    let linha = document.createElement('tr')
    let coluna = document.createElement('td')
    let coluna2 = document.createElement('td')

    let descricao = document.createTextNode(texto)
    let tipo = document.createTextNode(selectTipos.value)

    coluna.appendChild(descricao)
    coluna2.appendChild(tipo)

    linha.appendChild(coluna)
    linha.appendChild(coluna2)
    tableBody.appendChild(linha)
}

limparCampos = () => {
    inputDesc.value = ''
    selectTipos.value = ''
}
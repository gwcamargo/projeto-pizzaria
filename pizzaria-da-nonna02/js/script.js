// funções auxiliares ou úteis
const seleciona = (elemento) => document.querySelector(elemento)
const seleciona_todos = (elemento) => document.querySelectorAll(elemento)

const abrir_modal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0
    seleciona('.pizzaWindoArea').style.display = 'flex'
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.opacity = 1
    }, 150)
}

const fechar_modal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

const botoes_fechar = () => {
    seleciona_todos('.pizzaInfo--cancelButton, pizzaInfo--cancelMobileButton').forEach((item) => {
        item.addEventListener('click', fechar_modal)
    })
}

// Mapear pizzaJson para gerar listas de pizzas
pizzaJson.map((item, index ) => {
    //console.log(item)
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)

    seleciona('.pizza-area').append(pizzaItem)
    
    //console.log(pizzaItem)
    document.querySelector('.pizza-area').append(pizzaItem)

    // preencher os dados de cada pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    // pizza clicada
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log("Clicou na pizza")

        // abrir janela modal
        document.querySelector('.pizzaWindowArea').style.display = 'flex'

        // preenchimento dos dados da pizza (janela modal da pizza)
        document.querySelector('.pizzaBig img').src = item.img
        document.querySelector('.pizzaInfo h1').innerHTML = item.name
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
    })

    // evento de clique para botão cancelar (janela modal da pizza)
    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })

    // evento de clique para botão voltar (janela modal da pizza)
    document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })
})
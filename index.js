pizzaJson.map((item, index) => {
    console.log(item)

    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)

    document.querySelector('.pizza-area').append(pizzaItem)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
})
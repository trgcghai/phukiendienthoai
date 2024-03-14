const addToCartBtn = document.querySelector(".addToCart_btn")
const productQuantities = document.getElementById('quantity_input')

addToCartBtn.addEventListener('click', () => {
    if (localStorage.getItem('user') === null) {
        window.location.href = '../pages/login.html'
        return
    }

    const currProduct = {
        productId: localStorage.getItem('productId'),
        quantity: productQuantities.value
    }
    
    let cart = localStorage.getItem('cart')
    if (cart === null) {
        cart = []
    } else {
        cart = JSON.parse(cart)
    }

    if (cart.filter(item => item.productId == currProduct.productId).length) {
        cart.forEach(item => {
            if (item.productId == currProduct.productId) {
                item.quantity = (parseInt(item.quantity) + parseInt(currProduct.quantity)).toString()
            }
        });   
    } else {
        cart.push(currProduct)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    productQuantities.value = 1
})




function updateSubtotal(input) {
    const cartItem = input.closest('.cart-item');
    const price = parseFloat(cartItem.getAttribute('data-price'));
    const quantity = parseInt(input.value);
    const subtotal = price * quantity;

    cartItem.querySelector('.cart-item-subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    updateTotal();
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const subtotal = parseFloat(item.querySelector('.cart-item-subtotal').textContent.replace('R$ ', ''));
        total += subtotal;
    });

    document.querySelector('.cart-total-amount').textContent = `R$ ${total.toFixed(2)}`;
}

function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal();
}

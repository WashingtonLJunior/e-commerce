// Função para adicionar um item ao carrinho
function addToCart(product) {
    const product = getProduct(button)
    // Verifica se o carrinho já existe no localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica se o produto já está no carrinho
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // Se o produto já está no carrinho, aumenta a quantidade
        existingProduct.quantity++;
    } else {
        // Se o produto não está no carrinho, adiciona-o
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redireciona para a página do carrinho
    window.location.href = "carrinho.html";
}

// Exemplo de uso:
const product1 = {
    id: 1,
    name: "Nome do Produto 1",
    price: 50.00
};

// Chama addToCart ao clicar no botão "Adicionar ao Carrinho"
document.querySelector('.add-to-cart').addEventListener('click', function() {
    addToCart(product1);
});

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const subtotal = parseFloat(item.querySelector('.cart-item-subtotal').textContent.replace('R$ ', ''));
        total += subtotal;
    });

    document.getElementById('totalAmount').textContent = total.toFixed(2);
}

// Função para atualizar o subtotal ao alterar a quantidade
function updateSubtotal(input) {
    const cartItem = input.closest('.cart-item');
    const price = parseFloat(cartItem.getAttribute('data-price'));
    const quantity = parseInt(input.value);
    const subtotal = price * quantity;

    cartItem.querySelector('.cart-item-subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;

    updateTotal(); // Chama a função para atualizar o total
}

// Função para remover um item do carrinho
function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal(); // Chama a função para atualizar o total
}

// Chama a função para calcular o total inicial ao carregar a página
updateTotal();

// Adicione o botão "Adicionar ao Carrinho" em cada item do carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        addToCart(this); // Passa o próprio botão como argumento
    });
});
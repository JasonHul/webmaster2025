function removeItem(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    // Update total price and show empty cart message if needed
    updateTotal();
}

function updateTotal() {
    const rows = document.querySelectorAll('#cart-items tr');
    let total = 0;

    rows.forEach(row => {
        const subtotal = parseFloat(row.cells[4].textContent.replace('$', ''));
        total += subtotal;
    });

    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;

    const emptyCartMessage = document.querySelector('.empty-cart');
    if (rows.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
    }
}
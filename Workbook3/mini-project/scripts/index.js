window.onload = function() {
    document.getElementById('iceCreamOrder').onsubmit = function(event) {
        event.preventDefault();
        calculateTotal();
    };
};

function calculateTotal() {
    const numScoops = parseInt(document.getElementById('numScoops').value);
    const basePrice = 2.25 + (numScoops - 1) * 1.25;
    let toppingsTotal = calculateToppingsTotal();
    const total = basePrice + toppingsTotal;
    const tax = total * 0.05;
    const totalDue = total + tax;
    showResults(basePrice, tax, totalDue);
}

function calculateToppingsTotal() {
    let total = 0;
    if (document.getElementById('sprinkles').checked) total += parseFloat(document.getElementById('sprinkles').value);
    if (document.getElementById('whippedCream').checked) total += parseFloat(document.getElementById('whippedCream').value);
    if (document.getElementById('hotFudge').checked) total += parseFloat(document.getElementById('hotFudge').value);
    if (document.getElementById('cherry').checked) total += parseFloat(document.getElementById('cherry').value);
    return total;
}

function showResults(basePrice, tax, totalDue) {
    document.getElementById('basePrice').textContent = `$${basePrice.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('totalDue').textContent = `$${totalDue.toFixed(2)}`;
    document.getElementById('result').style.display = 'block';
}

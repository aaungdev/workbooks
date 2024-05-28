window.onload = function() {
    document.getElementById('submitOrder').onclick = calculateTotal;
};

function toggleToppings(show) {
    let toppings = document.getElementById('toppings');
    if (show) {
        toppings.style.display = 'block';
    } else {
        toppings.style.display = 'none';
    }
}

function calculateTotal() {
    let scoops = parseInt(document.getElementById('scoopCount').value);
    let basePrice = 2.25;
    if (scoops > 1) {
        basePrice += (scoops - 1) * 1.25;
    }

    let toppingsCost = 0;
    if (document.getElementById('cup').checked) {
        if (document.getElementById('sprinkles').checked) {
            toppingsCost += 0.50;
        }
        if (document.getElementById('cream').checked) {
            toppingsCost += 0.25;
        }
        if (document.getElementById('fudge').checked) {
            toppingsCost += 1.25;
        }
        if (document.getElementById('cherry').checked) {
            toppingsCost += 0.25;
        }
    }

    let totalBasePrice = basePrice + toppingsCost;
    let tax = totalBasePrice * 0.08;
    let totalDue = totalBasePrice + tax;

    document.getElementById('basePrice').innerText = `$${totalBasePrice.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('total').innerText = `$${totalDue.toFixed(2)}`;
}

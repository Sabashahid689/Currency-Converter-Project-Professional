const currency = {
    USD: 1,
    INR: 74.57,
    GBP: 0.91,
    EUR: 0.91,
    PKR: 280
};

document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;
    let amount = parseInt(document.getElementById('amount').value) || 0;

    let fromAmount = currency[fromCurrency] || 1;
    let toAmount = currency[toCurrency] || 1;     

    let convertedAmount = (amount / fromAmount) * toAmount;

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`;
});





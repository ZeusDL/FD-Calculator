function calculateMaturityAmount() {
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100; 
    const tenure = parseFloat(document.getElementById('tenure').value);
    const compoundingFrequency = parseInt(document.getElementById('compoundingFrequency').value);

    if (isNaN(principle) || isNaN(interestRate) || isNaN(tenure)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        document.getElementById('result').style.color = "red"; 
        return;
    }

    // Compound interest formula
    const maturityAmount = principle * Math.pow(1 + interestRate / compoundingFrequency, compoundingFrequency * tenure);

    document.getElementById('result').innerText = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;
    document.getElementById('result').style.color = "#4caf50"; 
}

document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
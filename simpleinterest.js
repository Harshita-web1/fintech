document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("amount");
    const interestInput = document.getElementById("interest-rate");
    const timeInput = document.getElementById("time-period");

    const amountValue = document.getElementById("amount-value");
    const interestValue = document.getElementById("interest-value");
    const timeValue = document.getElementById("time-value");

    const totalDisplay = document.getElementById("total");
    const footerAmount = document.getElementById("footer-amount");

    let chart; // To store the Chart.js instance

    function calculateInterest() {
        const P = parseFloat(amountInput.value);
        const r = parseFloat(interestInput.value) / 100; // Convert percentage to decimal
        const t = parseFloat(timeInput.value);

        const A = P * (1 + r * t); // Simple Interest Formula: A = P(1 + rt)
        const interestEarned = A - P;

        totalDisplay.textContent = `₹ ${A.toFixed(2)}`;
        footerAmount.textContent = `${P.toLocaleString()}`;
        
        updateChart(P, interestEarned);
    }

    function updateChart(principal, interest) {
        const ctx = document.getElementById("pieChart").getContext("2d");

        if (chart) {
            chart.destroy(); // Destroy previous chart before creating a new one
        }

        chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Invested Amount", "Interest Earned"],
                datasets: [{
                    data: [principal, interest],
                    backgroundColor: ["#ffcc00", "#ff6666"]
                }]
            }
        });
    }

    function updateLabels() {
        amountValue.textContent = `₹ ${parseFloat(amountInput.value).toLocaleString()}`;
        interestValue.textContent = `${interestInput.value}%`;
        timeValue.textContent = `${timeInput.value} Yr`;

        calculateInterest();
    }

    // Event Listeners for Sliders
    amountInput.addEventListener("input", updateLabels);
    interestInput.addEventListener("input", updateLabels);
    timeInput.addEventListener("input", updateLabels);

    // Initial Calculation on Load
    updateLabels();
});

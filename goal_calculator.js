function calculateGoal() {
    let goalAmount = parseFloat(document.getElementById("goal_amount").value);
    let rateOfReturn = parseFloat(document.getElementById("rate_of_return").value) / 100;
    let timePeriod = parseFloat(document.getElementById("time_period").value);

    if (isNaN(goalAmount) || isNaN(rateOfReturn) || isNaN(timePeriod) || goalAmount <= 0 || timePeriod <= 0) {
        document.getElementById("revised_goal").innerText = "Please enter valid inputs.";
        return;
    }

    // Compound Interest Formula: FV = P(1 + r/n)^(nt)
    let revisedAmount = goalAmount * Math.pow((1 + rateOfReturn / 12), (12 * timePeriod));
    let sipAmount = (goalAmount * rateOfReturn / 12) / (Math.pow(1 + rateOfReturn / 12, 12 * timePeriod) - 1);
    let lumpSum = goalAmount / Math.pow(1 + rateOfReturn, timePeriod);

    document.getElementById("revised_goal").innerText = `₹ ${revisedAmount.toFixed(2)}`;
    document.getElementById("sip_amount").innerText = `₹ ${sipAmount.toFixed(2)}`;
    document.getElementById("lump_sum").innerText = `₹ ${lumpSum.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
    let matchForm = document.getElementById("matchForm");
    let matchResult = document.getElementById("matchResult");
    let predictionContainer = document.getElementById("predictionContainer");
    let wrestler1Select = document.getElementById("wrestler1");
    let wrestler2Select = document.getElementById("wrestler2");

    function updatePredictionOptions() {
        let wrestler1 = wrestler1Select.value;
        let wrestler2 = wrestler2Select.value;
        
        if (wrestler1 === wrestler2) {
            predictionContainer.innerHTML = "❌ A wrestler cannot fight himself!";
            return;
        }

        predictionContainer.innerHTML = `
            <label>Predict the Winner:</label><br>
            <input type="radio" name="winner" value="${wrestler1}" id="winner1">
            <label for="winner1">${wrestler1.toUpperCase()}</label><br>
            <input type="radio" name="winner" value="${wrestler2}" id="winner2">
            <label for="winner2">${wrestler2.toUpperCase()}</label>
        `;
    }

    wrestler1Select.addEventListener("change", updatePredictionOptions);
    wrestler2Select.addEventListener("change", updatePredictionOptions);

    if (matchForm) {
        matchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            let wrestler1 = wrestler1Select.value;
            let wrestler2 = wrestler2Select.value;
            let matchType = document.getElementById("matchType").value;
            let prediction = document.querySelector('input[name="winner"]:checked');
            
            if (wrestler1 === wrestler2) {
                matchResult.innerHTML = "❌ A wrestler cannot fight himself!";
                matchResult.style.color = "red";
                return;
            }

            if (!prediction) {
                matchResult.innerHTML = "❌ Please select a predicted winner!";
                matchResult.style.color = "red";
                return;
            }
            
            let randomWinner = Math.random() < 0.5 ? wrestler1 : wrestler2;
            let isCorrect = randomWinner === prediction.value ? "✅ You predicted correctly!" : "❌ Wrong prediction!";
            
            let resultHTML = `
                <h3>🔥 Match Created! 🔥</h3>
                <p><strong>${wrestler1.toUpperCase()}</strong> vs <strong>${wrestler2.toUpperCase()}</strong></p>
                <p>Match Type: <strong>${matchType.replace("_", " ").toUpperCase()}</strong></p>
                <p>Predicted Winner: <strong>${prediction.value.toUpperCase()}</strong></p>
                <p>🎉 Actual Winner: <strong>${randomWinner.toUpperCase()}</strong></p>
                <p>${isCorrect}</p>
            `;
            
            matchResult.innerHTML = resultHTML;
            matchResult.style.color = "#ffcc00";
        });
    }

    updatePredictionOptions();
});

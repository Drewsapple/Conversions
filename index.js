function updateLengthsFromFT() {
    var x = parseFloat(document.getElementById("ft").value);
    document.getElementById("mm").value = Math.round(x / 0.0328084) * 10;
    document.getElementById("m").value = Math.round(x / 3.28084 * 100) / 100;
    M.updateTextFields();
}

function updateLengthsFromMM() {
    var x = parseFloat(document.getElementById("mm").value);
    document.getElementById("ft").value = Math.round(x * 0.00328084 * 100) / 100;
    document.getElementById("m").value = Math.round(x / 1000 * 100) / 100;
    M.updateTextFields();
}

function updateLengthsFromM() {
    var x = parseFloat(document.getElementById("m").value);
    document.getElementById("ft").value = Math.round(x * 3.28084 * 100) / 100;
    document.getElementById("mm").value = Math.round(x * 1000 / 10) * 10;
    M.updateTextFields();
}

function updateSpeedFromMph() {
    var x = parseFloat(document.getElementById("mph").value);
    document.getElementById("kph").value = Math.round(x * 1.609344 * 100) / 100;
    document.getElementById("knots").value = Math.round(x * 0.8689758 * 100) / 100;
    document.getElementById("mps").value = Math.round(x * 1.609344 / 3.6 * 100) / 100;
    document.getElementById("fps").value = Math.round(x * 5280 / 3600 * 100) / 100;
    M.updateTextFields();
}

function updateSpeedFromKph() {
    var x = parseFloat(document.getElementById("kph").value);
    document.getElementById("mph").value = Math.round(x / 1.609344 * 100) / 100;
    document.getElementById("knots").value = Math.round(x * 0.5399565 * 100) / 100;
    document.getElementById("mps").value = Math.round(x / 3.6 * 100) / 100;
    document.getElementById("fps").value = Math.round(x * 0.9113444 * 100) / 100;
    M.updateTextFields();
}

function updateSpeedFromKnots() {
    var x = parseFloat(document.getElementById("knots").value);
    document.getElementById("mph").value = Math.round(x / 0.8689758 * 100) / 100;
    document.getElementById("kph").value = Math.round(x / 0.5399565 * 100) / 100;
    document.getElementById("mps").value = Math.round(x * 0.5144447 * 100) / 100;
    document.getElementById("fps").value = Math.round(x * 1.687811 * 100) / 100;
    M.updateTextFields();
}

function updateSpeedFromMps() {
    var x = parseFloat(document.getElementById("mps").value);
    document.getElementById("mph").value = Math.round(x / 1.609344 * 3.6 * 100) / 100;
    document.getElementById("kph").value = Math.round(x * 3.6 * 100) / 100;
    document.getElementById("knots").value = Math.round(x / 0.5144447 * 100) / 100;
    document.getElementById("fps").value = Math.round(x * 3.28084 * 100) / 100;
    M.updateTextFields();
}

function updateSpeedFromFps() {
    var x = parseFloat(document.getElementById("fps").value);
    document.getElementById("mph").value = Math.round(x / 5280 * 3600 * 100) / 100;
    document.getElementById("kph").value = Math.round(x / 0.9113444 * 100) / 100;
    document.getElementById("knots").value = Math.round(x / 1.687811 * 100) / 100;
    document.getElementById("mps").value = Math.round(x / 3.28084 * 100) / 100;
    M.updateTextFields();
}

function updateWeightsFromLbs() {
    var x = parseFloat(document.getElementById("lbs").value);
    document.getElementById("kg").value = Math.round(x / 2.204623 * 100) / 100;
    document.getElementById("oz").value = Math.round(x / 16 * 10) / 10;
    document.getElementById("g").value = Math.round(x / 2.204623 * 100) * 10;
    M.updateTextFields();
}

function updateWeightsFromKg() {
    var x = parseFloat(document.getElementById("kg").value);
    document.getElementById("lbs").value = Math.round(x * 2.204623 * 100) / 100;
    document.getElementById("oz").value = Math.round(x * 2.204623 * 16 * 10) / 10;
    document.getElementById("g").value = Math.round(x * 100) * 10;
    M.updateTextFields();
}

function updateWeightsFromOz() {
    var x = parseFloat(document.getElementById("oz").value);
    document.getElementById("lbs").value = Math.round(x / 16 * 100) / 100;
    document.getElementById("kg").value = Math.round(x / 16 / 2.204623 * 100) / 100;
    document.getElementById("g").value = Math.round(x / 16 / 2.204623 * 100) * 10;
    M.updateTextFields();
}

function updateWeightsFromG() {
    var x = parseFloat(document.getElementById("g").value);
    document.getElementById("kg").value = Math.round(x / 1000 * 100) / 100;
    document.getElementById("lbs").value = Math.round(x / 1000 * 2.204623 * 100) / 100;
    document.getElementById("oz").value = Math.round(x / 1000 * 2.204623 * 16 * 10) / 10;
    M.updateTextFields();
}
function submitData() {
    const soilDepth = document.getElementById('soil_depth').value;
    const soilTexture = document.getElementById('soil_texture').value;
    const soilPh = document.getElementById('soil_ph').value;
    const rainfall = document.getElementById('rainfall').value;
    const temperature = document.getElementById('temperature').value;
    const slope = document.getElementById('slope').value;

    const data = {
        soil_depth: soilDepth,
        soil_texture: soilTexture,
        soil_ph: soilPh,
        rainfall: rainfall,
        temperature: temperature,
        slope: slope
    };

    fetch('http://127.0.0.1:5000/predict', { // Adjust the URL if the server is hosted elsewhere
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Predicted Cluster: ${data.cluster}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

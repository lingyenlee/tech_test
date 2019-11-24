const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require("path")

app.use(cors());


const car2goVehicles = JSON.parse(fs.readFileSync('car2go/vehicles.json', 'utf8'));
const mytaxiVehicles = JSON.parse(fs.readFileSync('mytaxi/vehicles.json', 'utf8'));

// CAR2GO ROUTE
app.get('/car2go/vehicles', (req, res) => {
    res.send(JSON.stringify(car2goVehicles));
});

// MYTAXI ROUTE
app.get('/mytaxi/vehicles', (req, res) => {
    res.send(JSON.stringify(mytaxiVehicles));
});

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
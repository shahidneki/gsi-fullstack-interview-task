const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:4201',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));


// API endpoint to get buildings data
app.get('/api/buildings', (req, res) => {
  const data = JSON.parse(fs.readFileSync('../web-app/src/assets/buildings.geojson', 'utf8'));
  const features = data.features.map(feature => ({
    id: feature.properties.geom_id,
    address: feature.properties.address,
    city: feature.properties.city,
    country: feature.properties.country,
    type: feature.properties.type,
    roof_material: feature.properties.roof_material,
    roof_type: feature.properties.roof_type,
    area: feature.properties.area,
    storeys: feature.properties.storeys,
    height: feature.properties.height
  }));

  res.json(features);
});

// API endpoint to update a building
app.put('/api/buildings/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const data = JSON.parse(fs.readFileSync('../web-app/src/assets/buildings.geojson', 'utf8'));

  const index = data.features.findIndex(feature => feature.properties.geom_id === id);
  if (index !== -1) {
    data.features[index].properties = { ...data.features[index].properties, ...updatedData };
    fs.writeFileSync('../web-app/src/assets/buildings.geojson', JSON.stringify(data, null, 2));
    res.json(data.features[index]);
  } else {
    res.status(404).json({ error: 'Building not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
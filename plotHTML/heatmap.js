
fetch("plotHTML/crime_latlong_cleaned.json")
  .then(response => response.json())
  .then(data => {
    const points = data.map(d => [d.Lat, d.Long, 0.5]);

    const map = L.map('map').setView([42.32, -71.08], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.heatLayer(points, {
      radius: 15,
      blur: 20,
      maxZoom: 17,
      gradient: {
        0.1: "blue",
        0.3: "lime",
        0.6: "orange",
        0.9: "red"
      }
    }).addTo(map);
  });

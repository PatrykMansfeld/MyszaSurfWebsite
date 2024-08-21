function WindRadar() {
  return (
    <div>
      <iframe className="windradar"
        src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=52.474168&lon=16.7821267"
      ></iframe>
    </div>
  );
}

export default WindRadar;

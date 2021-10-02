export function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

export function toCamelCase(str) {
  return str.replace(/-./g, x => x.toUpperCase()[1]);
}

export function makespeedScale (speed) {
  if (speed === "all") {
    return null;
  }
  return <div>
    { [...Array(speed)].map((_, i) => (
      <img 
        key={i.toString()}
        className="speed" 
        alt={`${speed}-speed`} 
        src={`${process.env.PUBLIC_URL}/icons/clock.png`} 
      />
    )) }
  </div>
}

export function getTemperatureIcon (temperature) {
  if (temperature === "all") {
    return null;
  }
  return (
    <img 
      className="temperature" 
      alt={`${temperature}-temperature`} 
      src={`${process.env.PUBLIC_URL}/icons/${temperature}.png`} 
    />
  )
}

export function getFlag (country) {
  if (country === "all") {
    return null;
  }
  if (country === "united states") {
    country = "usa";
  }
  return (
    <img 
      className="flag" 
      alt={`${country}-flag`} 
      src={`${process.env.PUBLIC_URL}/flags/${country}.png`} 
    />
  )
}
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

export function getFlag (country) {
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
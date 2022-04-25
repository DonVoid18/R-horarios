import "./ButtonHour.css";
function ButtonHour({ name, min, max, cambio }) {
  return (
    <input type={"number"} name={name} min={min} max={max} onChange={cambio} required/>
  );
}
export default ButtonHour;

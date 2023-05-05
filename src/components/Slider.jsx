export default function Slider({ min, max, label, value, setValue }) {

  // Add name prop to input element like name={name} and pass it to the function like min max
  return (
    <>
      <h4>{label}</h4>
      <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)} /> 
    </>
  );
}
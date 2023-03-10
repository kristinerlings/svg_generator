export default function slider({ min, max, label, value, setValue }) {

  return (
    <>
      <h4>{label}</h4>
      <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)} /* expects to receive a value  *//> 
    </>
  );
}
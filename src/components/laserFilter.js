import "./laserFilter.css";

function LaserFilter({ laser, setLaser }) {
  
    function handleChange(e) {
        if (e.target.checked && !laser) {
            setLaser(true)
        } else {
            setLaser(false)
        }
  }

  return (
    <div id="component-wrapper" className="relative inline-block w-10 mr-2 align-middle border-solid select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-100 border-4 border-white appearance-none cursor-pointer"
        onChange={handleChange}
      />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
  );
}

export default LaserFilter;

function ColorFilter({ selectedColors, setSelected, colors, setSelectedColors }) {
  
    const handleChange = (e) => {
    //logic to handle checking and unchecking    
    if (e.target.checked) {
      selectedColors.push(e.target.name);
    } else {
      const currentColors = selectedColors;
      const newColors = currentColors.filter(
        (color) => color !== e.target.name
      );
      setSelectedColors(newColors);
    }
  };

  return (
    <div id="component-wrapper">
      <div className="flex justify-between items-center">
        {colors.map((color, i) => {
          return (
            <div id="checkbox-items" className="flex flex-col m-2" key={i}>
              <input
                type="checkbox"
                name={color}
                onChange={handleChange}
                className=""
              />
              <label>{color}</label>
            </div>
          );
        })}
      </div>
      <div id="radio-items" >
        <input
          type="radio"
          name="binary"
          id="selected"
          value="selected"
          onChange={() => setSelected(true)}
        />
        <label htmlFor="selected">{"Show Selected"}</label>
      </div>
      <div>
        <input
          type="radio"
          name="binary"
          id="others"
          value="others"
          onChange={() => setSelected(false)}
        />
        <label htmlFor="others">{"Show Others"}</label>
      </div>
    </div>
  );
}

export default ColorFilter;

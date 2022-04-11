import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ColorFilter from "../components/colorFilter";
import SpeedFilter from "../components/speedFilter";
import LaserFilter from "../components/laserFilter";

function Home() {
    //colors to be used
  const colors = ["red", "blue", "silver", "gold", "pink"];
  const [searchParams, setSearchParams] = useSearchParams({});
  const [selected, setSelected] = useState(true);
  const [selectedColors, setSelectedColors] = useState([]);
  const [maxSpeed, setMaxSpeed] = useState("");
  const [laser, setLaser] = useState(false);

  useEffect(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //builds query string
    queryBuilder();
    //disables button
    document.getElementById('submit').disabled = true;
  };

  function queryBuilder() {
      //handles color logic, whether it returs selected colors or others
    if (selected) {
        selectedColors.forEach((color) => searchParams.append("color", color));
      } else {
        const currentColors = selectedColors;
        const otherColors = colors.filter(
          (color) => !currentColors.includes(color)
        );
        otherColors.forEach((color) => searchParams.append("color", color));
      }
      //adds the rest of the search params
      maxSpeed && searchParams.append("maxSpeed", maxSpeed);
      searchParams.append("pulseLaser", laser);
      searchParams.sort();
      setSearchParams(searchParams);
  }


  return (
    <div id="app-wrapper" className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <div id="form-wrapper" className="items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white rounded shadow-lg p-12 mt-12 divide-y"
        >
          <h3 className="text-center font-bold mb-2">
            {"Mr.Z's Garage Filter"}
          </h3>
          <div id="colorFilter-wrapper" className="mb-2">
            <label htmlFor="ColorFilter" className="font-semibold text-sm">
              {"Colors"}
              <ColorFilter
                selectedColors={selectedColors}
                colors={colors}
                setSelectedColors={setSelectedColors}
                setSelected={setSelected}
              />
            </label>
          </div>
          <div id="speedFilter-wrapper" className="mb-2">
            <label htmlFor="SpeedFilter" className="font-semibold text-sm">
              {"Select Max Speed"}
              <SpeedFilter
                maxSpeed={maxSpeed}
                setMaxSpeed={setMaxSpeed}
              ></SpeedFilter>
            </label>
          </div>
          <div id="laserFilter-wrapper" className="flex justify-between mb-2 pt-2">
            <label htmlFor="LaserFilter" className="font-semibold text-sm pr-4">
              {"Pulse Laser"}
            </label>
            <LaserFilter laser={laser} setLaser={setLaser}></LaserFilter>
          </div>
          <div id="button-wrapper" className="flex justify-center">
            <button
              type="submit"
              id="submit"
              className="flex items-center justify-center h-12 px-6 w-52 bg-cyan-600 mt-2 rounded font-semibold text-md text-stone-50 hover:bg-cyan-700"
            >
              {"Generate"}
            </button>
          </div>
        </form>
        <div id="resetBtn-wrapper" className="flex justify-end mt-4">
          <button type="reset" className="text-blue-400 text-xs" onClick={() => window.location.reload()}>
            {"reset app"}
          </button>
        </div>
      </div>
      <div id="queryString-wrapper" className="flex flex-col">
            <p>{"Query string: "}</p>
          <p>{searchParams.toString()}</p>
      </div>
    </div>
  );
}

export default Home;

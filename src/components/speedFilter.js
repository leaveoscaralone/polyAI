function SpeedFilter({ maxSpeed, setMaxSpeed }) {

    function handleSelect(e) {
        if (maxSpeed) {
            const maxSpeedNum = maxSpeed.match(/\d+/)
            maxSpeed = e.target.value + maxSpeedNum
            setMaxSpeed(maxSpeed)
        }
    }

    return (
        <div className="flex flex-col justify-between">
            <input type="number" min="50" max="200" placeholder="50 - 200" 
            onChange={(e) => setMaxSpeed(e.target.value)} 
            className="flex items-center h-8 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"    
            />
            <select name="filter" id="filter" onChange={handleSelect} className="mt-2" >
                <option value="">{"Exact Match"}</option>
                <option value="ge" >{"Greater than"}</option>
                <option value="le">{"Less than"}</option>
            </select>
        </div>
    )
}

export default SpeedFilter;
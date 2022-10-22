import React from "react"

const FilterForm = ({filter, onChange}) => {
    return (
        <div>
          <label>
            Find contacts by Name
            <input type="text" value={filter} onChange={onChange} />
          </label>
        </div>
    )
}

export default FilterForm
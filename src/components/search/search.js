import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)
// seearchData is the data we enter in asyncPaginate
    const handleOnChange = (searchData) => {
        setSearch(searchData); //to update our search
        onSearchChange(searchData); //pass the data 
    }

    const loadOptions =  async (inputValue) => {

        return fetch(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions
        )
        .then((response ) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) =>{
                    return {
                        // for latitude and longitude can find in network
                        value: `${city.latitude} ${city.longitude}` , 
                        // for label is city name and contry code
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch((err) => console.log(err));
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600} //so we can search only after 600 timeout 
            value={search} 
            onChange={handleOnChange} //update value
            loadOptions={loadOptions}
        />
    )
}

export default Search;
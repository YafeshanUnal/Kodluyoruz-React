import { useFormik } from 'formik';
import React from 'react';

import cityJson from './cityJson'

function City({getCity}) {
    const array = ["father","mother","brother"];
    console.log(...array);
    const [city] = useState(cityJson);

    const {handleChange, values} = useFormik({
        initialValues: {
            cityName : "",
        },
    });

    const sendCity = () => {
        getCity(values.cityName)
    }

    sendCity();

  return (
    <form>
      <select onChange={handleChange} name="cityName" className="selection">
        {city.map(
          (item) => (
            (<option key={item.id} value={item.name} >{item.name}</option>)
          )
        )}
      </select>
    </form>
  );
  
}

export default City
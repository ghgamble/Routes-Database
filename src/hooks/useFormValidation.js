import { useState } from "react";

const useFormValidation = (initialState) => {
      const [values, setValues] = useState(initialState);

      function handleChange(e) {
            e.persist();
            setValues(previousValues => ({
                  ...previousValues,
                  [e.target.name]: e.target.value
            }))
            console.log(values);
      }

      return { handleChange, values };
}

export default useFormValidation;

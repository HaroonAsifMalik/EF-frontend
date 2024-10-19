import React from "react"

function Input(props)
{
    return (
        <input
              placeholder={props.placeholder}
              type={props.type}
              className="border focus:outline-orange-500  t rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition duration-200"
              required
            />
    );
}
export default Input;

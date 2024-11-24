import React from "react"

function Input(props) {
    return (
      <input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        className="border focus:outline-orange-500 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition duration-200"
        value={props.value} 
        onChange={props.onChange} 
        required
      />
    );
  }

  export default Input
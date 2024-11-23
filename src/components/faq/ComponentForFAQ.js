import React from "react";

function FAQ(props) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{props.que}</h3>
      <p className="text-gray-700 mb-8">{props.ans}</p>
    </div>
  );
}

export default FAQ;

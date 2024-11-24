import React from "react";

function FooterSection(props) {
  return (
    <div className="footer-link">
      <h3 className="font-semibold">{props.title}</h3>
      <ul>
        <li>
          <a href="#" className="hover:text-gray-400">
            {props.li1}
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            {props.li2}
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            {props.li3}
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            {props.li4}
          </a>
        </li>
      </ul>
    </div>
  );
}
export default FooterSection;

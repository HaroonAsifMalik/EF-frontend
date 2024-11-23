import React from "react";

function Li(props)
{
    return (
        <li><a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">{props.value}</a></li>
    );
}
export default Li;
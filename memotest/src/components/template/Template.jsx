import React from "react";
import './Template.css';

const Template = ({children}) => {
    return(
        <div className="container-home">
            <div className='header'>
               🧠 Memo Test
            </div>
            {children}
        </div>
    )
}

export default Template;
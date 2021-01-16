import React, {Component} from 'react';
import classNames from "classnames";

const Button = (props) => {
    return (

        <button className={classNames(
            "button", {
                'button--outline': props.my_outline,
            },
            {
                "button--filled": props.children,
            },
            {
                "button--test": props.test,
            },

        )}>
            {props.children}
        </button>


    );
}


// function Qwe2(props) {
//     ...
//
// }

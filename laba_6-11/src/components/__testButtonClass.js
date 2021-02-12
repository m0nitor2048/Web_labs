import React, {Component} from 'react';
import classNames from "classnames";
// props - це те що ми передаємо в компонент (атрибути)

class __testButtonClass extends Component {

    componentDidMount() {
        console.log("componentDidMount")
    }


    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    render() {
        console.log(this.props)
        if (this.props.test !== 0) {
            let test = "qwerty"
        } else {
            let test = this.props.test
            console.log("pass")
        }

        // 1) className={this.props.my_outline ? "button-outline" : ""}
        // 2) className={`button ${this.props.my_outline ? "button-outline" : ""}`}
        // npm install classnames

        return (

            <button className={classNames(
                "button", {
                    'button--outline': this.props.my_outline,
                },
                {
                    "button--filled": this.props.children,
                },
                {
                    "button--test": this.props.test,
                },

                )}>
                {this.props.children}
            </button>

        );
    }
}

export default __testButtonClass;
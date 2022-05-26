import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class TodoInput extends React.Component {
    handleSubmit = (event) => {
        if (event.key === "Enter") {
            if (event.target.value !== "" && event.target.value.trim()) {
                this.props.todoInputValue(event.target.value);
                event.target.value = "";
            } else {
                alert("enter todo here....");
            }
        }
    }
    handleSubmitFromButton = (e) => {
        const inputVal = e.target.previousSibling.value;
        if (inputVal.trim() && inputVal !== "") {
            this.props.todoInputValue(inputVal);
            e.target.previousSibling.value = "";
        } else {
            alert("Enter todo here....");
        }
    }
    render() {
        return (
            <div>
                <input className="input-box" onKeyPress={this.handleSubmit} 
                placeholder="Enter todo here.." type="text" />&nbsp;
                <button className="primary mb-3" onClick={(e) => 
                    this.handleSubmitFromButton(e)}>Add Todo</button>
            </div >
        )
    }
}

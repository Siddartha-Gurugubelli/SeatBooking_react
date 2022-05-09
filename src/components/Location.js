import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Location extends Component {

    constructor() {
        super();

        this.state = {
            Location: ''
        };
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
        this.setState({
            office: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleClick = (e) => {
        const nav = useNavigate();
        nav("../User")
    }
    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <strong>Select Location:</strong>

                    <ul>
                        <li>
                            <label>
                                <input type="radio" value="Bnglr" checked={this.state.office === "Bnglr"} onChange={this.onRadioChange} />
                                <span>Bnglr</span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <input type="radio" value="Hyd" checked={this.state.office === "Hyd"} onChange={this.onRadioChange} />
                                <span>Hyd</span>
                            </label>
                        </li>
                    </ul>

                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Location
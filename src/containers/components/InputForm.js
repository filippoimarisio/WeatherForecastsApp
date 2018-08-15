import React, { PureComponent } from 'react'

class InputForm extends PureComponent {

    handleChange = event => {

        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.findCity({
            city: this.state.city,
            countryCode: this.state.countryCode,
        })
    }

    render() {
        return (
            <div className='inputForm'>
              <h3>Search City</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            City:
                            <input type="text" name="city" onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Country code:
                            <input type="text" name="countryCode" onChange={this.handleChange} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    } 
}

export default InputForm

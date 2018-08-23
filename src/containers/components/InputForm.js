import React, { PureComponent } from 'react'
import cities from '../../constants/city.list.json'
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from '@material-ui/core'
import './InputForm.css'

class InputForm extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      searchCity: '',
      value: '',
    }
  }

  handleChange = event => {

      const value = event.target.value;
      const name = event.target.name;
      this.setState({
          [name]: value,
      });
  }

  handleSubmit = event => {

      this.props.findCity(event)
      this.setState({searchCity: ''})
  }

  renderSearchCity = () => {

    const filteredCities = cities.cities.filter(city => {
      const cityName = city.name.toLowerCase()
      const inputCity = this.state.searchCity.toLowerCase()
      if(this.state.searchCity.length > 3) {
        return cityName.match(inputCity)
      } return null
    })
    if (filteredCities.length > 0 ) {
      return (
        <Card>
        <CardContent
          style={{
            padding: '0.5rem',
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            top: '60px',
            zIndex: '2',
            border: '1px solid black',
            backgroundColor: 'transparent',
            textAlign: 'center'
          }}
        >
          <ul className='citySuggest'>
            {filteredCities.map(city => {
              return (
                <li key={city.id}>
                  <Button onClick={() => this.handleSubmit(city)}>
                    <Typography variant="body1">
                      {city.name}, {city.country}
                    </Typography>
                  </Button>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
      )
    }
  }

  render() {

    return (
      <div className='inputForm'>
        <form>
          <TextField
            type="text"
            name="searchCity"
            placeholder=" Search city..."
            onChange={this.handleChange}
            value={this.state.searchCity}
            autoComplete="off"
          />
          {this.renderSearchCity()}
        </form>
      </div>
    ) 
  } 
}

export default InputForm
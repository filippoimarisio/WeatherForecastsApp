import React, { PureComponent } from 'react'
import cities from '../../constants/city.list.json'
import {
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Paper,
  Typography,
  TextField,
  CardActions
} from '@material-ui/core'

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
      console.log(event) 

        this.props.findCity(event)
        this.setState({searchCity: ''})
    }

    // handleSearchCity = city => {
    //   this.setState({searchCity: ''})
    // }

    renderSearchCity = () => {
      console.log(this.props,'line 49')

      const filteredCities = cities.cities.filter(city => {
        const cityName = city.name.toLowerCase()
        const regex = new RegExp(this.state.searchCity.toLowerCase())
        if(this.state.searchCity.length > 3) {
          return cityName.match(regex)
        }
        return null
      })
      if (filteredCities.length > 0 ) {
        return (
          <Card>
          <CardContent
            style={{
              padding: '0.5rem',
              maxWidth: '100%',
              // position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              top: '66px',
              zIndex: '2',
              border: '1px solid black',
              backgroundColor: 'transparent',
              textAlign: 'center'
            }}
            >
            <ul
              style={{ listStyleType: 'none', textAlign: 'left', padding: 0, maxHeight: 100 }}>
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
              <h3>Search City</h3>
              <form>
                  <TextField
                    type="text"
                    // style={{
                    //   padding: '1rem',
                    //   margin: '1rem',
                    //   minWidth: '250px',
                    //   fontSize: '1rem'
                    // }}
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

{/* <form onSubmit={this.handleSubmit}>
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
                </form> */}
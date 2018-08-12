import React, { PureComponent } from 'react'

class DisplayForecasts extends PureComponent {
    constructor () {
        super()

        this.state= {}
    }

    render() {
        if(!this.props.cityForecasts.list) {
            return ''
        }

        const cityForecasts = this.props.cityForecasts

        return (
            <div className='weatherForecasts'>
            <h3>Weather in {cityForecasts.city.name} for the next 5 days</h3>
                <ul>
                    {cityForecasts.list.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } 
}

export default DisplayForecasts

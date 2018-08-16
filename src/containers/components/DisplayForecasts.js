import React, { PureComponent } from 'react'
import {iconsLink} from '../../constants/icons'
import {
  CircularProgress,
  Paper,
  Typography,
} from '@material-ui/core'
import './DisplayForecasts.css'

class DisplayForecasts extends PureComponent {
    constructor () {
        super()

        this.state= {}
    }

    InCelsius = (degrees) => {
      console.log('in the the celsius', degrees)
      return  (degrees - 273.15).toFixed(0)
       
    }

    render() {
            
      if(!this.props.cityForecasts.list) {
        return (
          <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '70vh',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
              }}
              >
                <CircularProgress />{' '}
                <Typography>Checking current location...</Typography>
          </div>
        )
      }

        const cityForecasts = this.props.cityForecasts

        
        cityForecasts.list.map(period => {
          const splitDate = period.dt_txt.split(/ |-|:/)
          const day = splitDate[2]
          const month = splitDate[1]
          const time = splitDate[3]
          period.day = day
          period.month = month
          period.time = time
          period.weather[0].description = period.weather[0].description.charAt(0).toUpperCase()+ period.weather[0].description.slice(1)
          period.main.temp = this.InCelsius(period.main.temp)
          return period
        })

        var today = new Date();
        var ddd = today.getDate();
        var mmm = today.getMonth()+1;
        if(ddd<10) ddd = '0'+ddd
        if(mmm<10) mmm = '0'+mmm
        var dd = ddd.toString()
        var mm = mmm.toString()

      
        const dayZero = cityForecasts.list.filter(period => {
          return period.day === dd && period.month === mm
        })

        const dayOne = cityForecasts.list.filter(period => {
          return (Number(period.day) === (Number(dd)+1) && period.month === mm) || (Number(period.day) === '01' && period.month === (Number(mm)+1))
        })

        const dayTwo = cityForecasts.list.filter(period => {
          return (Number(period.day) === (Number(dayOne[0].day)+1) && period.month === mm) || (Number(period.day) === '01' && period.month === (Number(dayOne[0].month)+1))
        })

        const dayThree = cityForecasts.list.filter(period => {
          return (Number(period.day) === (Number(dayTwo[0].day)+1) && period.month === mm) || (Number(period.day) === '01' && period.month === (Number(dayTwo[0].month)+1))
        })

        const dayFour = cityForecasts.list.filter(period => {
          return (Number(period.day) === (Number(dayThree[0].day)+1) && period.month === mm) || (Number(period.day) === '01' && period.month === (Number(dayThree[0].month)+1))
        })

        const dayFive = cityForecasts.list.filter(period => {
          return (Number(period.day) === (Number(dayFour[0].day)+1) && period.month === mm) || (Number(period.day) === '01' && period.month === (Number(dayFour[0].month)+1))
        })
        console.log(cityForecasts.list, 'weather now')


        return (
            <div className='weatherForecastsWrapper'>
              <h1 className='city'>{cityForecasts.city.name}</h1>

                <div className='weatherNow'>
                  <img className='iconNow' alt='' src={`${iconsLink}${cityForecasts.list[0].weather[0].icon}.png`}/>
                  <div className='descriptionNow'>
                    {cityForecasts.list[0].weather[0].description}
                  </div>
                </div>

                <h4 className='laterToday'>Later Today</h4>

                
                <div className='dayZero' >
                  {dayZero.map(period => (
                    <div key={period.dt} className='periodWrapper'>
                      <div className='time'>
                        {`${period.time}:00`}
                      </div>
                      <div className='description'>
                        {period.main.temp}°C
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div>

                <h4 className='nextDays'>Next Days</h4>
                <div className='nextDaysItems'>
                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayZero[0].day}-${dayZero[0].month}`}
                    </div>
                    
                    <div className='description'>
                      {dayZero[0].main.temp}°C
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayZero[0].weather[0].icon}.png`}/>
                    </div>
                  </div>

                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayOne[5].day}-${dayOne[5].month}`}
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayOne[5].weather[0].icon}.png`}/>
                    </div>
                    <div className='description'>
                      {dayOne[5].main.temp}°C
                    </div>
                  </div>

                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayTwo[5].day}-${dayTwo[5].month}`}
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayTwo[5].weather[0].icon}.png`}/>
                    </div>
                    <div className='description'>
                      {dayTwo[5].main.temp}°C
                    </div>
                  </div>

                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayThree[5].day}-${dayThree[5].month}`}
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayThree[5].weather[0].icon}.png`}/>
                    </div>
                    <div className='description'>
                      {dayThree[5].main.temp}°C
                    </div>
                  </div>

                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayFour[5].day}-${dayFour[5].month}`}
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayFour[5].weather[0].icon}.png`}/>
                    </div>
                    <div className='description'>
                      {dayFour[5].main.temp}°C
                    </div>
                  </div>

                  {dayFive[5] ?  (
                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayFive[5].day}-${dayFive[5].month}`}
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayFive[5].weather[0].icon}.png`}/>
                    </div>
                    <div className='description'>
                      {dayFive[5].main.temp}°C
                    </div>
                  </div>
                  ):(
                  <div className='periodWrapper'>
                    <div className='time'>
                      {`${dayFive[dayFive.length -1].day}-${dayFive[dayFive.length -1].month}`}
                    </div>
                    <div>
                      <img className='icon' id='icona' alt='' src={`${iconsLink}${dayFive[dayFive.length -1].weather[0].icon}.png`}/>
                    </div>
                    <div className='description'>
                      {dayFive[dayFive.length -1].main.temp}
                    </div>
                  </div>
                  )}
                </div>
            </div>
        )
    } 
}

export default DisplayForecasts


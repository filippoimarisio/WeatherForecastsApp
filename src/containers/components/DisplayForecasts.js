import React, { PureComponent } from 'react'
import {iconsLink} from '../../constants/icons'
import './DisplayForecasts.css'

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

        
        cityForecasts.list.map(period => {
          const splitDate = period.dt_txt.split(/ |-|:/)
          const day = splitDate[2]
          const month = splitDate[1]
          const time = splitDate[3]
          period.day = day
          period.month = month
          period.time = time
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
                        {period.weather[0].description}
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div>
                <h4 className='nextDays'>Next Days</h4>

                <div className='dayOne'>
                  {dayOne.map(period => (
                    <div key={period.dt} className='periodWrapper'>
                      <div className='time'>
                        {`${period.time}:00`}
                      </div>
                      <div className='description'>
                        {period.weather[0].description}
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div>

                {/* <div className='dayTwo' className='dayWrapper'>
                  {dayTwo.map(period => (
                    <div key={period.dt} className='periodWrapper'>
                      <div className='time'>
                        {`${period.time}:00`}
                      </div>
                      <div className='description'>
                        {period.weather[0].description}
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div>

                <div className='dayThree' className='dayWrapper'>
                  {dayThree.map(period => (
                    <div key={period.dt} className='periodWrapper'>
                      <div className='time'>
                        {`${period.time}:00`}
                      </div>
                      <div className='description'>
                        {period.weather[0].description}
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div>
                <div className='dayFour' className='dayWrapper'>
                  {dayFour.map(period => (
                    <div key={period.dt} className='periodWrapper'>
                      <div className='time'>
                        {`${period.time}:00`}
                      </div>
                      <div className='description'>
                        {period.weather[0].description}
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div>
                <div className='dayFive' className='dayWrapper'>
                  {dayFive.map(period => (
                    <div key={period.dt} className='periodWrapper'>
                      <div className='time'>
                        {`${period.time}:00`}
                      </div>
                      <div className='description'>
                        {period.weather[0].description}
                      </div>
                      <img className='icon' alt='' src={`${iconsLink}${period.weather[0].icon}.png`}/>
                    </div>
                  ))}
                </div> */}


            </div>
        )
    } 
}

export default DisplayForecasts




// {dayZero[0] && (
//   <ul>
//       {dayZero.map(period => {
//           return (
//               <li key={period.dt}>
//                   {`${period.dt_txt} : ${period.weather[0].main}`}
//               </li>
//           )
//       })}
//   </ul>
//   )}
//   <ul>
//       {dayOne.map(period => {
//           return (
//               <li key={period.dt}>
//                   {`${period.dt_txt} : ${period.weather[0].main}`}
//               </li>
//           )
//       })}
//   </ul>
//   <ul>
//       {dayTwo.map(period => {
//           return (
//               <li key={period.dt}>
//                   {`${period.dt_txt} : ${period.weather[0].main}`}
//               </li>
//           )
//       })}
//   </ul>
//   <ul>
//       {dayThree.map(period => {
//           return (
//               <li key={period.dt}>
//                   {`${period.dt_txt} : ${period.weather[0].main}`}
//               </li>
//           )
//       })}
//   </ul>
//   <ul>
//       {dayFour.map(period => {
//           return (
//               <li key={period.dt}>
//                   {`${period.dt_txt} : ${period.weather[0].main}`}
//               </li>
//           )
//       })}
//   </ul>
//   {dayFive[0] && (
//   <ul>
//       {dayFive.map(period => {
//           return (
//               <li key={period.dt}>
//                   {`${period.dt_txt} : ${period.weather[0].main}`}
//               </li>
//           )
//       })}
//   </ul>
//   )}
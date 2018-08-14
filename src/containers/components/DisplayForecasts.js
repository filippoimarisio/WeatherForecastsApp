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

        
        cityForecasts.list.map(period => {
          const splitDate = period.dt_txt.split(/ |-|:/)
          const day = splitDate[2]
          const month = splitDate[1]
          const time = splitDate[3]
          period.day = day
          period.month = month
          period.time = time
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
          return (period.day == (Number(dd)+1) && period.month === mm) || (period.day == '01' && period.month === (Number(mm)+1))
        })

        const dayTwo = cityForecasts.list.filter(period => {
          return (period.day == (Number(dayOne[0].day)+1) && period.month === mm) || (period.day == '01' && period.month === (Number(dayOne[0].month)+1))
        })

        const dayThree = cityForecasts.list.filter(period => {
          return (period.day == (Number(dayTwo[0].day)+1) && period.month === mm) || (period.day == '01' && period.month === (Number(dayTwo[0].month)+1))
        })

        const dayFour = cityForecasts.list.filter(period => {
          return (period.day == (Number(dayThree[0].day)+1) && period.month === mm) || (period.day == '01' && period.month === (Number(dayThree[0].month)+1))
        })

        const dayFive = cityForecasts.list.filter(period => {
          return (period.day == (Number(dayFour[0].day)+1) && period.month === mm) || (period.day == '01' && period.month === (Number(dayFour[0].month)+1))
        })


        return (
            <div className='weatherForecasts'>
            <h3>Weather in {cityForecasts.city.name} for the next 5 days</h3>
                {dayZero[0] && (
                <ul>
                    {dayZero.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
                )}
                <ul>
                    {dayOne.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {dayTwo.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {dayThree.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {dayFour.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
                {dayFive[0] && (
                <ul>
                    {dayFive.map(period => {
                        return (
                            <li key={period.dt}>
                                {`${period.dt_txt} : ${period.weather[0].main}`}
                            </li>
                        )
                    })}
                </ul>
                )}
            </div>
        )
    } 
}

export default DisplayForecasts

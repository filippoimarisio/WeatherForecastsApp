
export const daysSplit = (cityForecasts) => {

  cityForecasts.list.map(period => {
    const splitDate = period.dt_txt.split(/ |-|:/)
    const day = splitDate[2]
    const month = splitDate[1]
    const time = splitDate[3]
    period.day = day
    period.month = month
    period.time = time
    period.weather[0].description = period.weather[0].description.charAt(0).toUpperCase()+ period.weather[0].description.slice(1)
    period.main.temp = (period.main.temp - 273.15).toFixed(0)
    return period
  })

  const dd = cityForecasts.list[0].day
  const mm = cityForecasts.list[0].month

  const dayZero = cityForecasts.list.filter(period => {
    return period.day === dd && period.month === mm
  })

  const dayOne = cityForecasts.list.filter(period => {
    if (period.day === '01') return period.day === '01'
    return Number(period.day) === (Number(dd)+1) && period.month === mm
  })

  const dayTwo = cityForecasts.list.filter(period => {
    if (period.day === '01') return period.day === '01'
    return Number(period.day) === (Number(dayOne[0].day)+1) && period.month === mm
  })

  const dayThree = cityForecasts.list.filter(period => {
    if (period.day === '01') return period.day === '01'
    return Number(period.day) === (Number(dayTwo[0].day)+1) && period.month === mm
  })

  const dayFour = cityForecasts.list.filter(period => {
    if (period.day === '01') return period.day === '01'
    return Number(period.day) === (Number(dayThree[0].day)+1) && period.month === mm
  })

  const dayFive = cityForecasts.list.filter(period => {
    if (period.day === '01') return period.day === '01'
    return Number(period.day) === (Number(dayFour[0].day)+1) && period.month === mm
  })

  const days = {
    'dayZero': dayZero,
    'dayOne': dayOne,
    'dayTwo': dayTwo,
    'dayThree': dayThree,
    'dayFour': dayFour,
    'dayFive': dayFive,
  }
  return days
}
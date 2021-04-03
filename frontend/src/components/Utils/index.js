
// date formatting function
export const dateFormat = (dateString) => {
    const date = new Date(dateString)
    const day = date.toDateString();
    const weekday = day.split(" ")[0]
    const month = day.split(" ")[1]
    const dateNum = day.split(" ")[2]

    const time = date.toLocaleTimeString()
    const hour = time.split(':')[0]
    const amPm = time.split(' ')[1]
    return `${weekday}, ${month} ${dateNum} @ ${hour}:00 ${amPm}`
  }

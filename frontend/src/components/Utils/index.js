
// date formatting function
export const dateFormat = (dateString) => {
    const dateObj = new Date(dateString)
    const day = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString()
    return `${day}, ${time}`
  }

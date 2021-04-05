function timeConversion(s) {
  let res = "";
  const timeStamps = {
    AM: {
      "12": "00"
    },
    PM: {
      "01": 13,
      "02": 14,
      "03": 15,
      "04": 16,
      "05": 17,
      "06": 18,
      "07": 19,
      "08": 20,
      "09": 21,
      "10": 22,
      "11": 23,
      "12": 12
    }
  }
  const timeOfTheDay = s.slice(-2);
  const currentHour = s.slice(0, 2);
  if (timeOfTheDay === "AM") {
    if (timeStamps[timeOfTheDay][currentHour]) {
      res += timeStamps[timeOfTheDay][currentHour] + s.slice(2, -2)
    } else {
      res += s.slice(0, -2)
    }
  }
  if (timeOfTheDay === "PM") {
    if (timeStamps[timeOfTheDay][currentHour]) {
      res += timeStamps[timeOfTheDay][currentHour] + s.slice(2, -2)
    }
  }
  console.log(res)
}

timeConversion("12:45:54PM")
let BASE_URL = ""
const TIME_OUT = 10000

if (import.meta.env.DEV) {
  BASE_URL = "http://codercba.com:1888/airbnb/api"
} else {
  BASE_URL = "http://codercba.com:1888/airbnb/api"
}

export { BASE_URL, TIME_OUT }

const request = require('request')


const forcast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/f397367847f508625dea34fea7a68eac/${lat},${lng}`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('No Enternet Connection!', undefined)
        }else if (body.error) {
            callback('The location is not found!, Try another location!!', undefined)
        }else {
            callback(undefined, 
                `${body.daily.summary} And the overall forcast is ${body.daily.icon} .Moreover, the current temperature is ${body.currently.temperature}.There is a ${body.currently.precipIntensity}% chanse of rain.`
            )
        }
    })
}


module.exports = forcast
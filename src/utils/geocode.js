const request = require('request')

const geocode = (response, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/ ${encodeURIComponent(response)}.json?access_token=pk.eyJ1IjoiaHVzczI0OTQwIiwiYSI6ImNqeGFscDF5aDAydHUzenBuemFha3B4czgifQ.JKkHaOofpOz9B3NaT7b1HQ&limit=1`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('No Enternet Connection!', undefined)
        }else if (body.features.length === 0) {
            callback('The location is not found!, Try another location!!', undefined)
        }else {
            callback(undefined, {
                longtitud: body.features[0].center[1],
                latidued: body.features[0].center[0],
                location: body.features[0].place_name,

            })
        }
    })

}

module.exports = geocode
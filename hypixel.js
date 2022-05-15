require("dotenv").config()
const fetch = require('node-fetch');

let MY_API_KEY = process.env.API_KEY;

const playerName = "cramctq"
const playerUUID = "7aaf4557-1b5d-4e07-bdca-4e7ff2429872"


fetch (`https://api.hypixel.net/player?key=${MY_API_KEY}&name=${playerName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.player.achievements.pit_prestiges)
        console.log(data.player.socialMedia.links.DISCORD)
        // console.log(data)
    })
    .catch(error => console.log("Network Error", error))
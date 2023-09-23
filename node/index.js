const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const knex = require("knex");
const mqtt = require("mqtt");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pg = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    supportBigNumber: true,
    timezone: "+7:00",
    dateStrings: true,
    charset: "utf8mb4_unicode_ci",
  },
});

const client = mqtt.connect({
  host: process.env.MQTT_SERVER,
  port: process.env.MQTT_PORT,
  username: process.env.MQTT_USER,
  password: process.env.MQTT_PASSWORD,
});

client.on("connect", function () {
  console.log("MQTT Connect");
  client.subscribe("PKS/thermometer");
});

// Receive Message and print on terminal
client.on("message", function (topic, message) {
  const msg = message.toString();
  console.log("message", msg);
  switch (topic) {
    case "PKS/thermometer": {
      let [humi, temp] = msg.split(",");
      humi = (+humi).toFixed(2);
      temp = (+temp).toFixed(2);
      pg("thermometer")
        .insert({
          temperature: temp,
          humidity: humi,
        })
        .then((id) => {
          console.log("insert thermometer: ", {
            temperature: temp,
            humidity: humi,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    }
  }
});

app.listen(3009, () => {
  console.log(`Example app listening on port ${3009}`);
});

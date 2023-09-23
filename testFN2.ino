#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

#define MINUTE 60000

#define wifi_ssid "MikroTik 2.4G"
#define wifi_password ""

#define mqtt_server "broker.emqx.io"
#define mqtt_user ""
#define mqtt_password ""

#define DHTTYPE DHT22
#define DHTPIN 5

WiFiClient espClient;
PubSubClient client(espClient);
DHT dht(DHTPIN, DHTTYPE, 11);  // 11 works fine for ESP8266

void setup() {
  Serial.begin(115200);
  dht.begin();
  setup_wifi();
  client.setServer(mqtt_server, 1883);
}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifi_ssid);

  WiFi.begin(wifi_ssid, wifi_password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    // If you do not want to use a username and password, change next line to
    // if (client.connect("ESP8266Client")) {
    char text[32];
    uint8_t mac[6];
    WiFi.macAddress(mac);
    sprintf(text, "id-%02X%02X%02X", mac[3], mac[4], mac[5]);
    if (client.connect(text, mqtt_user, mqtt_password)) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void dhtTask() {
  static unsigned long sensorTempTime = millis();
  const unsigned int sensorTempInterval = MINUTE;
  unsigned long currentTime = millis();
  if (currentTime - sensorTempTime < sensorTempInterval) {
    return;
  }
  sensorTempTime = millis();

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  Serial.print(">> Humidity: ");
  Serial.print(h);
  Serial.print("%  Temperature: ");
  Serial.print(t);
  Serial.println(" °C");
  client.publish("PKS/thermometer", (String(h) + "," + String(t)).c_str());
  // client.publish("joseph/DHT", (String(h) + "," + String(t)).c_str());
}

void dhtRealtimeTask() {
  static unsigned long sensorTempTime = millis();
  const unsigned int sensorTempInterval = 3000;
  unsigned long currentTime = millis();
  if (currentTime - sensorTempTime < sensorTempInterval) {
    return;
  }
  sensorTempTime = millis();

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  // Serial.print("Humidity: ");
  // Serial.print(h);
  // Serial.print("%  Temperature: ");
  // Serial.print(t);
  // Serial.println(" °C");
  client.publish("PKS/thermometer/realtime", (String(h) + "," + String(t)).c_str());
  // client.publish("joseph/DHT", (String(h) + "," + String(t)).c_str());
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  dhtTask();
  dhtRealtimeTask();
}

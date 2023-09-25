<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-4">
      <div class="surface-card shadow-2 p-3 border-round">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-600 font-medium mb-3">อุณหภูมิ</span>
            <div class="text-900 font-medium text-xl">
              {{ temperatureFixed }} &#8451;
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
            <!-- <i class="pi pi-shopping-cart text-blue-500 text-xl"></i> -->
            <Icon name="material-symbols:thermometer-outline" class="text-blue-500 text-3xl"></Icon>
          </div>
        </div>
        <!-- <span class="text-green-500 font-medium">24 new </span> -->
        <span class="text-600">{{ temperatureLevel }}</span>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="surface-card shadow-2 p-3 border-round">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-600 font-medium mb-3">ความชื้นสัมพัทธ์</span>
            <div class="text-900 font-medium text-xl">
              {{ humidityFixed }} %RH
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
            <!-- <i class="pi pi-map-marker text-orange-500 text-xl"></i> -->
            <Icon name="material-symbols:humidity-helper-outline" class="text-orange-500 text-3xl"></Icon>
          </div>
        </div>
        <!-- <span class="text-green-500 font-medium">%52+ </span> -->
        <span class="text-600">{{ humidityLevel }}</span>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="surface-card shadow-2 p-3 border-round">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-600 font-medium mb-3">รู้สึกเหมือน</span>
            <div class="text-900 font-medium text-xl">
              {{ heatIndexFixed }} &#8451;
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
            <!-- <i class="pi pi-inbox text-cyan-500 text-xl"></i> -->
            <Icon name="carbon:temperature-feels-like" class="text-cyan-500 text-3xl"></Icon>
          </div>
        </div>
        <!-- <span class="text-green-500 font-medium">520  </span> -->
        <span class="text-600">{{ heatIndexLevel || '-' }}</span>
      </div>
    </div>
  </div>
  <ChartTempHumiTime />
</template>

<script>
// import * as mqtt from 'mqtt'
import * as mqtt from 'mqtt/dist/mqtt.min'
// definePageMeta({
//   layout: 'app',
// })

export default {
  data() {
    return {
      temperature: null,
      temperatureLevel: '',
      humidity: null,
      humidityLevel: '',
      heatIndex: null,
      heatIndexLevel: '',
    }
  },
  computed: {
    temperatureFixed() {
      return (+this.temperature).toFixed(2)
    },
    humidityFixed() {
      return (+this.humidity).toFixed(2)
    },
    heatIndexFixed() {
      return (+this.heatIndex).toFixed(2)
    },
  },
  created() {
    console.log('mqtt created')
    const publicConfig = useRuntimeConfig().public
    this.client = mqtt.connect(publicConfig.mqttUri)
    this.client.on('connect', () => {
      console.log('mqtt connected')
      this.client.subscribe('PKS/thermometer/realtime')
    })
    this.client.on('message', (topic, message) => {
      const msg = message.toString()
      switch (topic) {
        case 'PKS/thermometer/realtime': {
          let [humidity, temperature] = msg.split(',')
          this.temperature = +temperature
          this.humidity = +humidity
          this.temperatureLevel = temperatureLevel(+temperature)
          this.humidityLevel = humidityLevel(+humidity)
          this.heatIndex = heatIndex(+temperature, +humidity)
          this.heatIndexLevel = heatIndexLevel(this.heatIndex)
          break
        }
      }
    })
  },
}

</script>

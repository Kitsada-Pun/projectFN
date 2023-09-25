<template>
  <Card>
    <template #content>
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </template>
  </Card>
</template>

<script>

export default {
  data() {
    return {
      chartData: null,
      chartOptions: null,
    }
  },
  async  mounted() {
    this.chartData = await this.setChartData()
    this.chartOptions = this.setChartOptions()
    // console.log(this.chartData)
  },
  methods: {
    async setChartData() {
      let res = await this.$api.get('/thermometer/time')
      let data = res.data
      console.log(data)
      // Extracting labels and data for the chart
      let labels = data.map(function (item) {
        let dateTime = new Date(item.rounded_time)
        let monthName = dateTime.toLocaleString('th-th', { month: 'short' })
        let TimeString = dateTime.getDate() + ' ' + monthName + ' ' + dateTime.getHours() + ':' + dateTime.getMinutes()
        // getFullYear()
        // Get the year (4 digits)
        // getMonth()
        // Get the month, from 0 to 11.
        // getDate()
        // Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
        // getHours(), getMinutes(), getSeconds(), getMilliseconds()
        // Get the corresponding time components.
        console.log(dateTime.getHours())
        return TimeString
      })

      let temperatureData = data.map(function (item) {
        return (+item.avg_temperature).toFixed(2)
      })

      let humidityData = data.map(function (item) {
        return (+item.avg_humidity).toFixed(2)
      })
      // const documentStyle = getComputedStyle(document.documentElement)

      return {
        labels,
        datasets: [
          {
            label: 'Temperature',
            data: temperatureData,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            yAxisID: 'temperature',
          },
          {
            label: 'Humidity',
            data: humidityData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            yAxisID: 'humidity',
          },
        ],
      }
    },
    setChartOptions() {
      // const documentStyle = getComputedStyle(document.documentElement)
      // const textColor = documentStyle.getPropertyValue('--text-color')
      // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
      // const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        // plugins: {
        //   legend: {
        //     labels: {
        //       color: textColor,
        //     },
        //   },
        // },
        scales: {
          temperature:
            {
              id: 'temperature',
              type: 'linear',
              position: 'left',
              display: true,
              title: {
                display: true,
                text: 'Temperature (°C)',
              },
            },
          humidity: {
            id: 'humidity',
            type: 'linear',
            position: 'right',
            display: true,
            title: {
              display: true,
              text: 'Humidity (%)',
            },
          },

        },
      }
    },
  },
}
</script>

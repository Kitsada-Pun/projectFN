<template>
  <Card>
    <template #title>
      อุณหภูมิและความชื้นในแต่ละวัน
    </template>
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
    console.dir(this.chartData)
    console.dir(this.chartOptions)
  },
  methods: {
    async setChartData() {
      let res = await this.$api.get('/thermometer/day')
      let data = res.data
      // console.log(data)

      const getDateFormat = (dateString) => {
        let dateTime = new Date(dateString)
        let monthName = dateTime.toLocaleString('th-th', { month: 'short' })
        let TimeString = dateTime.getDate() + ' ' + monthName + ' ' + dateTime.getYear()
        // getFullYear()
        // Get the year (4 digits)
        // getMonth()
        // Get the month, from 0 to 11.
        // getDate()
        // Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
        // getHours(), getMinutes(), getSeconds(), getMilliseconds()
        // Get the corresponding time components.
        console.log(TimeString)
        return TimeString
      }

      let dataFormat = data.map((item) => {
        console.log(item)
        return {
          date: getDateFormat(item.rounded_day),
          avg_temperature: (+item.avg_temperature).toFixed(2),
          avg_humidity: (+item.avg_humidity).toFixed(2),
          max_temperature: (+item.max_temperature).toFixed(2),
          min_temperature: (+item.min_temperature).toFixed(2),
          max_humidity: (+item.max_humidity).toFixed(2),
          min_humidity: (+item.min_humidity).toFixed(2),
        }
      })

      // Extracting labels and data for the chart
      let labels = data.map((item) => {
        return getDateFormat(item.rounded_day)
      })

      return {
        labels,
        datasets: [
          {
            label: 'ค่าเฉลี่ยอุณหภูมิ',
            data: dataFormat,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            yAxisID: 'temperature',
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'avg_temperature',
            },
          },
          {
            label: 'ค่าเฉลี่ยความชื้น',
            data: dataFormat,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            yAxisID: 'humidity',
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'avg_humidity',
            },
          },
          {
            label: 'ความชื้นสูงสุด',
            data: dataFormat,
            borderColor: 'rgba(75, 192, 126, 1)',
            borderWidth: 2,
            yAxisID: 'humidity',
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'max_humidity',
            },
          },
          {
            label: 'ความชื้นต่ําสุด',
            data: dataFormat,
            borderColor: 'rgba(192, 184, 75, 1)',
            borderWidth: 2,
            yAxisID: 'humidity',
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'min_humidity',
            },
          },
          {
            label: 'อุณหภูมิสูงสุด',
            data: dataFormat,
            borderColor: 'rgba(75, 81, 192, 1)',
            borderWidth: 2,
            yAxisID: 'temperature',
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'max_temperature',
            },
          },
          {
            label: 'อุณหภูมิต่ําสุด',
            data: dataFormat,
            borderColor: 'rgba(163, 75, 192, 1)',
            borderWidth: 2,
            yAxisID: 'temperature',
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'min_temperature',
            },
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
          temperature: {
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

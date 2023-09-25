// ระดับความชื้นในอากาศที่เหมาะสม
// <40% Too Dry (แห้งเกินไป)
// 40% - 60% Optimal (เหมาะสม)
// >60% Too Humid (ชื้นเกินไป)
export const humidityLevel = (humidity) => {
  if (humidity < 40) {
    return 'แห้งเกินไป(Too Dry)'
  } else if (humidity >= 40 && humidity <= 60) {
    return 'เหมาะสม(Optimal)'
  } else {
    return 'ชื้นเกินไป(Too Humid)'
  }
}
// เกณฑ์อากาศร้อน ใช้อุณหภูมิสูงสุดประจำวันและใช้เฉพาะในฤดูร้อน
// 1. อากาศร้อน(Hot) อุณหภูมิตั้งแต่ 35.0 – 39.9 องศาเซลเซียส
// 2. อากาศร้อนจัด(Very Hot) อุณหภูมิตั้งแต่ 40.0 องศาเซลเซียสขึ้นไป

// เกณฑ์อากาศหนาว ใช้อุณหภูมิต่ำสุดประจำวันและใช้เฉพาะในฤดูหนาว
// 1. อากาศเย็น(Cool) อุณหภูมิตั้งแต่ 16.0 – 22.9 องศาเซลเซียส
// 2. อากาศหนาว(Cold) อุณหภูมิตั้งแต่ 8.0 – 15.9 องศาเซลเซียส
// 3. อากาศหนาวจัด(Very Cold) อุณหภูมิตั้งแต่ 7.9 องศาเซลเซียสลงไป
export const temperatureLevel = (temperature) => {
  if (temperature >= 40) {
    return 'อากาศร้อนจัด(Very Hot)'
  } else if (temperature >= 35) {
    return 'อากาศร้อน(Heat)'
  } else if (temperature >= 23) {
    return 'อุณหภูมิปกติ(Normal)'
  } else if (temperature >= 16) {
    return 'อากาศเย็น(Cool)'
  } else if (temperature >= 8) {
    return 'อากาศหนาว(Cold)'
  } else {
    return 'อากาศหนาวจัด(Very Cold)'
  }
}

export const fahrenheitToCelsius = fahrenheit => (+fahrenheit - 32) * 5 / 9
export const celsiusToFahrenheit = celsius => (+celsius * 9) / 5 + 32
export const heatIndex = (celsius, humidity) => {
  const T = celsiusToFahrenheit(celsius)
  const R = humidity / 100
  const c1 = -42.379
  const c2 = 2.04901523
  const c3 = 10.14333127
  const c4 = -0.22475541
  const c5 = -6.83783 * 10 ** -3
  const c6 = -5.481717 * 10 ** -2
  const c7 = 1.22874 * 10 ** -3
  const c8 = 8.5282 * 10 ** -4
  const c9 = -1.99 * 10 ** -6
  const HI = c1 + c2 * T + c3 * R + c4 * R * T + c5 * T ** 2 + c6 * R ** 2 + c7 * T ** 2 * R + c8 * T * R ** 2 + c9 * T ** 2 * R ** 2
  return fahrenheitToCelsius(HI).toFixed(2)
}

export const heatIndexLevel = (HI) => {
  if (HI > 54) {
    return 'อันตรายสุดขีด'
  } else if (HI > 41) {
    return 'อันตราย'
  } else if (HI > 32) {
    return 'ควรระวังอย่างยิ่ง'
  } else if (HI >= 27) {
    return 'ควรระวัง'
  }
  return '-'
}

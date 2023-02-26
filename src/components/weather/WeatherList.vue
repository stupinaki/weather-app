<template>
  <div v-if="!weatherData.length" class="nothing-found">
    <h2>You have not added any cities yet..</h2>
    <p>You can add new cities by clicking on the gear</p>
  </div>

  <div v-else class="wrapper">
    <WeatherBlock
      v-for="weather in weatherData"
      :key="weather.id"
      :city-name="weather.city"
      :country-code="weather.sys.country"
      :temperature-main="weather.main.temp"
      :temperature-feel="weather.main.feels_like"
      :sky="weather.weather[0].main"
      :humidity="weather.main.humidity"
      :pressure="weather.main.pressure"
      :icon-code="weather.weather[0].icon"
      :visibility="weather.visibility"
      :wind-speed="weather.wind.speed"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeatherBlock from "@/components/weather/WeatherBlock.vue";

export default defineComponent({
  name: "WeatherList",
  components: {
    WeatherBlock,
  },
  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.nothing-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

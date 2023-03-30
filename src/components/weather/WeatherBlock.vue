<template>
  <div class="wrapper">
    <div class="full-name">
      <b> {{ fullName }} </b>
    </div>

    <div class="img-temperature">
      <div class="img-container">
        <img class="img" :src="iconURL" alt="weather icon" />
      </div>
      <div class="temperature">{{ mainTemperature }}</div>
    </div>

    <div class="feels-details"><b> Feels like: </b> {{ feelTemperature }}.</div>

    <div class="main-details">
      <div><b> Sky: </b> {{ sky }}</div>
      <div><b> Pressure: </b> {{ pressure }} hPa</div>
      <div><b> Humidity: </b> {{ humidity }}%</div>
      <div><b> Visibility: </b> {{ visibilityKM }}</div>
      <div><b> Wind speed:</b> {{ windSpeed }} meter/sec</div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchIcon } from "@/api/fetchIcon";
import { defineComponent } from "vue";
import { getCelsiusDegreeFromKelvin } from "@/helpers/getCelsiusDegreeFromKelvin";

export default defineComponent({
  name: "WeatherBlock",
  props: {
    cityName: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    temperatureMain: {
      type: Number,
      required: true,
    },
    temperatureFeel: {
      type: Number,
      required: true,
    },
    iconCode: {
      type: String,
      required: true,
    },
    sky: {
      type: String,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    pressure: {
      type: Number,
      required: true,
    },
    visibility: {
      type: Number,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
  },
  computed: {
    fullName(): string {
      const { cityName, countryCode } = this.$props;
      return cityName + ", " + countryCode;
    },
    mainTemperature(): string {
      return getCelsiusDegreeFromKelvin(this.$props.temperatureMain);
    },
    feelTemperature(): string {
      return getCelsiusDegreeFromKelvin(this.$props.temperatureFeel);
    },
    iconURL(): string {
      return fetchIcon(this.$props.iconCode);
    },
    visibilityKM(): string {
      return this.$props.visibility / 1000 + "km";
    },
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: palegreen;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
}
.full-name {
  font-size: 20px;
}
.img-temperature {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: start;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  height: 80px;
}
.temperature {
  font-size: 32px;
  font-weight: bold;
}
.main-details {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .img-temperature {
    justify-content: center;
  }
}
</style>

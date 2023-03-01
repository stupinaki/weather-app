<template>
  <div>
    <div class="btn-wrapper">
      <button @click="toggle" class="btn">{{ btnSymbol }}</button>
    </div>
    <SettingBlock
      v-if="isSettingBlockOpen"
      :cities="favoriteCities"
      :error-message="errorMessage"
      @add-new-city="onAddNewCity"
      @delete-city="onDeleteCity"
      @replace-city="onReplaceCity"
    />
    <div v-else>
      <div v-if="isLoading" class="loader">
        <h2>Wait a minute. We are getting data...</h2>
      </div>
      <WeatherList v-else :weather-data="weatherData" />
    </div>
  </div>
</template>

<script lang="ts">
import { errorTypes } from "./constants/errorTypes";
import { localStorageConst } from "./constants/localStorage";
import { defineComponent } from "vue";
import { isCityPresent } from "./helpers/isCityPresent";
import { getGeolocation } from "./helpers/getGeolocation";
import { getWeatherData } from "./helpers/getWeatherData";
import { fetchCityByName } from "./api/fetchCityByName";
import { fetchCityByCoordinates } from "./api/fetchCityByCoordinates";
import {
  getDataFromLocalStorage,
  addDataToLocalStorage,
} from "./helpers/localStorage";
import { TCity } from "@/types/TCity";
import { TWeather } from "@/types/TWeather";
import WeatherList from "@/components/weather/WeatherList.vue";
import SettingBlock from "@/components/settings/SettingBlock.vue";
import { MoveEvent } from "vuedraggable";

interface IAppData {
  weatherData: TWeather[];
  favoriteCities: TCity[];
  errorMessage: string;
  isLoading: boolean;
  isSettingBlockOpen: boolean;
}

export default defineComponent({
  name: "App",
  components: {
    SettingBlock,
    WeatherList,
  },
  data(): IAppData {
    return {
      weatherData: [],
      favoriteCities: [],
      errorMessage: "",
      isLoading: false,
      isSettingBlockOpen: false,
    };
  },
  beforeMount() {
    this.getAllData();
  },
  watch: {
    async "favoriteCities.length"() {
      addDataToLocalStorage(
        localStorageConst.CITIES,
        this.$data.favoriteCities
      );
      await this.getWeatherData();
    },
  },
  computed: {
    btnSymbol(): string {
      return this.$data.isSettingBlockOpen ? "×" : "⚙";
    },
  },
  methods: {
    toggle(): void {
      this.$data.isSettingBlockOpen = !this.$data.isSettingBlockOpen;
    },
    onDeleteCity(cityName: string): void {
      const { favoriteCities } = this.$data;
      this.$data.favoriteCities = favoriteCities.filter(
        (city) => city.city !== cityName
      );
    },
    onReplaceCity(): void {
      addDataToLocalStorage(
        localStorageConst.CITIES,
        this.$data.favoriteCities
      );
    },
    async onAddNewCity(cityName: string) {
      const { data: cityData } = await fetchCityByName(cityName);
      const firstCity = cityData ? cityData[0] : null;

      if (!firstCity) {
        this.$data.errorMessage = errorTypes.CITY_NOT_FOUND;
        return;
      }
      const isCityExist = isCityPresent(this.$data.favoriteCities, firstCity);
      if (isCityExist) {
        this.$data.errorMessage = errorTypes.CITY_ALREADY_EXIST;
        return;
      }
      this.$data.errorMessage = "";
      this.$data.favoriteCities.push(firstCity);
    },
    async initFavoritesCities() {
      this.$data.isLoading = true;
      this.$data.favoriteCities = getDataFromLocalStorage(
        localStorageConst.CITIES
      );

      if (!this.$data.favoriteCities.length) {
        const coordinates = await getGeolocation();
        if (!coordinates) {
          return;
        }
        const { data: cities } = await fetchCityByCoordinates(coordinates);
        const first = cities ? cities[0] : null;
        if (!first) {
          return;
        }
        this.$data.favoriteCities.push(first);
      }
      this.$data.isLoading = false;
    },
    async getWeatherData() {
      this.$data.isLoading = true;
      this.$data.weatherData = await getWeatherData(this.$data.favoriteCities);
      this.$data.isLoading = false;
    },
    async getAllData() {
      await this.initFavoritesCities();
      await this.getWeatherData();
    },
  },
});
</script>

<style scoped>
.btn-wrapper {
  display: flex;
  justify-content: end;
}
.btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 40px;
  font-weight: bold;
}
.btn:hover {
  transform: scale(1.1);
}
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div>
    <div class="btn-wrapper">
      <button @click="toggle" class="btn">{{ btnSymbol }}</button>
    </div>
    <SettingBlock
      v-if="isSettingBlockOpen"
      :cities="favoriteCities"
      :error-message="errorMessage"
      :cities-options="citiesOptions"
      @delete-city="onDeleteCity"
      @replace-city="onReplaceCity"
      @add-first-city="addFirstCity"
      @find-new-cities="getNewCitiesOption"
      @add-city-and-country="addNewCityWithCountry"
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
import { isCityPresent } from "./helpers/isCityPresent";
import { getGeolocation } from "./helpers/getGeolocation";
import { getWeatherData } from "./helpers/getWeatherData";
import { fetchCityByName } from "./api/fetchCityByName";
import { defineComponent } from "vue";
import { removeDuplicates } from "@/helpers/removeDuplicates";
import { fetchCityByCoordinates } from "./api/fetchCityByCoordinates";
import {
  getDataFromLocalStorage,
  addDataToLocalStorage,
} from "./helpers/localStorage";
import { TCity } from "@/types/TCity";
import { TWeather } from "@/types/TWeather";
import WeatherList from "@/components/weather/WeatherList.vue";
import SettingBlock from "@/components/settings/SettingBlock.vue";
import { replaceWeatherData } from "@/helpers/replaceWeatherData";

interface IAppData {
  weatherData: TWeather[];
  favoriteCities: TCity[];
  citiesOptions: TCity[];
  errorMessage: string;
  isLoading: boolean;
  isSettingBlockOpen: boolean;
}

export default defineComponent({
  name: "App",
  components: {
    WeatherList,
    SettingBlock,
  },
  data(): IAppData {
    return {
      isLoading: false,
      weatherData: [],
      errorMessage: "",
      citiesOptions: [],
      favoriteCities: [],
      isSettingBlockOpen: false,
    };
  },
  async beforeMount() {
    await this.initFavoritesCities();
    await this.getWeatherData();
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
    addFirstCity(): void {
      const { citiesOptions } = this.$data;

      if (!citiesOptions.length) {
        this.$data.errorMessage = errorTypes.CITY_NOT_FOUND;
        return;
      }
      const firstCity = citiesOptions[0];
      const isCityExist = isCityPresent(this.$data.favoriteCities, firstCity);

      if (isCityExist) {
        this.$data.errorMessage = errorTypes.CITY_ALREADY_EXIST;
        return;
      }
      this.$data.favoriteCities.push(firstCity);
      this.$data.citiesOptions = [];
    },
    onDeleteCity(cityId: string): void {
      const { favoriteCities } = this.$data;
      this.$data.favoriteCities = favoriteCities.filter(
        (city) => city.id !== cityId
      );
    },
    onReplaceCity(): void {
      const { weatherData, favoriteCities } = this.$data;
      addDataToLocalStorage(localStorageConst.CITIES, favoriteCities);
      this.$data.weatherData = replaceWeatherData(weatherData, favoriteCities);
    },
    addNewCityWithCountry(cityId: string): void {
      const { citiesOptions } = this.$data;
      const filteredCities = citiesOptions.filter(
        (option) => option.id === cityId
      );
      const targetCity = filteredCities[0];
      const isCityExist = isCityPresent(this.$data.favoriteCities, targetCity);

      if (isCityExist) {
        this.$data.errorMessage = errorTypes.CITY_ALREADY_EXIST;
        return;
      }
      this.$data.favoriteCities.push(targetCity);
      this.$data.citiesOptions = [];
    },
    async getNewCitiesOption(cityName: string) {
      this.$data.isLoading = true;
      const { data: cityData } = await fetchCityByName(cityName);

      if (cityData === null) {
        this.$data.errorMessage = errorTypes.CITY_NOT_FOUND;
        this.$data.citiesOptions = [];
        this.$data.isLoading = false;
        return;
      }
      this.$data.citiesOptions = removeDuplicates(cityData);
      this.$data.errorMessage = "";
      this.$data.isLoading = false;
    },
    async initFavoritesCities() {
      this.$data.isLoading = true;
      this.$data.favoriteCities = getDataFromLocalStorage(
        localStorageConst.CITIES
      );
      if (this.$data.favoriteCities.length > 0) {
        this.$data.isLoading = false;
        return;
      }
      const coordinates = await getGeolocation();
      if (!coordinates) {
        this.$data.isLoading = false;
        return;
      }
      const { data: cities } = await fetchCityByCoordinates(coordinates);
      const first = cities ? cities[0] : null;
      if (!first) {
        this.$data.isLoading = false;
        return;
      }
      this.$data.favoriteCities.push(first);
    },
    async getWeatherData() {
      this.$data.isLoading = true;
      this.$data.weatherData = await getWeatherData(this.$data.favoriteCities);
      this.$data.isLoading = false;
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

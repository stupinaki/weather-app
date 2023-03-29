<template>
  <div class="settings">
    <form @submit.prevent="addFirstCity">
      <label for="addCity">
        <b> {{ labelText }} </b>
      </label>
      <div class="input-btn-wrapper">
        <input
          id="addCity"
          type="text"
          :class="inputStyle"
          v-model="newCityName"
          @input="findNewCities"
          @focus="onFocus"
          @blur="isFocus = false"
        />
        <button type="submit" class="submit-btn">Submit</button>

        <div v-if="citiesOptions.length > 0">
          <h3>Perhaps you are looking for:</h3>
          <div class="options">
            <button
              v-for="city in citiesOptions"
              :key="city.id"
              class="option"
              type="submit"
              @click="addCityAndCountry(city.id)"
            >
              {{ city.id }}
            </button>
          </div>
        </div>
      </div>
    </form>

    <draggable
      :list="cities"
      :disabled="!enabled"
      item-key="city"
      ghost-class="ghost"
      class="plate-container"
      @start="dragging = true"
      @end="onEndDrag"
    >
      <template #item="{ element }">
        <CityPlate :city-id="element.id" @delete-city="onDeleteCity" />
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
import CityPlate from "@/components/settings/CityPlate.vue";
import { IOnFocus } from "@/types/IApi";

interface IData {
  isFocus: boolean;
  enabled: boolean;
  dragging: boolean;
  newCityName: string;
}

export default defineComponent({
  name: "SettingBlock",
  emits: [
    "deleteCity",
    "replaceCity",
    "addFirstCity",
    "findNewCities",
    "addCityAndCountry",
  ],
  components: {
    CityPlate,
    draggable,
  },
  props: {
    cities: {
      type: Array,
      required: true,
    },
    errorMessage: {
      type: String,
      required: false,
      default: "",
    },
    citiesOptions: {
      type: Array,
      required: true,
    },
  },
  data(): IData {
    return {
      enabled: true,
      dragging: false,
      isFocus: false,
      newCityName: "",
    };
  },
  methods: {
    findNewCities(): void {
      if (this.$data.newCityName) {
        this.$emit("findNewCities", this.$data.newCityName);
      }
    },
    addCityAndCountry(id: string): void {
      this.$emit("addCityAndCountry", id);
      this.$data.newCityName = "";
    },
    addFirstCity(): void {
      if (this.$data.newCityName) {
        this.$emit("addFirstCity", this.$data.newCityName);
        this.$data.newCityName = "";
      }
    },
    onDeleteCity(cityId: string): void {
      this.$emit("deleteCity", cityId);
    },
    onEndDrag(): void {
      this.$data.dragging = false;
      this.$emit("replaceCity");
    },
    onFocus(e: IOnFocus<HTMLInputElement>): void {
      e.target?.select();
      this.$data.isFocus = true;
    },
  },
  computed: {
    inputStyle(): string {
      return this.$props.errorMessage ? "input-error input" : "input";
    },
    labelText(): string {
      if (this.$data.isFocus) {
        return "Add city:";
      }
      return "Add city: " + this.$props.errorMessage;
    },
  },
});
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.plate-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.input-btn-wrapper {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 8px;
  margin: 12px 0;
}
@media screen and (max-width: 600px) {
  .input-btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
.input {
  font-size: 16px;
  padding: 16px 16px 16px 20px;
  border-radius: 16px;
  border: 1px solid #bcbcbc;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
}
.input-error {
  border: 1px solid #b41717;
}
.submit-btn {
  font-size: 16px;
  padding: 16px;
  border: none;
  border-radius: 16px;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
}
.submit-btn:hover {
  cursor: pointer;
  background-color: palegreen;
}
.ghost {
  background-color: palegreen;
}
.options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.option {
  padding: 12px;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
  border-radius: 16px;
  background-color: palegreen;
  cursor: pointer;
  border: none;
}
.option:hover {
  background-color: transparent;
}
</style>

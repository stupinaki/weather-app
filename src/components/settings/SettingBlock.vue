<template>
  <div class="settings">
    <pre>citiesOptions: {{ citiesOptions }}</pre>
    <form @submit.prevent="addNewCity">
      <label for="addCity">
        <b> {{ labelText }} </b>
      </label>
      <div class="input-select-btn-wrapper">
        <input
          id="addCity"
          type="text"
          :class="inputStyle"
          v-model="newCityName"
        />
        <button type="submit" class="submit-btn input-select-btn">
          Submit
        </button>
        <div v-if="citiesOptions.length" class="select-wrapper">
          <label v-if="!selectedOption" for="cities" class="select-label">
            <b> we have found several options, choose the one of them </b>
          </label>
          <select
            v-model="selectedOption"
            name="cities"
            id="cities"
            class="input-select-btn"
            @change="onChange"
          >
            <option
              v-for="city in citiesOptions"
              :key="city.id"
              :value="city.id"
            >
              {{ city.id }}
            </option>
          </select>
        </div>
      </div>
    </form>

    <draggable
      :list="cities"
      :disabled="!enabled"
      item-key="city"
      ghost-class="ghost"
      class="plate-container"
      @start="onStartDrag"
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

interface IData {
  enabled: boolean;
  dragging: boolean;
  newCityName: string;
  selectedOption: string;
}

export default defineComponent({
  name: "SettingBlock",
  emits: ["addNewCity", "deleteCity", "replaceCity", "selectedCountry"],
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
      newCityName: "",
      enabled: true,
      dragging: false,
      selectedOption: "",
    };
  },
  methods: {
    addNewCity(): void {
      if (this.$data.newCityName) {
        this.$emit("addNewCity", this.$data.newCityName);
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
    onStartDrag(): void {
      this.$data.dragging = true;
    },
    onChange(): void {
      this.$emit("selectedCountry", this.$data.selectedOption);
    },
  },
  computed: {
    inputStyle(): string {
      const { errorMessage } = this.$props;
      return errorMessage
        ? "input-error input-select-btn"
        : "input input-select-btn";
    },
    labelText(): string {
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
.input-select-btn-wrapper {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 8px;
}
.input-select-btn {
  padding: 12px;
  border: none;
  border-radius: 16px;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
}
.input {
  border: 1px solid #bcbcbc;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
  padding-left: 20px;
}
.input-error {
  border: 1px solid #b41717;
}
.submit-btn:hover {
  cursor: pointer;
  background-color: palegreen;
}
.ghost {
  background-color: palegreen;
}
.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}
.select-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

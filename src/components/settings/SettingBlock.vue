<template>
  <div class="settings">
    <form @submit.prevent="addNewCity">
      <label for="addCity">
        <b> {{ labelText }} </b>
      </label>
      <div class="input-btn-wrapper">
        <input
          id="addCity"
          type="text"
          :class="inputStyle"
          v-model="newCityName"
        />
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>

    <div class="plate-container">
      <CityPlate
        v-for="city in cities"
        :key="city.city"
        :city="city.city"
        :country="city.country"
        @delete-city="onDeleteCity"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityPlate from "@/components/settings/CityPlate.vue";

export default defineComponent({
  name: "SettingBlock",
  emits: ["addNewCity", "deleteCity"],
  components: {
    CityPlate,
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
  },
  data() {
    return {
      newCityName: "",
    };
  },
  methods: {
    addNewCity(): void {
      if (this.$data.newCityName) {
        this.$emit("addNewCity", this.$data.newCityName);
        this.$data.newCityName = "";
      }
    },
    onDeleteCity(cityName: string): void {
      this.$emit("deleteCity", cityName);
    },
  },
  computed: {
    inputStyle(): string {
      const { errorMessage } = this.$props;
      return errorMessage ? "input-error" : "input";
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
.input-btn-wrapper {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 8px;
}
.input-btn-wrapper > * {
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
</style>

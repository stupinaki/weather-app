<template>
  <div class="plate">
    <div>{{ cityId }}</div>
    <button class="btn" @click="onClick">🗑</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CityPlate",
  emits: ["deleteCity"],
  props: {
    cityId: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick(): void {
      this.$emit("deleteCity", this.$props.cityId);
    },
  },
});
</script>

<style scoped>
.plate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e4e4e4;
  box-shadow: 1px 8px 12px #3a3c4c14, 1px 1px 2px #3a3c4c0a;
  padding: 12px;
  border-radius: 16px;
}
.btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
}
.btn:hover {
  background-color: #b0cbc8;
  border-radius: 50%;
}
</style>

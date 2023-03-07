<!--<template>-->
<!--  <h3>Transition</h3>-->
<!--  <draggable-->
<!--    class="list-group"-->
<!--    item-key="order"-->
<!--    tag="transition-group"-->
<!--    :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"-->
<!--    v-model="list"-->
<!--    v-bind="dragOptions"-->
<!--    @start="isDragging = true"-->
<!--    @end="isDragging = false"-->
<!--  >-->
<!--    <template #item="{ element }">-->
<!--      <li class="list-group-item">-->
<!--        <i-->
<!--          :class="-->
<!--            element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'-->
<!--          "-->
<!--          @click="element.fixed = !element.fixed"-->
<!--          aria-hidden="true"-->
<!--        ></i>-->
<!--        {{ element.name }}-->
<!--      </li>-->
<!--    </template>-->
<!--  </draggable>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { defineComponent } from "vue";-->
<!--import draggable from "vuedraggable";-->

<!--const message = [-->
<!--  "vue.draggable",-->
<!--  "draggable",-->
<!--  "component",-->
<!--  "for",-->
<!--  "vue.js 2.0",-->
<!--  "based",-->
<!--  "on",-->
<!--  "Sortablejs",-->
<!--];-->

<!--interface IDragOptions {-->
<!--  animation: number;-->
<!--  group: string;-->
<!--  disabled: boolean;-->
<!--  ghostClass: string;-->
<!--}-->

<!--interface IOption {-->
<!--  name: string;-->
<!--  order: number;-->
<!--}-->

<!--interface IData {-->
<!--  list: IOption[];-->
<!--}-->

<!--export default defineComponent({-->
<!--  name: "TransitionDraggable",-->
<!--  display: "Transition",-->
<!--  order: 6,-->
<!--  components: {-->
<!--    draggable,-->
<!--  },-->
<!--  data(): IData {-->
<!--    return {-->
<!--      list: message.map((name, index) => {-->
<!--        return { name, order: index + 1 };-->
<!--      }),-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    sort(): void {-->
<!--      this.list = this.list.sort((a, b) => a.order - b.order);-->
<!--    },-->
<!--  },-->
<!--  computed: {-->
<!--    dragOptions(): IDragOptions {-->
<!--      return {-->
<!--        animation: 0,-->
<!--        group: "description",-->
<!--        disabled: false,-->
<!--        ghostClass: "ghost",-->
<!--      };-->
<!--    },-->
<!--  },-->
<!--});-->
<!--</script>-->

<!--<style>-->
<!--.button {-->
<!--  margin-top: 35px;-->
<!--}-->
<!--.flip-list-move {-->
<!--  transition: transform 0.5s;-->
<!--}-->
<!--.no-move {-->
<!--  transition: transform 0s;-->
<!--}-->
<!--.ghost {-->
<!--  opacity: 0.5;-->
<!--  background: #c8ebfb;-->
<!--}-->
<!--.list-group {-->
<!--  min-height: 20px;-->
<!--}-->
<!--.list-group-item {-->
<!--  cursor: move;-->
<!--}-->
<!--.list-group-item i {-->
<!--  cursor: pointer;-->
<!--}-->
<!--</style>-->

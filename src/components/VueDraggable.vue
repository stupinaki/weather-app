<!--<template>-->
<!--  <h3>Draggable {{ draggingInfo }}</h3>-->

<!--  &lt;!&ndash;  <pre> list: {{ list }} </pre>&ndash;&gt;-->
<!--  <draggable-->
<!--    :list="list"-->
<!--    :disabled="!enabled"-->
<!--    item-key="name"-->
<!--    class="list-group"-->
<!--    ghost-class="ghost"-->
<!--    @start="dragging = true"-->
<!--    @end="dragging = false"-->
<!--  >-->
<!--    <template #item="{ element }">-->
<!--      <div class="list-group-item item" :class="{ 'not-draggable': !enabled }">-->
<!--        {{ element.name }}-->
<!--      </div>-->
<!--    </template>-->
<!--  </draggable>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { defineComponent } from "vue";-->
<!--import draggable from "vuedraggable";-->

<!--interface IPerson {-->
<!--  name: string;-->
<!--  id: number;-->
<!--}-->

<!--interface IData {-->
<!--  enabled: boolean;-->
<!--  dragging: boolean;-->
<!--  list: IPerson[];-->
<!--}-->

<!--export default defineComponent({-->
<!--  name: "VueDraggable",-->
<!--  order: 0,-->
<!--  components: {-->
<!--    draggable,-->
<!--  },-->
<!--  data(): IData {-->
<!--    return {-->
<!--      enabled: true,-->
<!--      list: [-->
<!--        { name: "Первый блок", id: 0 },-->
<!--        { name: "Второй блок", id: 1 },-->
<!--        { name: "Третий блок", id: 2 },-->
<!--      ],-->
<!--      dragging: false,-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    draggingInfo(): string {-->
<!--      return this.dragging ? "under drag" : "";-->
<!--    },-->
<!--  },-->
<!--});-->
<!--</script>-->
<!--<style scoped>-->
<!--.ghost {-->
<!--  border-left: 8px solid palegreen;-->
<!--}-->
<!--.item {-->
<!--  padding: 12px;-->
<!--  border-bottom: 1px solid gray;-->
<!--}-->
<!--.not-draggable {-->
<!--  cursor: no-drop;-->
<!--}-->
<!--</style>-->

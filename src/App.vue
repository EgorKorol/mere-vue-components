<template>
  <div id="app">
    <Dropdown class="mb-3" :options="items" v-model="dr"> </Dropdown>
    Dropdown v-model: {{ dr }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { options } from "@/__mocks__";

export default Vue.extend({
  name: "App",
  components: {
    Dropdown: () => import("@/components/Dropdown/Dropdown.vue"),
  },
  data() {
    return {
      items: options,
      dr: {
        label: "Nobelium",
        value: "no",
        id: "no",
      },
    };
  },
});
</script>

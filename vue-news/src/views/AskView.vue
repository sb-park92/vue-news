<template>
  <div>
    <div v-for="user in ask" :key="user">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ask: (state) => state.ask,
    }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>

<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>

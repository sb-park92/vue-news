<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.users = response.data))
      .catch();
  },
};
</script>

<style></style>

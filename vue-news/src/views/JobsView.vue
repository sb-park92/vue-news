<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.users = response.data))
      .catch();
  },
};
</script>

<style></style>

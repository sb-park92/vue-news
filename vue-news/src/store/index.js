import { createStore } from "vuex";
import { fetchNewsList } from "../api/index";
import { fetchJobsList } from "../api/index";
import { fetchAskList } from "../api/index";

export default createStore({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList().then((response) => {
        context.commit("SET_NEWS", response.data);
      });
    },
    FETCH_JOBS(context) {
      fetchJobsList().then((response) => {
        context.commit("SET_JOBS", response.data);
      });
    },
    FETCH_ASK(context) {
      fetchAskList().then((response) => {
        context.commit("SET_ASK", response.data);
      });
    },
  },
  getters: {},
});

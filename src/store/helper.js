import axios from "axios";

export const helper = {
  actions: {
    async getAxios({ getters }, payload) {
      return await axios.get(`${getters.mainUrl}/${payload}`);
    },
    async postAxios({ getters }, payload) {
      console.log(payload);
      return await axios
        .post(`${getters.mainUrl}/${payload.url}`, payload.data)
        .catch((e) => {
          console.log(e);
        });
    },
  },
};



export const post = {
    state() {
        return {
          posts: [],
          urlPost: 'posts',
        };
      },
      getters: {
        posts(state) {
          return state.posts.filter(post => post.title.length > 35)
        }
      },
      mutations: {
        postsInsert(state, payload) {
          state.posts = [...payload.map(item => {
            item.count = item.title.length
            return item
          })]
        }
      },
      actions: {
        async getPosts({dispatch, state, commit}) {
          let res = await dispatch('getAxios', state.urlPost)
          if (res.status == 200) {
            commit('postsInsert', res.data)
          }
        }
      }
}
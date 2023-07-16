

export const album = {
    state: () => ({
        albums: [],
        urlAlbom: 'albums',
    }),
    getters: {
        albums(state) {
            return state.albums
        }
    },
    mutations: {
        albums(state, payload) {
            state.albums = [...payload]
        }
    },
    actions: {
        async getAllAlbums(context) {
            let res = await context.dispatch('getAxios', context.state.urlAlbums) 
            if(res.data == 200) {
                console.log(res.data);
            }
        }
    }
}
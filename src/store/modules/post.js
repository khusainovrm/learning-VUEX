export default({
    actions: {
    },
    mutations: {
    },
    state: {
      posts: []
    },
    getters: {
      allposts(state){
        return this.state.posts
      }
    }
  })
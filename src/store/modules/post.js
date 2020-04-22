export default({
    actions: {
      async fetchPosts({commit}, limit=3) {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments/?_limit='+limit)
        const posts = await res.json()
        console.log(posts)

        commit("updatePost", posts)
      }
    },
    mutations: {
      updatePost(state, newPost) {
        state.posts = newPost
      }
    },
    state: {
      posts: []
    },
    getters: {
      allPosts(state){
        return state.posts
      },
      postsCounter(state, getters) {
        return getters.allPosts.length
      },
    }
  })
<template>
  <div id="app">
    <h2>Posts</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe sit sapiente ut. Odit fuga exercitationem placeat optio nisi at voluptates ipsa similique. Quasi, accusamus ad earum odio facilis magni?</p>
     <hr>
     {{postsCounter}}
     <Posts 
    v-for="post in allPosts" :key="post.id"
    :post="post" 
    />
  </div>
</template>

<script>
import Posts from '@/components/Posts'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(["allPosts", "postsCounter"]),
  methods: mapActions(["fetchPosts"]),
  async mounted () {
    this.fetchPosts(10)
  },
  components: {
    Posts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>

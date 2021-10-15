<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SinglePost v-for="(article, index) in articles" :key="index" :article="article" />
  </div>
</template>

<script>
// @ is an alias to /src
import SinglePost from '../components/SinglePost.vue'

export default {
  name: 'Home',
  components: {
    SinglePost,
  },

  computed: {
    articles() {
      return this.$store.state.articles;
    }
  }
}
</script>

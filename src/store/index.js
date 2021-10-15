import Vue from 'vue'
import Vuex from 'vuex'
import Article from '../core/Article'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: [
     {
        title: '',
        id: '',
        content: ''
      }
    ]
  },
  mutations: {
    addArticle(state, article) {
      state.articles.push(article)
    },
  },
  actions: {
    getArticleById(context, id) {
      return context.state.articles.find(article => article.id === id)
    }
  },
  getters: {
    getArticleById: (state) => (id) => {
      return state.articles.find(article => article.id === id)
    }
  },
  modules: {
  }
})

/* Init store */
store.commit('addArticle', new Article({
  title: 'Bonjour et bienvenue à tous',
  short_content: 'Ce premier article vous aidera à comprendre VueJS',
  md_content: '# Incroyable, VueJS passe en version 3\n## Need more stuff ?\nBonjour Are you ready to code a lot today ?\n- Test 1\n- Test 2\n- Test 3\n\n',
  image: 'https://picsum.photos/300/400'
}));
console.log('Store vuex init')

export default store

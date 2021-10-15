<template>
	<div>
		Admin List<br />
		<div v-for="(article, index) in articles" :key="index">
			{{ article.title }}
			<router-link :to="`/admin/mod/${article.id}`">Modify</router-link>
			<button class="btn" @click="delArticle(article.id)">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		articles() {
			return this.$store.state.articles
		}
	},

	methods: {
		delArticle(id) {
			return this.$store.commit('delArticleById', id)
		}
	}
}
</script>

<style>

</style>

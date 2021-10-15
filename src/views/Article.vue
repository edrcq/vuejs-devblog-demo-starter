<template>
	<div>
		{{ altArticle }}
		<hr>
		<div v-html="altArticle.htmlContent"></div>
	</div>
</template>

<script>
export default {
	data() { return {
		article: null,
	}},
	computed: {
		routeId() {
			return this.$route.params.id;
		},
		// # way 1
		altArticle() {
			return this.$store.getters['getArticleById'](this.routeId)
		}
	},
	// # way 2
	created() {
		this.loadArticle()
	},
	methods: {
		loadArticle() {
			this.$store.dispatch('getArticleById', this.routeId).then(article => {
				console.log(this.routeId)
				this.article = article;
				console.log(this.article)
			})
		}
	}
}
</script>

<style>

</style>

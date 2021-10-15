<template>
	<div class="row">
		<div class="col-3">
			<img :src="article.image" :alt="article.title">
		</div>
		<div class="col-9">
			<h1>{{ article.title }}</h1>
			<p>{{ article.short_content }}</p>
			<button class="btn btn-default" @click="goToArticle">Lire l'article</button>
		</div>
	</div>
</template>

<script>


export default {
	props: {
		article: { type: Object, required: true }
	},
	methods: {
		goToArticle() {
			this.$router.push({ name: 'Article', params: { id: this.article.id } })
		}
	}
}
</script>

<style>
img {
    max-width: 100%;
    max-height: 100%;
}
</style>

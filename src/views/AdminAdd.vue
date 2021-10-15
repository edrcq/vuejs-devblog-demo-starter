<template>
	<div class="row">
		<div class="col-6">
			<form @submit.prevent="addArticle">
				<div>
					<label for="title">Title</label>
					<input type="text" v-model="form.title">
				</div>
				<div>
					<label for="title">Short content</label>
					<input type="text" v-model="form.short_content">
				</div>
				<div>
					<label for="title">Content</label>
					<textarea v-model="form.md_content" class="arti-content"></textarea>
				</div>
				<div>
					<label for="title">Image</label>
					<input type="text" v-model="form.image">
				</div>
				<div>
					<input type="submit" value="Valider" class="btn btn-primary">
				</div>
			</form>
		</div>
		<div class="col-6">
			<h1>{{ form.title }}</h1>
			<p class="lead">{{ form.short_content }}</p>
			<div v-html="renderHtml"></div>
			<div>
				<img :src="form.image" :alt="form.title">
			</div>
		</div>
	</div>

</template>

<script>
import Article from '../core/Article'

export default {
	data() {
		return {
			id: '',
			form: {
				title: '',
				short_content: '',
				md_content: '',
				image: '',
			}
		}
	},
	computed: {
		renderHtml() {
			return Article.renderHtml(this.form.md_content)
		}
	},
	methods: {
		addArticle() {
			const article = new Article(this.form)
			this.$store.commit('addArticle', article)
		}
	}
}
</script>

<style>
.arti-content {
	min-width: 100%;
}

form > div {
	margin-top: 1rem;
}
</style>

<template>
	<div>
		<div class="nav my-3">
			<router-link to="/admin/add" class="btn btn-success">Ajouter un article</router-link> |
			<router-link to="/admin" class="btn btn-success">Liste des articles</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>

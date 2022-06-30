<template>
	<el-header class="header">
		<div class="title">title</div>
		<div>username</div>
	</el-header>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>

<style scoped lang="less">
.header {
	background: #3297fc;
	color: #fff;
	display: flex;
	justify-content: space-between;
	line-height: 60px;
	.title {
		font-size: 28px;
	}
}
</style>
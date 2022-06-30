<template>
	<div class="header">
		{{ title }}
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		title: "",
	},
	mounted() {},
	methods: {},
};
</script>

<style scoped lang="less">
.header{
  height: 45px;
  line-height: 45px;
  text-align: center;
}
</style>

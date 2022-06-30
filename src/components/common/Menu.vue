<template>
	<div class="menu">
		<el-menu default-active="2" class="el-menu-vertical-demo" router>
			<template>
				<el-submenu :index="index + ''" v-for="(item, index) in menus" :key="index">
					<template slot="title">
						<i :class="item.iconClass"></i>
						<span>{{ item.name }}</span>
					</template>
					<el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subIndex">
						<el-menu-item  :index="subItem.path">
              <i :class="subItem.iconClass"></i>
              {{subItem.name}}
            </el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menus: [...this.$router.options.routes.filter((e) => !e.hidden)],
		};
	},
	computed: {},
	mounted() {
		console.log(this.$router.options.routes.filter((e) => !e.hidden));
	},
	methods: {},
};
</script>

<style scoped lang="less">
.menu {
	height: 100%;
	.el-menu-vertical-demo {
		height: 100%;
	}
}
</style>
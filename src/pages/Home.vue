<template>
	<div class="home">
		<Header />
		<el-container class="content">
			<el-aside width="200px">
				<Menu />
			</el-aside>
			<el-container>
				<el-main>
					<Breadcrumb />
					<div class="cont">
						<router-view></router-view>
					</div>
				</el-main>
				<el-footer>
					<Footer />
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script>
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
export default {
	components: {
		Header,
		Menu,
		Footer,
		Breadcrumb,
	},
	data() {
		return {};
	},
	created() {},
	computed: {},
	methods: {},
};
</script>
<style lang="less" scoped>
.home {
	width: 100%;
	height: 100%;
	.content {
		position: absolute;
		width: 100%;
		top: 60px;
		bottom: 0;
    
	}
}
</style>

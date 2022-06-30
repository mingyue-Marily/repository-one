<template>
	<div class="data-view">
		<el-card>
			<div id="echart1"></div>
		</el-card>
		<el-card>
			<div id="echart2"></div>
		</el-card>
	</div>
</template>

<script>
import { dataView } from "@/api/api";
export default {
	data() {
		return {};
	},
	mounted() {
		this.drawBar();
		this.draw(
			[1, 2, 3],
			["一班", "二班", "三班"],
			[
				{
					name: "人数",
					type: "line",
					data: [43, 34, 34],
				},
			]
		);
		dataView().then((res) => {});
	},
	methods: {
		draw(legend, xAxis, series) {
			let myChart = this.$echarts.init(document.getElementById("echart2"));
			let option = {
				title: {
					text: "大佬救命",
				},
				tooltip: {
					trigger: "axis",
				},
				legend: {
					data: {
						name: "系列1",
						// 强制设置图形为圆。
						icon: "circle",
						// 设置文本为红色
						textStyle: {
							color: "red",
						},
					},
				},
				xAxis: {
					type: "category",
					data: xAxis,
				},
				yAxis: {
					type: "value",
				},
				series: series,
			};
			myChart.setOption(option);
		},
		drawBar() {
			let myChart = this.$echarts.init(document.getElementById("echart1"));
			myChart.setOption({
				title: {
					text: "大佬救命",
				},
				tooltip: {},
				xAxis: {
					data: ["一班", "二班", "三班"],
				},
				yAxis: {},
				series: [
					{
						name: "人数",
						type: "line",
						data: [43, 34, 34],
					},
				],
			});
		},
	},
};
</script>

<style scoped lang="less">
.data-view {
	width: 100%;

	display: flex;
	justify-content: space-between;
	.el-card {
		width: 50%;

		#echart1,
		#echart2 {
			height: 500px;
		}
	}
}
</style>
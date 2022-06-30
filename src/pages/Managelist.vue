<template>
	<div class="map-view">
		<div id="main"></div>
	</div>
</template>

<script>
import { chinaJson } from "@/assets/js/mapData";
export default {
	data() {
		return {};
	},
	mounted() {
		let arrData = chinaJson.features.map((e) => {
			return {
				name: e.properties.name,
				value: e.properties.childNum,
			};
		});
		this.loadMap(chinaJson, "china", arrData);
		// let myChart = this.$echarts.init(document.getElementById("main"));
		// this.$echarts.registerMap("china", chinaJson);
		// let arr = chinaJson.features.map(e=>{
		//   return {
		//     name:e.properties.name,
		//     value:e.properties.childNum
		//   }
		// })
		// let option = {
		// 	backgroundColor: "orange",
		// 	tooltip: {
		// 		show: true,
		// 		formatter: function (params) {
		//        if (params.data) return params.name + '：' + params.data['value']
		//     },
		// 	},
		//   visualMap:{
		//     type:'continuous',
		//     text:['',''],
		//     showLabel:true,
		//     left:'50',
		//     min:0,
		//     max:100,
		//     inRange:{
		//       color:['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096'],

		//     },
		//     splitNumber:0
		//   },
		// 	geo: {
		// 		map: "china",
		// 		aspectScale: 0.75,
		// 		zoom: 1.1,
		// 		regions: [
		// 			{
		// 				name: "南海诸岛",
		// 			},
		// 		],
		// 	},
		// 	series: [
		// 		{
		// 			type: "map",
		// 			zoom: 1.1,
		// 			map: "china",
		// 			label: {
		// 				normal: {
		// 					show: true,
		// 				},
		// 				emphasis: {
		// 					show: true,
		// 				},
		// 			},
		//       data:arr
		// 		},
		// 	],
		// };

		// myChart.setOption(option);
	},
	methods: {
		loadMap(chinaJson, name, arrData) {
			
				if (chinaJson) {
					let myChart = this.$echarts.init(document.getElementById("main"));
					this.$echarts.registerMap(name, chinaJson);
					let option = {
						tooltip: {
							show: true,
							formatter: function (params) {
								if (params.data)
									return params.name + "：" + params.data["value"];
							},
						},
						visualMap: {
							type: "continuous",
							text: ["", ""],
							showLabel: true,
							left: "50",
							min: 0,
							max: 100,
							inRange: {
								color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"],
							},
							splitNumber: 0,
						},
						series: [
							{
								name: "MAP",
								type: "map",
								mapType: name,
								selectedMode: "false", //是否允许选中多个区域
								label: {
									normal: {
										show: true,
									},
									emphasis: {
										show: true,
									},
								},
								data: arrData,
							},
						],
					};
					myChart.setOption(option);
				} else {
					alert("无法加载该地图");
				}
			}
		},
	
};
</script>

<style scoped lang="less">
.map-view {
	width: 100%;
	#main {
		width: 100%;
		height: 500px;
	}
}
</style>
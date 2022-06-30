<template>
	<div class="msite">
		<HeaderTop title="商品列表页"></HeaderTop>
		<div class="swiper">
			<!-- Swiper -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">Slide 1</div>
					<div class="swiper-slide">Slide 2</div>
					<div class="swiper-slide">Slide 3</div>
					<div class="swiper-slide">Slide 4</div>
					<div class="swiper-slide">Slide 5</div>
					<div class="swiper-slide">Slide 6</div>
					<div class="swiper-slide">Slide 7</div>
					<div class="swiper-slide">Slide 8</div>
					<div class="swiper-slide">Slide 9</div>
					<div class="swiper-slide">Slide 10</div>
				</div>
				<!-- Add Arrows -->
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
				<!-- Add Scrollbar -->
				<div class="swiper-scrollbar"></div>
			</div>
		</div>
    <ShopList/>
	</div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import ShopList from '@/components/ShopList/ShopList'
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
	components: {
		HeaderTop,
    ShopList
	},
	data() {
		return {};
	},
	mounted() {
		var swiper = new Swiper(".swiper-container", {
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	},
	methods: {},
};
</script>

<style scoped lang="less">
.msite {
	width: 100%;
	height: 100%;
	.header {
		height: 45px;
		background-color: #efefef;
	}
	.swiper-container {
		width: 100%;
		height: 200px;
		background-color: yellowgreen;
		.swiper-slide {
			text-align: center;
			font-size: 18px;

			/* Center slide text vertically */
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
	}
}
</style>
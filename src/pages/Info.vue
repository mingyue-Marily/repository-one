<template>
 <div class="info">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
  </el-table>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      tableData: [
				{
					id: 1,
					name: "111",
					gender: "女",
					address: "休学",
				},
				{
					id: 2,
					name: "222",
					gender: "女",
					address: "休学",
				},
				{
					id: 3,
					name: "333",
					gender: "男",
					address: "已入学",
				},
				{
					id: 4,
					name: "444",
					gender: "男",
					address: "已入学",
				},
				{
					id: 5,
					name: "555",
					gender: "男",
					address: "已入学",
				},
				{
					id: 6,
					name: "666",
					gender: "男",
					status: "已入学",
				},
			],
     }
   },
   mounted() {

   },
   methods: {

   },
 }
</script>

<style lang='less' scoped>

</style>

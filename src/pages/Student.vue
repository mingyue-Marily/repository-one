<template>
	<div class="student">
		<el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
			<el-form-item label="姓名">
				<el-input v-model="formInline.user" placeholder="姓名"></el-input>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
				<el-button type="primary" @click="onReset">重置</el-button>
			</el-form-item>
		</el-form>
		<el-table border :data="compTable" style="width: 100%">
			<el-table-column prop="name" label="姓名"> </el-table-column>
			<el-table-column prop="gender" label="gender"> </el-table-column>
			<el-table-column prop="status" label="status"> </el-table-column>
			<el-table-column prop="" label="操作">
				<template slot-scope="scope">
					<el-button
						type="danger"
						size="mini"
						icon="el-icon-delete"
						@click="del(scope.row)"
					></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			style="textalign: center; margintop: 20px"
			layout="prev, pager, next,total"
			:total="compTotal"
			:page-size="pageSize"
			:current-page="currentPage"
			@current-change="handleCurrentChange"
		>
		</el-pagination>
	</div>
</template>

<script>
import { students } from "@/api/api";
export default {
	data() {
		return {
      formInline:{
        user:''
      },
			currentPage: 1,
			pageSize: 2,
			tableData: [
				{
					id: 1,
					name: "111",
					gender: "女",
					status: "休学",
				},
				{
					id: 2,
					name: "222",
					gender: "女",
					status: "休学",
				},
				{
					id: 3,
					name: "333",
					gender: "男",
					status: "已入学",
				},
				{
					id: 4,
					name: "444",
					gender: "男",
					status: "已入学",
				},
				{
					id: 5,
					name: "555",
					gender: "男",
					status: "已入学",
				},
				{
					id: 6,
					name: "666",
					gender: "男",
					status: "已入学",
				},
			],
		};
	},
	computed: {
		compTable() {
			return this.tableData.slice(
				(this.currentPage - 1) * this.pageSize,
				this.currentPage * this.pageSize
			);
		},
		compTotal() {
			return this.tableData.length;
		},
	},
	mounted() {
		// this.getData()
	},
	methods: {
    onReset(){
      console.log(this.formInline);
      this.formInline = {}
    },
    onSubmit(){},
		del(row) {
			this.tableData = this.tableData.filter((e) => e.id !== row.id);
		},
		handleCurrentChange(val) {
			this.currentPage = val;
		},
		getData(params) {
			students(params).then((res) => {});
		},
	},
};
</script>

<style lang='less' scoped>
.student{
  .demo-form-inline{
    margin: 10px 0;
  }
}
</style>

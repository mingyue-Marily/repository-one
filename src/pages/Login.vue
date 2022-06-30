<template>
	<div class="login">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span class="header">用户登录</span>
			</div>
			<el-form
				:model="ruleForm"
				status-icon
				:rules="rules"
				ref="ruleForm"
				label-width="60px"
				class="demo-ruleForm"
			>
				<el-form-item label="用户名" prop="username">
					<el-input v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input
						type="password"
						v-model="ruleForm.pass"
						autocomplete="off"
					></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submitForm()"
						>提交</el-button
					>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
import { nameRule, passwordRule } from "../utils/validate.js";
export default {
	data() {
		var validateUsername = (rule, value, callback) => {
			nameRule(rule, value, callback);
		};
		var validatePass = (rule, value, callback) => {
			passwordRule(rule, value, callback);
		};

		return {
			ruleForm: {
				pass: "",
				username: "",
			},
			rules: {
				pass: [{ validator: validatePass, trigger: "blur" }],
				username: [{ validator: validateUsername, trigger: "blur" }],
			},
		};
	},
	created() {},
	computed: {},
	methods: {
		submitForm() {
      //是否校验成功和未通过校验的字段
			this.$refs['ruleForm'].validate((valid,object) => {
        console.log(valid,object);
        if(valid){
          this.$router.replace('/msite')
        }
      });
		},
	},
};
</script>
<style lang="less" scoped>
.login {
	width: 100%;
	height: 100%;
	background-color: #409eff;
	position: absolute;

	.box-card {
		width: 450px;
		margin: 200px auto;

		.header {
			width: 100%;
			height: 100%;
			display: inline-block;
			text-align: center;
			font-size: 34px;
		}
		.el-form-item:last-of-type {
			text-align: center;
			& /deep/ .el-form-item__content {
				margin-left: 0 !important;
			}
		}
	}
}
</style>

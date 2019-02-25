<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con">
						<h2>联系我们</h2>
						<p>拥有全球领先，安全的云计算产品</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<el-row class="phonebox">
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24">
						<h3>联系方式</h3>
						<p>如果您有任何问题都可以通过以下方式联系到我们</p>
					</el-col>
					<el-col :xs="12" :sm="6" v-for="phonelist in content">
						<img src="../../static/1587_jhh3umir.png" width="30%" alt="">
						<h4>{{phonelist.title}}</h4>
						<p>{{phonelist.phonenum}}</p>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		
		<el-row class="formbox">
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24" :sm="18" class="formleft_box">
						<h2>在线留言</h2>
						<el-form :label-position="labelPosition">
							<el-form-item label="姓名" >
								<el-input placeholder="请输入姓名"></el-input>
							</el-form-item>
							<el-form-item label="电话">
								<el-input placeholder="请输入电话" ></el-input>
							</el-form-item>
							<el-form-item label="留言内容">
								<el-input type="textarea" placeholder="请输入留言内容"></el-input>
							</el-form-item>
								<el-button type="primary">提交</el-button>
						</el-form>
					</el-col>
					<el-col :xs="24" :sm="6" class="formright_box">
						<h2>人才招聘</h2>
						<p>尽管公司成立的时间较短，但在云计算领域业界闻名，整体业绩优良，具备优异的成长性，加入我们，您不但可以收获具备行业竞争力的薪酬，还具备巨大的上升和发展空间</p>
						<el-button type="primary" round>立即加入</el-button>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition:"top",
				workTask: [],
				content:[
					{
						id:1,
						imgsrc:'1587_jhh3qqh1.png',
						title:'联系电话',
						phonenum:'100-0000-0000'
					},
					{
						id:1,
						imgsrc:'1587_jhh3umir.png',
						title:'电子邮箱',
						phonenum:'1000000@qq.com'
					},
					{
						id:1,
						imgsrc:'1587_jhh3ut0l.png',
						title:'公司地址',
						phonenum:'中国互联网省域名市网站区666号'
					},
					{
						id:1,
						imgsrc:'1587_jhh3uzi5.png',
						title:'工作时间',
						phonenum:'周一至周五 9:00-7:00'
					}
				]
			};
		},
		created() {
			this.workTask = this.$route.query.id
			console.log(this.workTask)
		}

	}
</script>

<style scoped>
	.title_top {
		width: 100%;
		overflow: hidden;
		margin: 0;
		color: #FFFFFF;
		background: url(../assets/1587_jgzynhtp.jpg) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.secondpage_con {
		margin: 150px auto;
	}
	.phonebox{
		margin: 50px auto;
	}
	.phonebox p,.phonebox h3,.phonebox h4{
		color: #000000;
	}
	
	.formbox{
		padding-top: 50px;
		padding-bottom: 50px;
		background-color: rgb(248, 248, 249);
	}
	.formleft_box{
		text-align: left;
		color: #000000;
		padding-right:50px ;
	}
	.el-textarea textarea{
		min-height: 150px;
	}
	.formright_box{
		text-align: left;
	}
	.formright_box h2,.formright_box p{
		color: #000000;
	}
	.formright_box p{
		font-size: 14px;
		color: rgb(153, 153, 153);
		margin: 50px auto;
	}
	
</style>

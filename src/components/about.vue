<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con">
						<h2>关于我们</h2>
						<p>拥有全球领先，安全的云计算产品</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<!-- 布局 -->

		<el-row>
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24" :sm="8">
						<div class="lefttitle">
							<h2>About Us</h2>
							<p>公司简介</p>
						</div>
					</el-col>
					<el-col :xs="24" :sm="16">
						<p>
							云计算（cloud
							computing）是基于互联网的相关服务的增加、使用和交付模式，通常涉及通过互联网来提供动态易扩展且经常是虚拟化的资源。云是网络、互联网的一种比喻说法。过去在图中往往用云来表示电信网，后来也用来表示互联网和底层基础设施的抽象。
						</p>
						<p>
							对云计算的定义有多种说法。对于到底什么是云计算，至少可以找到100种解释。现阶段广为接受的是美国国家标准与技术研究院（NIST）定义：云计算是一种按使用量付费的模式，这种模式提供可用的、便捷的、按需的网络访问，
							进入可配置的计算资源共享池（资源包括网络，服务器，存储，应用软件，服务），这些资源能够被快速提供，只需投入很少的管理工作，或与服务供应商进行很少的交互。
						</p>
					</el-col>
				</el-row>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24">
						<img src="../assets/1587_jgzzz5qq.png" alt="" style="display:inline-block;width: 100%;max-height: 600px;">
					</el-col>
				</el-row>
			</el-col>
		</el-row>


		<el-row>
			<div class="yunduanfuwu">
				<el-col :span="16" :offset="4">
					<el-row>
						<el-col :xs="24" :sm="12">
							<h1>全云端服务</h1>
							<h1>打造稳定高效的IT服务</h1>
							<p>绿色低能耗数据中心、高质量网络、超大规模分布式底层架构我们是您云服务最佳的选择</p>
							<el-button round>查看服务</el-button>
						</el-col>
						<el-col :xs="0" :sm="12">
						</el-col>
					</el-row>
				</el-col>
			</div>
		</el-row>

		<el-row>
			<el-col :span="16" :offset="4">
				<el-carousel arrow="never" class="box3_carousel" :interval="50000" type="card" height="520px">
					<el-carousel-item>
						<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
						<el-row>
							<p><span>何淼</span><span>/工程师</span></p>
							<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
						</el-row>
						<el-row>
							<el-button round>了解详情</el-button>
						</el-row>
					</el-carousel-item>
					<el-carousel-item>
						<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
						<el-row>
							<p><span>何淼</span><span>/工程师</span></p>
							<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
						</el-row>
						<el-row>
							<el-button round>了解详情</el-button>
						</el-row>
					</el-carousel-item>
					<el-carousel-item>
						<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
						<el-row>
							<p><span>何淼</span><span>/工程师</span></p>
							<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
						</el-row>
						<el-row>
							<el-button round>了解详情</el-button>
						</el-row>
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>

		<el-row class="hezuohuoban">
			<div >
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24">
						<h1>Partner</h1>
						<p>合作伙伴</p>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-around">
					<el-col :span="4">
						 <img src="../assets/1587_jh5ps5j6.png" alt="">
					</el-col>
					<el-col :span="4">
						<img src="../assets/1587_jh5ps5j6.png" alt="">
					</el-col>
					<el-col :span="4">
						<img src="../assets/1587_jh5ps5j6.png" alt="">
					</el-col>
					<el-col :span="4">
						<img src="../assets/1587_jh5ps5j6.png" alt="">
					</el-col>
					<el-col :span="4">
						<img src="../assets/1587_jh5ps5j6.png" alt="">
					</el-col>
				</el-row>
			</el-col>
			</div>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				workTask: []
			};
		},
		created() {
			this.workTask = this.$route.query.id
			console.log(this.workTask)
		},
		beforeMount: function() { //挂载前状态
			
		}

	}

</script>

<style scoped>
	* {

		color: #000000;
	}

	.title_top {

		width: 100%;
		overflow: hidden;
		margin: 0;
		color: #000000;
		background: url(../assets/1587_jgzynhtp.jpg) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.secondpage_con {
		margin: 150px auto;
		
	}

	.secondpage_con h1,
	.secondpage_con p,.secondpage_con h2{
		color: #FFFFFF;
	}

	.el-row {
		/* margin-top: 60px ; */
	}

	.lefttitle {
		text-align: left;
	}

	.yunduanfuwu {
		text-align: left;
		width: 100%;
		overflow: hidden;
		padding-top: 50px;
		padding-bottom: 50px;
		color: #FFFFFF;
		background: url(../assets/1587_jh5pkdw8.jpg) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.yunduanfuwu h1,
	.yunduanfuwu p {
		color: #FFFFFF;
	}

	.yunduanfuwu button {
		color: #0286e6;
	}


	.el-carousel__item {
		background-color: #FFFFFF;
		box-shadow: 3px 3px 10px #f5f5f5;

	}

	.el-carousel__item .el-button {
		border-color: #249dc3;
		color: #249dc3;
	}
	.hezuohuoban{
		width: 100%;
		height: 100%;
		background-color: rgb(248, 248, 248);
	}
</style>

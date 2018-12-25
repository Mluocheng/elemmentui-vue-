<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con" v-for="navlistlist in navlist" v-if="workTask == navlistlist.id" ::key="navlistlist.id">
						<h2>
							{{navlistlist.title}}
						</h2>
						<p>
							{{navlistlist.content}}
						</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<el-row class="content">
			<el-col :span="16" :offset="4" class="hidden-xs-only">
				<el-row>
					<el-col :span="20" :offset="2">
						<h2>核心优势</h2>
						<p>利用存储网关实现数据中心不同品牌不同型号之间的统一管理利用存储网关实现数据中心不同品牌不同型号之间的统一管理...</p>
					</el-col>
					<el-col :xs="24" :sm="12" v-for="cardlist in content" :key="cardlist.id">
						<el-card shadow="always">
							<el-row>
								<el-col :xs="12" :sm="6" class="cardimgbox">
									<img :src="'../../static/' + cardlist.imgsrc" class="image" width="50%">
								</el-col>
								<el-col :xs="12" :sm="18" class="cont_box2">
									<h3>{{ cardlist.title }}</h3>
									<p>{{ cardlist.conteent }}</p>
								</el-col>
							</el-row>
						</el-card>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="22" :offset="1" class="hidden-sm-and-up">
				<el-row>
					<el-col :span="20" :offset="2">
						<h2>核心优势</h2>
						<p>利用存储网关实现数据中心不同品牌不同型号之间的统一管理利用存储网关实现数据中心不同品牌不同型号之间的统一管理...</p>
					</el-col>
					<el-col :xs="24" :sm="12" v-for="cardlist in content" :key="cardlist.id">
						<el-card shadow="always">
							<el-row>
								<el-col :xs="8" :sm="6" class="cardimgbox">
									<img :src="'../../static/' + cardlist.imgsrc" class="image" width="50%">
								</el-col>
								<el-col :xs="16" :sm="18" class="cont_box2">
									<h3>{{ cardlist.title }}</h3>
									<p>{{ cardlist.conteent }}</p>
								</el-col>
							</el-row>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>

		<el-row class="content">
			<el-col :span="16" :offset="4" class="hidden-xs-only">
				<el-row>
					<el-col :span="20" :offset="2">
						<h2>产品优势</h2>
						<p>利用存储网关实现数据中心不同品牌不同型号之间的统一管理...</p>
					</el-col>
					<el-col :xs="12" :sm="6" v-for="contentcardlist in contentcard" class="cardpic" :key="contentcardlist.id">
						<el-card shadow="hover">
							<img :src="'../../static/' + contentcardlist.imgsrc" class="image">
							<div style="padding: 14px;">
								<span>{{contentcardlist.title}}</span>
								<div class="bottom clearfix">
									<time class="time">{{ contentcardlist.conteent }}</time>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="22" :offset="1" class="hidden-sm-and-up">
				<el-row>
					<el-col :span="20" :offset="2">
						<h2>产品优势</h2>
						<p>利用存储网关实现数据中心不同品牌不同型号之间的统一管理...</p>
					</el-col>
					<el-col :xs="12" :sm="6" v-for="contentcardlist in contentcard" class="cardpic" :key="contentcardlist.id">
						<el-card shadow="hover">
							<img :src="'../../static/' + contentcardlist.imgsrc" class="image">
							<div style="padding: 14px;">
								<span>{{contentcardlist.title}}</span>
								<div class="bottom clearfix">
									<time class="time">{{ contentcardlist.conteent }}</time>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>

		<el-row class="content">
			<el-col :span="16" :offset="4" class="hidden-xs-only">
				<el-row>
					<el-col :span="20" :offset="2">
						<h2>应用场景</h2>
						<p>利用存储网关实现数据中心不同品牌不同型号之间的统一管理</p>
					</el-col>
					<el-col :xs="24" class="cardpic2">
						<img src="../../static/1587_jh716nzy.png" alt="">
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="22" :offset="1" class="hidden-sm-and-up">
				<el-row>
					<el-col :span="20" :offset="2">
						<h2>应用场景</h2>
						<p>利用存储网关实现数据中心不同品牌不同型号之间的统一管理</p>
					</el-col>
					<el-col :xs="24" class="cardpic2">
						<img src="../../static/1587_jh716nzy.png" alt="">
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
				workTask: [],
				content: [{
						id: 1,
						title: '实时精细化管理',
						conteent: 'IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh5xz3gl.png'
					},
					{
						id: 2,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh5y7mu7.png'
					},
					{
						id: 3,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh5y7vvv.png'
					},
					{
						id: 4,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh5y844k.png'
					}
				],
				contentcard: [{
						id: 2 - 1,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh5z5166.png'
					},
					{
						id: 2 - 2,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh64xhds.png'
					},
					{
						id: 2 - 3,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh6520u4.png'
					},
					{
						id: 2 - 4,
						title: '实时精细化管理',
						conteent: '将烟囱式的IT基础设施整合成共享式的分布式云数据中心，实现数据中心的资源高效利用以及云技术方向',
						imgsrc: '1587_jh6577zp.png'
					}
				],
				navlist: [{
						title: '数据中心迁移解决方案',
						id: 31,
						content: '设备使用率低下,机房空间不足、电力紧张、网络拥堵、管理低效、安全隐患等各种问题'
					},
					{
						title: 'Microsoft企业应用',
						id: 32,
						content: '数据中心发展到一定规模面临诸如设备老旧、设备使用率低下,机房空间不足、电力紧张、网络拥堵、管理低效、安全隐患等各种问题'
					},
					{
						title: '储存备份',
						id: 33,
						content: '数据中心发展到一定规模面临诸如设备老旧,机房空间不足、电力紧张、网络拥堵、管理低效、安全隐患等各种问题'
					},
					{
						title: '区块链部署',
						id: 34,
						content: '中心发展到一定规模面临诸如设备老旧、设备使用率低下,机房空间不足、电力紧张、网络拥堵、管理低效、安全隐患等各种问题'
					},
					{
						title: '游戏解决方案',
						id: 35,
						content: '数据中心发展到一定规模面临诸如设备老旧、设备使用率低下,安全隐患等各种问题'
					},
					{
						title: '医疗解决方案',
						id: 36,
						content: '数据中心发展到一定紧张、网络拥堵、管理低效、安全隐患等各种问题'
					},
					{
						title: '音视频解决方案',
						id: 37,
						content: '安全隐患等各种问题'
					},
					{
						title: '网站建设解决方案',
						id: 38,
						content: '网络拥堵、管理低效、安全隐患等各种问题'
					}
				]
			};
		},
		created() {
			this.workTask = this.$route.query.id
		},
		watch: {
			$route() {
				this.workTask = this.$route.query.id
			}
		},
		mounted(){
		
	}

	}
</script>

<style scoped>
	.title_top {
		width: 100%;
		overflow: hidden;
		margin: 0;
		color: #FFFFFF;
		background: url(../assets/download.png) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.content {
		margin: 50px auto;
		color: #000000;
	}

	.secondpage_con {
		text-align: left;
		margin: 150px auto;
	}

	.cont_box2 {
		text-align: left;
		padding-left: 20px;
	}

	.cont_box2 p {
		color: #BBBBBB;
		font-size: 14px;
	}

	.el-card {
		margin: 10px;

	}

	.el-card img,
	.cardimgbox {
		vertical-align: middle;
	}

	.cardimgbox {
		line-height: 125px;
	}

	.cardpic {
		margin: 0;
	}

	.cardpic img {
		width: 30%;
	}

	.cardpic2 img {
		width: 100%;
		border: 1px dashed #DCDFE6;
	}
</style>

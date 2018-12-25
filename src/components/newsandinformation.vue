<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con">
						<h2>新闻资讯</h2>
						<p>拥有全球领先，安全的云计算产品</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<el-row class="content">
			<el-col :span="16" :offset="4" class="hidden-xs-only">
				<el-row>
					<el-col :xs="24" v-for="cardlist in content">
						<el-card shadow="always">
							<el-row>
								<el-col :xs="12" :sm="6">
									<img :src="'../../static/' + cardlist.imgsrc" class="image" width="100%">
								</el-col>
								<el-col :xs="12" :sm="18" class="cont_box2">
									<h3>{{ cardlist.title }}</h3>
										<p>{{ cardlist.conteent }}</p>
										<p>{{"发布时间&nbsp&nbsp&nbsp&nbsp" +  cardlist.time }}</p>
								</el-col>
							</el-row>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
			
			<el-col :span="22" :offset="1" class="hidden-sm-and-up">
				<el-row>
					<el-col :xs="24" v-for="cardlist in content">
						<el-card shadow="always">
							<el-row>
								<el-col :xs="8" :sm="6">
									<img :src="'../../static/' + cardlist.imgsrc" class="image" width="100%">
								</el-col>
								<el-col :xs="16" :sm="18" class="cont_box2">
									<h3>{{ cardlist.title }}</h3>
										<p>{{ cardlist.conteent }}</p>
										<p>{{"发布时间&nbsp&nbsp&nbsp&nbsp" +  cardlist.time }}</p>
								</el-col>
							</el-row>
						</el-card>
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
				content: [
					{
					id: 1,
					title: '亚马逊收购云服务公司Amiato',
					conteent: '亚马逊一直以其公有云服务AWS在市场上跑，而根据彭博社的报道，它于去年收购了一家初创公司Amiato。约三年前，Amiato创建了一个可存储及查询的云数据库服务，它能与当时Teradata等公司昂贵的硬件及软件服务竞争。但就在Amiato发布自己服务的前两个月，亚马逊发…',
					time: '2018-05-22 10:22',
					imgsrc:'_jhh1w473.png'
				},
					{
					id: 1,
					title: '亚马逊收购云服务公司Amiato',
					conteent: '亚马逊一直以其公有云服务AWS在市场上跑，而根据彭博社的报道，它于去年收购了一家初创公司Amiato。约三年前，Amiato创建了一个可存储及查询的云数据库服务，它能与当时Teradata等公司昂贵的硬件及软件服务竞争。但就在Amiato发布自己服务的前两个月，亚马逊发…',
					time: '2018-05-22 10:22',
					imgsrc:'_jhh1y6xo.png'
				},
					{
					id: 1,
					title: '亚马逊收购云服务公司Amiato',
					conteent: '亚马逊一直以其公有云服务AWS在市场上跑，而根据彭博社的报道，它于去年收购了一家初创公司Amiato。约三年前，Amiato创建了一个可存储及查询的云数据库服务，它能与当时Teradata等公司昂贵的硬件及软件服务竞争。但就在Amiato发布自己服务的前两个月，亚马逊发…',
					time: '2018-05-22 10:22',
					imgsrc:'_jhh20v4a.png'
				},
					{
					id: 1,
					title: '亚马逊收购云服务公司Amiato',
					conteent: '亚马逊一直以其公有云服务AWS在市场上跑，而根据彭博社的报道，它于去年收购了一家初创公司Amiato。约三年前，Amiato创建了一个可存储及查询的云数据库服务，它能与当时Teradata等公司昂贵的硬件及软件服务竞争。但就在Amiato发布自己服务的前两个月，亚马逊发…',
					time: '2018-05-22 10:22',
					imgsrc:'_jhh23mv2.png'
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

.content{
	margin: 50px auto;
}
	.secondpage_con {
		margin: 150px auto;
	}
	.cont_box2{
		text-align: left;
		padding-left: 20px;
	}
	.cont_box2 p{
		color: #BBBBBB;
		font-size: 14px;
	}
	.el-card{
		margin-top: 20px;
	}
</style>

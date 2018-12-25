<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con">
						<h2>解决方案</h2>
						<p>拥有全球领先，安全的云计算产品</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<el-row class="content">
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24">
						<h1>我们提供一站式云解决方案</h1>
						<p>帮助用户实现跨公有云和私有云管理的整体方案，无论用户使用企业私有云平台、公有云平台</p>
					</el-col>
					<el-col class="hidden-xs-only" :xs="12" :sm="6" v-for="itemlist in content" :key="itemlist.id">
						<div class="con_item">
							<img :src="'../../static/' + itemlist.imgsrc" alt="" width="50%">
							<h3>{{itemlist.title}}</h3>
							<p>{{itemlist.content}}</p>
						</div>
					</el-col>
					<el-col class="hidden-sm-and-up" :xs="12" :sm="6" v-for="itemlist in content" :key="itemlist.title">
						<div class="con_item">
							<img :src="'../../static/' + itemlist.imgsrc" alt="" width="50%">
							<h5>{{itemlist.title}}</h5>
							<p>{{itemlist.content}}</p>
						</div>
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
				content:[
					{id:1,
					title:'数据中心迁移',
					content:'数据中心整合就是像城市改造一样，通过对老旧数据中心改造',
					imgsrc:'1587_jh5v8edu.jpg'},
					{id:2,
					title:'Microsoft企业应用',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望 .',
					imgsrc:'1587_jh5v8k54.jpg'},
					{id:3,
					title:'储存备份',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望 .',
					imgsrc:'1587_jh5v9sp1.jpg'},
					{id:4,
					title:'区块链部署',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望 .',
					imgsrc:'1587_jh5v86e8.png'},
					{id:5,
					title:'游戏解决方案',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望',
					imgsrc:'1587_jh5vrcuo.png'},
					{id:6,
					title:'医疗解决方案',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望',
					imgsrc:'1587_jh5vx8j6.png'},
					{id:7,
					title:'音视频解决方案',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望',
					imgsrc:'1587_jh5vz2kw.png'},
					{id:8,
					title:'网站建设解决方案',
					content:'用最好的服务 , 服务信任我们的用户 . 不让用户感到失望',
					imgsrc:'1587_jh5w1woi.png'}
				]
			};
		},
		created() {
			this.workTask = this.$route.query.id
			// console.log(this.workTask)
		}

	}
</script>

<style scoped>
	.content h1,.content h3,.content h5,.content p{
		color: #000000;
	}
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
	.content{
		margin:80px auto ;
	}
	.content .el-col{
		overflow: hidden;
		/* border: 1px solid #F0F2F5; */
	}
	.con_item{
		box-sizing: border-box;
		max-height: 260px;
		max-width: 270px;
		overflow: hidden;
		border: 1px solid #F0F2F5;
		margin: 20px;
		padding: 3px;
	}
	.con_item p{
		font-size: 12px;
		color: #666666;
		display: inline-block;
		overflow: hidden;
		max-height: 32px;
	}
	.con_item h3,.con_item h5{
		white-space: nowrap;
	}
</style>

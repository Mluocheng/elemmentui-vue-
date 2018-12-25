<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con">
						<h2>{{navlist[workTask-1].title}}</h2>
						<p>{{navlist[workTask-1].content}}</p>
						
						<input type="text" v-model="workTask" />
					</div>
				</el-col>
			</el-row>
			<!-- 内容 -->
		
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				workTask: [],
				navlist: [{
					title: '关于我们',
					id: 1,
					content:'拥有全球领先，安全的云计算产品'
				},
				{
					title: '解决方案',
					id: 2,
					content:'拥有全球领先，安全的云计算产品'
				},
				{
					title: '客户案例',
					id: 3,
					content:'拥有全球领先，安全的云计算产品'
				},
				{
					title: '新闻资讯',
					id: 4,
					content:'拥有全球领先，安全的云计算产品'
				},
				{
					title: '联系我们',
					id: 5,
					content:'拥有全球领先，安全的云计算产品'
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
</style>

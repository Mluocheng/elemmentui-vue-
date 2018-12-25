<template>
	<div class="secondpage">
		<div class="title_top">
			<el-row :gutter="20">
				<el-col :span="16" :offset="4">
					<div class="secondpage_con">
						<h2>客户案例</h2>
						<p>拥有全球领先，安全的云计算产品</p>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<el-row class="content">
			<el-col :span="16" :offset="4">
				<el-row>
					<el-col :xs="24" :sm="6" v-for="cardboxlist in content">

						<div class="box_cont">
							<el-card shadow="hover">
								<img :src="'../../static/' + cardboxlist.imgsrc" alt="" width="60%">
								<h3>{{cardboxlist.title}}</h3>
								<p>{{cardboxlist.content}}</p>
							</el-card>

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
				content: [{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1gjiv.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1gjj0.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1gjk9.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1gjiv.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1gjka.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1h43c.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1hc2z.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
					},
					{
						id: 1,
						title: '天下伍迪有限集团公司',
						imgsrc: '1587_jhh1gjiv.png',
						content: '提莫西·查拉梅在美国纽约市地狱厨房长大，童年时期在法国度过夏天，法语是他的第二语言。13岁时在法国小镇的足球训练营担任教练，负责教导6岁到10岁的小孩。由于法国文化的影响，他最初的梦想是想成为足球员。在提莫西·查拉梅正式作为演员在荧幕亮相之前，他在童年出演过几只'
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

	.content {
		margin: 50px auto;
	}

	.content h2,
	.content h3,
	.content p {
		color: #000000;
	}

	.content p {
		font-size: 14px;
		color: #475669;
	}

	.box_cont {
		padding: 10px;
		margin: 10px;
		
	}
</style>

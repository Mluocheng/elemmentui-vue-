<template>
	<div class="hello">
		<el-row>
			<el-col :xs="24">
				<div class="box1">
					<el-row :gutter="20">
						<el-col :xs="24" :sm="16">
							<el-carousel indicator-position="outside" :interval="5000">
								<el-carousel-item v-for="item in box1" :key="item.title">
									<div class="bannerbox animated">
										<h3>{{ item.title }}</h3>
										<p>{{item.content}}</p>
										<el-button type="primary" round>
											<router-link :to="{path:'/solution',query: {id: 2}}">了解详情</router-link> 
											</el-button>
									</div>
								</el-carousel-item>
							</el-carousel>
						</el-col>
						<el-col :xs="0" :sm="8"></el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<div class="box2">
				<el-col :span="20" :offset="2">
					<el-row class="box2_row">
						<el-col :xs="24" :sm="12">
							<div class="box2_contentleft animated">
								<p class="box2_title"><span>关于</span><span>云计算（国际）建站有限公司</span></p>
								<p>云计算（cloud
									computing）是基于互联网的相关服务的增加、使用和交付模式，通常涉及通过互联网来提供动态易扩展且经常是虚拟化的资源。云是网络、互联网的一种比喻说法。过去在图中往往用云来表示电信网，后来也用来表示互联网和底层基础设施的抽象。</p>
							</div>
						</el-col>
						<el-col :xs="24" :sm="12">
							<div class="box2_contentright animated">
								<img src="../assets/3917_jdbbi4ow.png" alt="">
							</div>
						</el-col>
					</el-row>
					<el-row class="box2_row">
						<el-col :xs="24" :sm="12">
							<div class="box2_contentleft1 animated">
								<img src="../assets/3917_jdbbkb3z.png" alt="">
							</div>
						</el-col>
						<el-col :xs="24" :sm="12">
							<div class="box2_contentright1 animated">
								<p class="box2_title"><span>一站式的</span><span>云计算服务</span></p>
								<p>云计算环境下，软件开发工具、环境、工作模式发生了转变，也就要求软件测试的工具、环境、工作模式也应发生相应的转变。</p>
								<div class="box2_contentleft1_down animated">
									<el-row type="flex" justify="space-around">
										<el-col :span="4">
											<img style="width: 50px;" src="../assets/3917_jdbbqs8p.png" alt="">
											<p class="pic_title">云物联</p>
										</el-col>
										<el-col :span="4">
											<img style="width: 50px;" src="../assets/3917_jdbbqzdp.png" alt="">
											<p class="pic_title">云安全</p>
										</el-col>
										<el-col :span="4">
											<img style="width: 50px;" src="../assets/3917_jdbbr3wu.png" alt="">
											<p class="pic_title">云存储</p>
										</el-col>
									</el-row>
									<el-row type="flex" justify="space-around">
										<el-col :span="4">
											<img style="width: 50px;" src="../assets/3917_jdbbr8l9.png" alt="">
											<p class="pic_title">云游戏</p>
										</el-col>
										<el-col :span="4">
											<img style="width: 50px;" src="../assets/3917_jdbbrdgr.png" alt="">
											<p class="pic_title">云计算</p>
										</el-col>
										<el-col :span="4">
											<img style="width: 50px;" src="../assets/3917_jdbbrify.png" alt="">
											<p class="pic_title">云软件</p>
										</el-col>
									</el-row>
								</div>
							</div>
						</el-col>
					</el-row>
					<el-row class="box2_row">
						<el-col :xs="24" :sm="12">
							<div class="box2_contentleft2 animated">
								<p class="box2_title"><span>我们的</span><span>资质</span></p>
								<p>云计算环境下，软件开发工具、环境、工作模式发生了转变，也就要求软件测试的工具、环境、工作模式也应发生相应的转变。</p>
								<div class="box2_contentleft2_down animated">
									<el-row type="flex" justify="space-around">
										<el-col :span="6">
											<h1 class="pic_title pic_title_a">200+</h1>
											<p>超过200个客户</p>
										</el-col>
										<el-col :span="6">
											<h1 class="pic_title pic_title_a">80+</h1>
											<p>精英人员专注服务</p>
										</el-col>
										<el-col :span="6">
											<h1 class="pic_title pic_title_a">100+</h1>
											<p>资质荣誉证书</p>
										</el-col>
									</el-row>
								</div>
							</div>
						</el-col>
						<el-col :xs="24" :sm="12">
							<div class="box2_contentright2 animated">
								<img src="../assets/3917_jdbbt5g0.png" alt="">
							</div>
						</el-col>
					</el-row>
				</el-col>
			</div>
		</el-row>
		<el-row>
			<el-col :xs="24">
				<div class="box3">
					<el-row>
						<el-col :span="20" :offset="2">
							<p class="box3_title">专业精英<span>服务团队</span></p>
						</el-col>
						<el-col :span="20" :offset="2">
							<p class="box3_content">云计算环境下，软件开发工具、环境、工作模式发生了转变，也就要求软件测试的工具、环境、工作模式也应发生相应的转变。软件产品表现形式的变化，要求软件测试可以对不同形式的产品进行测试，如Web
								Services的测试，互联网应用的测试，移动智能终端内软件的测试等。</p>
						</el-col>
						<el-col :span="20" :offset="2" class="hidden-xs-only">
							<div class="animated elcarouselbox">
								<el-carousel autoplay class="box3_carousel" :interval="50000" type="card" height="500px">
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
								</el-carousel>
							</div>
						</el-col>

						<el-col :span="20" :offset="2" class="hidden-sm-and-up">
							<div class="animated elcarouselbox">
								<el-carousel autoplay class="box3_carousel" :interval="50000" type="card" height="350px">
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
									<el-carousel-item>
										<el-row><img width="30%" src="../assets/1587_jgzw6p39.png" alt=""></el-row>
										<el-row>
											<p><span>何淼</span><span>/工程师</span></p>
											<p>2010年获得一系列的荣誉证书，担任协会的会长，2010年获得一系列的荣誉证书</p>
										</el-row>
										<el-row>
											<el-button round>
												<router-link :to="{path:'/about',query: {id: 1}}">了解详情</router-link>
											</el-button>
										</el-row>
									</el-carousel-item>
								</el-carousel>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="20" :offset="2">
				<div calss="box4">
					<el-row>
						<el-col :xs="24" :sm="12" class="box4_left">
							<p class="box3_title">新闻<span>资讯</span></p>
							<p class="box3_content">更新实时的新闻，为您解答各类问题</p>
							<el-button round>
							<router-link :to="{path:'/newsandinformation',query: {id: 4}}">查看更多</router-link>
							</el-button>
						</el-col>
						<el-col :xs="24" :sm="12">
							<div style="padding: 14px;" class="animated card1">
								<el-card :body-style="{ padding: '0px' }">

									<h2>技无止境 双11核心技术大揭秘</h2>
									<span>视频主要从Tair发展和应用开始谈起，接着谈及双11面临的挑战，重点分享了性能优化方面的实给...</span>
									<div class="bottom clearfix">
										<time class="time">2017.02.02</time>
										
									</div>

								</el-card>
							</div>
							<div style="padding: 14px;" class="animated card2">
								<el-card :body-style="{ padding: '0px' }">

									<h2>技无止境 双11核心技术大揭秘</h2>
									<span>视频主要从Tair发展和应用开始谈起，接着谈及双11面临的挑战，重点分享了性能优化方面的实给...</span>
									<div class="bottom clearfix">
										<time class="time">2017.02.02</time>
										
									</div>

								</el-card>
							</div>
							<div style="padding: 14px;" class="animated card3">
								<el-card :body-style="{ padding: '0px' }">

									<h2>技无止境 双11核心技术大揭秘</h2>
									<span>视频主要从Tair发展和应用开始谈起，接着谈及双11面临的挑战，重点分享了性能优化方面的实给...</span>
									<div class="bottom clearfix">
										<time class="time">2017.02.02</time>
										
									</div>

								</el-card>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<div class="box5">
				<el-col :span="20" :offset="2">
					<el-row type="flex" justify="space-around" class="hidden-sm-and-down">
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :span="6"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
					</el-row>
					<el-row class="hidden-md-and-up"> 
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
						<el-col :xs="12"><img class="animated" src="../assets/1587_jh5ppf5t.png" alt=""></el-col>
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
				
				box1: [{
					title: '全球领先、安全的云计算',
					content: '计算、存储、网络、安全、大数据、人工智能科技助您飞跃发展'
				}, {
					title: '全云端服务，打造稳定高效IT系统',
					content: '绿色低能耗数据中心、高质量网络、超大规模分布式底层架构我们是您云服务最佳的选择'
				}]
			}
		},
		methods: {
			beforeEnter: function(val) {
				console.log(val, "before enter")
			},
			enter: function(val) {
				console.log("enter")
			},
			jqfun: function() {
						function scrollnumber(element, cssname, offset) {
							var a, b, c, d;
							d = $(element).offset().top;
							a = eval(d + offset);
							b = $(window).scrollTop();
							c = $(window).height();
							if (b + c > a) {
								$((element)).addClass((cssname));
							}
						}
			
						function scrollfun() {
							scrollnumber(".bannerbox", 'fadeInLeft slow', 100);
							scrollnumber(".box2_contentleft", 'fadeInLeft slow', 100);
							scrollnumber(".box2_contentleft1", 'fadeInLeft slow', 100);
							scrollnumber(".box2_contentleft2", 'fadeInLeft slow', 100);
			
							scrollnumber(".box2_contentleft1_down", 'fadeInUp delay-1s', 100);
							scrollnumber(".box2_contentleft2_down", 'fadeInUp delay-1s', 100);
			
							scrollnumber(".box2_contentright", 'fadeInRight slow', 100);
							scrollnumber(".box2_contentright1", 'fadeInRight slow', 100);
							scrollnumber(".box2_contentright2", 'fadeInRight slow', 100);
			
							scrollnumber(".elcarouselbox", 'slideInUp slower', 100);
			
							scrollnumber(".card1", 'slideInUp slow', 100);
							scrollnumber(".card2", 'slideInUp slow', 100);
							scrollnumber(".card3", 'slideInUp slow', 100);
			
							scrollnumber(".box5 img", 'fadeInUpBig slow', 100);
							
			
						}
			
						$(document).ready(function(e) {
							scrollfun();
							$(window).scroll(function() {
								scrollfun();
							});
						});
			
					}
			},
			/* 钩子函数 */
			beforeCreate: function() { //创建前状态

			},
			create: function() { //创建完毕状态
				
			},
			beforeMount: function() { //挂载前状态
				
			},
			mounted: function() { //挂载结束状态
				window.addEventListener('scroll', this.scrollnumber);
			},
			beforeUpdate: function() { //更新前状态

			},
			uptated: function() { //更新完成状态

			},
			beforeDestroy: function() { //销毁前状态

			},
			destroyed: function() { //销毁完成状态

			}
		}

		
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	a {
		color: #42b983;
	}

	/* box1 */
	.box1 {
		margin: 0;
		height: 800px;
		width: 100%;
		background: url(../assets/3917_jdbaxb26.jpg) no-repeat center center;
		overflow: hidden;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.box1 .el-row {
		padding-top: 150px;
	}

	.box1 a:-webkit-any-link{
		color: #FFFFFF;
	}

	/* box2 */
	.box2 {
		width: 100%;
		overflow: hidden;
		margin: 0;
		color: #000000;
		background: url(../assets/3917_jdbbe20e.png) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.box2 .box2_row {
		margin: 100px auto;
	}

	.box2 .el-main {
		line-height: 10px;

	}

	.box2 img {
		width: 80%;
	}

	.box2 .box2_title span {
		font-size: 24px;
		color: #CF9236;
		font-weight: 700;
	}

	.box2 .box2_title span:first-child {
		color: #000000;
	}

	.box2 .box2_list,
	.box2 .box2_list li {
		float: left;
		margin: 20px 42px;
	}

	.pic_title {
		color: #CF9236;
	}

	.pic_title_a {
		font-size: 30px;
		font-weight: 800;
	}

	.box2 p {
		color: #000000;
	}

	/* box3 */
	.box3 {
		padding-top: 200px;
		width: 100%;
		overflow: hidden;
		margin: 0;
		color: #FFFFFF;
		background: url(../assets/1587_jgzx3s67.png) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.box3 .box3_title {
		font-size: 30px;
		font-weight: 600;
		color: #FFFFFF;
	}

	.box3 .box3_title span {
		color: #CF9236;
	}

	.box3 .box3_content {}

	.box3 .box3_carousel {
		margin-top: 50px;
	}

	.box3 .el-carousel__mask {
		opacity: 0;
		border-radius: 10px;
	}

	.box3 .el-carousel__item {
		background-color: #FFFFFF;
		border-radius: 10px;
		color: #000000;
	}

	.box3 .el-carousel__item button {
		border: #5a8e8e;
		color: #5a8e8e;
	}

	.box3 .el-carousel__item .el-row {
		padding-top: 30px;
	}

	/* box4 */
	.box4 {
		padding-top: 50px;
	}

	.box4_left {
		padding-top: 100px;

	}

	.box4_left p {
		color: #000000;
	}

	.box4_left p span {
		color: #CF9236;
	}

	.el-card {
		/* margin: 30px auto; */
	}

	/* box5 */
	.box5 {
		padding-top: 358px;
		padding-bottom: 50px;
		width: 100%;
		overflow: hidden;
		margin: 0;
		color: #FFFFFF;
		background: url(../assets/1587_jgzx3s67.png) 100% 100% no-repeat;
		background-position: 0 -10%;
	}

	.box5 img {
		width: 80%;
	}

	
</style>

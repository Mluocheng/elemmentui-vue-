<template>
	<div class="title">
		<div class="container_table">
			<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%;"
			 :default-sort="{prop: 'date',order:'descending'}">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="appname" label="APP名称"  width="180"></el-table-column>
				<el-table-column prop="apkname" label="包名"></el-table-column>
				<el-table-column prop="type"  label="类型"></el-table-column>
				<el-table-column prop="comp_name"  label="运营企业名称"></el-table-column>
				<el-table-column prop="type_number"  label="版本号"></el-table-column>
				<el-table-column prop="update_date"  label="更新时间"></el-table-column>
				<el-table-column prop="download_num"  label="下载量(万)"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="primary" icon="el-icon-star-on" v-if="istag" @click="switchChange"></el-button>
						<el-button type="primary" icon="el-icon-star-off" v-else="!istag" @click="switchChange"></el-button>
					</template>
				</el-table-column>
			 </el-table>
			<el-pagination class="fy" layout="prev, pager, next" @current-change="current_change" :total="total" background>
			</el-pagination>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'list11',
		data() {
			return {
				total: 500, //默认数据总数
				pagesize: 5, //每页的数据条数
				currentPage: 1, //默认开始页面
				istag: true,
				input: "",
				input21: '',
				value5: [],
				tableData: [
					{
						appname: '1喵喵直播',
						apkname: '1bdkdl',
						type: '3视频直播',
						comp_name: '1广大科技公司',
						type_number: '1V1.2',
						update_date: '12016-05-02',
						download_num: '123.6'
					},
					{
						appname: '2喵喵直播',
						apkname: '2bdkdl',
						type: '2视频直播',
						comp_name: '2广大科技公司',
						type_number: '2V1.2',
						update_date: '22016-05-02',
						download_num: '223.6'
					},
					{
						appname: '3喵喵直播',
						apkname: '1bdkdl',
						type: '3视频直播',
						comp_name: '3广大科技公司',
						type_number: '3V1.2',
						update_date: '32016-05-02',
						download_num: '323.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
					{
						appname: '4喵喵直播',
						apkname: '4bdkdl',
						type: '4视频直播',
						comp_name: '4广大科技公司',
						type_number: '4V1.2',
						update_date: '42016-05-02',
						download_num: '423.6'
					},
				]
			};
		},
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex === 0) {
					return 'th';
				}
				return '';
			},
			switchChange() {
				this.istag = !this.istag;

			},
			created: function() {
				this.total = this.tableData.length;
				console.log(tableData.length)
			},
			current_change: function(currentPage) {
				this.currentPage = currentPage;
			}
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		color: #000000;
	}
</style>

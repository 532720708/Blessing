<template>
	<view class="content">
		<scroll-view @touchmove.prevent>
			<view class="all">
				<view class="filter-view flex-row-nowrap">
					<view class="nearby flex-row-nowrap col-center" :class="filterType == 'nearby' ? 'red' : ''">
						<view>附近</view>
						<i @tap="chooseFilterType('nearby')" :class="filterType == 'nearby' ? 'up' : 'down'"></i>
					</view>
					<view class="intel-sort flex-row-nowrap col-center" :class="filterType == 'smart' ? 'red' : ''">
						<view>智能排序</view>
						<i @tap="chooseFilterType('smart')" :class="filterType == 'smart' ? 'up' : 'down'"></i>
					</view>
					<view class="filter flex-row-nowrap col-center" :class="filterType == 'filter' ? 'red' : ''">
						<view>筛选</view>
						<i @tap="chooseFilterType('filter')" :class="filterType == 'filter' ? 'up' : 'down'"></i>
					</view>
				</view>
				<view class="spilt">
				</view>
				
				<scroll-view scroll-y class="condition-scroll">
					<view v-if="filterType == 'nearby'">
						<view class="flex-row-nowrap">
							<view class="filter-by-region flex-col-nowrap">
								<view @tap="chooseNearby()" :class="condition == 'nearby' ? 'red' : ''">附近</view>
								<view @tap="filterTemple(filterType, '全城')" :class="condition == '全城' ? 'red' : ''">全城</view>
								<view v-for="(r, index) in regions" :key="index" class="region-item" :class="condition == r.name ? 'red' : ''" 
									@tap="filterTemple(filterType, r.name)">{{r.name}}</view>
							</view>
							<view class="filter-by-dis flex-col-nowrap" v-if="showDis">
								<view>附近</view>
								<view v-for="(dis, index) in distants" :key="index" class="dis-item" :class="distance == dis ? 'red' : ''"
									@tap="filterTemple(filterType, dis)">{{dis}}</view>
							</view>
						</view>
					</view>
					<view v-if="filterType == 'smart'">
						<view class="filter-by-smart flex-col-nowrap">
							<view @tap="filterTemple(filterType, '智能排序')" :class="sType == '智能排序' ? 'red' : ''">智能排序</view>
							<view @tap="filterTemple(filterType, '离我最近')" :class="sType == '离我最近' ? 'red' : ''">离我最近</view>
						</view>
					</view>
					
					<view v-if="filterType == 'filter'">
						<view class="filter-block flex-row-wrap">
							<view v-for="(t, index) in conditions" :key="index" class="condition" :class="{'active':t.active}"
								@tap="filterByBlessType(t,index)">
								{{t.type}}
							</view>
						</view>
					</view>
				</scroll-view>	
			</view>
			
			<view v-if="filterType == 'filter'" class="choose-view flex-row-nowrap">
				<view class="reset" @tap="reset()">重置</view>
				<view class="finish" @tap="commit()">完成</view>
			</view>
		</scroll-view>
		

		
		
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		// 有三种选择方式，fliterType表示：
		// nearby: 按区域  smart: 排序方式（智能或者最近） filter: 按寺庙类型筛选
		props: ['filterType', 'sortType'],
		data() {
			
			return {
				arrow: "down",
				regions: [{name: '江宁区'},
						{name: '鼓楼区'},
						{name: '玄武区'},
						{name: '建邺区'},
						{name: '秦淮区'},
						{name: '栖霞区'},
						{name: '六合区'},
						{name: '雨花台区'},
						{name: '浦口区'},
						{name: '高淳区'},
						{name: '溧水区'}
						],
				distants: ['500m', '1km', '3km', '5km', '10km'],
				conditions: [{type:'求财'}, {type:'求子'}, {type: '求平安'}, {type:'求学业'}, {type: '求姻缘'}],
				showDis: false,
				condition: '',
				distance: '',
				curTypes: '',
				sType: ''
			}
		},
		beforeMount() {
		  this._close = e => {
		    // 如果点击发生在当前组件内部，则不处理
		    if (this.$el.contains(e.target)) {
		      return;
		    }
		    this.$emit('hide');
		  };  
		  document.body.addEventListener('click', this._close);
		},
		beforeDestroy() {
		  document.body.removeEventListener('click', this._close);  
		},
		mounted() {
			this.sType = this.sortType
		},
		methods:{
			chooseFilterType(type) {	
				if(this.filterType != type) {
					this.filterType = type
					return
				}
				// 点击上箭头跳出
				this.$emit('hide')
			},
			chooseNearby() {
				this.showDis = true
				this.condition = 'nearby'
			},
			// 按照区域或排序
			filterTemple(type, c) {
				let _this = this
				
				if('nearby' == type) {
					// 按距离
					if(c.indexOf("m") != -1) {
						_this.distance = c
						this.closeAndFilter(_this.distance)
					} else { // 按区
						_this.condition = c
						this.closeAndFilter(_this.condition)
					}
					
				} else if('smart' == type){
					_this.sType = c
					this.closeAndFilter(_this.sType)
				}
				
			},
			// 按照祈福类型筛选
			filterByBlessType(item,index) {
				if(item.active){
					Vue.set(item,'active',false)  //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法
					var i = this.curTypes.indexOf(item.name)
					if(i != -1) {
						this.curTypes.splice(i, 1)
					}
				}else{
				    Vue.set(item,'active',true)
					this.curTypes.push(item.type)
				}
			},
			// 重置
			reset() {
				let _this = this
				for(var i = 0; i < _this.conditions.length; i++) {
					_this.conditions[i].active = false 
				}
			},
			// 完成
			commit() {
				this.closeAndFilter(this.curTypes)
			},
			// 关闭弹层，传递条件
			closeAndFilter(con) {
				this.$emit('hide', this.filterType, con)
			}
		}
	}
</script>

<style lang="scss">
	page {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	.all {
		width: 100%;
		height: auto;
		background: #FFFFFF;
		padding-bottom: 50upx;
		.spilt {
			margin-left: 5%;
			width: 90%;
			border-top: 1upx solid #bfbfbf;
		}
	}
	.filter-view {
		width: 750upx;
		height: 95upx;
		background: #FFFFFF;
		font-size: 32upx;
		justify-content: space-around;
		align-items: center;
		font-weight: 500;
	}
	
	// 附近
	.filter-by-region, .filter-by-dis, .filter-by-smart {
		margin-left:60upx;
		margin-top: 10upx;
		view {
			width: 150upx;
			height: 80upx;
			text-align: left;
			line-height: 80upx;
			font-size: 32upx;
		}
	}
	
	// 筛选
	.condition {
		margin-left: 38upx;
		width: 140upx;
		height: 60upx;
		font-size: 30upx;
		text-align: center;
		line-height: 60upx;
		background-color: #f6f6f6;
		margin-top: 40upx;
		border-radius: 10upx;
	}
	
	.choose-view {
		background-color: #FFFFFF;
		view {
			text-align: center;
			width: 50%;
			height: 100upx;
			line-height: 100upx;
			font-size: 35upx;
			border: 1upx solid #bfbfbf;
		}
		.reset {
			border-left: 0upx;
		}
		.finish {
			border-right: 0upx;
			border-left: 0upx;
		}
	}
	
	.filter-block {
		width: 100%;
		height: auto;
	}
	
	.condition-scroll {
		max-height: 800upx;
	}
	
	
	// 箭头
	i {
		width: 15upx;
		height: 15upx;
		//background: #000000;
		border: solid #000000;
		border-width: 0 4upx 4upx 0;
		display: inline-block;
		padding: 1upx;
		margin-left: 15upx;
		margin-top: 8upx;
	}
	
	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
	
	.up {
		transform: rotate(225deg);
		-webkit-transform: rotate(225deg);
		margin-top: 15upx;
	}
	
	// 当前操作标红
	.red {
		color: #ed2000;
		i {
			border-color: #ed2000;
		}
	}
	
	// blessType选中样式
	.active {
		color: #bf7938;
		background: #ffefe0;
	}
</style>

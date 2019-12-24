<template>
	<view>
		<navTop class="stickyTop" :showTempleIcon="false" :showSearch="false" :navTitle="navTitle" :backStyle="navBackStyle"></navTop>
			
		<!-- 原文 -->
		<view class="source-text">
			<view class="source-title">
				<image class="source-nav-back" src="../../static/buddhist/yuanjiao.png" ></image>
				<view class="source-nav-txt aside-title-font">原文</view>
			</view>
			<view class="soruce-main main-txt-font">{{sourceTxt}}</view>
		</view>
		
		<view class="translation-text">
			<view class="source-title">
				<image class="source-nav-back" src="../../static/buddhist/yuanjiao.png" ></image>
				<view class="source-nav-txt aside-title-font">译文</view>
			</view>
			<view class="translation-main main-txt-font">{{translation}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				navTitle: "心经",
				navBackStyle: "whiteback",
				sourceTxt:`观自在菩萨，行深波若波罗密多时，照见五欲皆空，度一切苦厄。舍利子色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。
					舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界  无无明，亦无无明尽，乃至无老死
					亦无老死尽，无苦集灭道，无智亦无得，以无所得故。菩提萨坨，依波若波罗密多故，心无挂碍，无挂碍故，无有恐怖，远离颠倒梦想，究竟涅磐。
					三世诸佛，依波若波罗密多故，得阿耨多罗三藐三菩提。故知波若波罗密多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚
					故说波若波罗密多咒，即说咒曰，揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。`,
				translation: `观世音菩萨，修习深妙般若，功行到了极其深妙的时候，观照彻见五蕴都是因缘和合的，并没有自性，当体即空，除去了造业受苦的根源而无有烦恼，因而得以度脱一切烦恼生死之苦厄。
					舍利弗！世间存在的（色）本来就与空不是异质的，作为存在之底蕴的空也与任何物质形式没有什么不同。那么物质的本体就是空，空的现象就是物质。人的受、想、行、识也应该看作是这种“色”与“空”的统一。
					舍利弗！这些五蕴等一切诸法，都是因缘和合的，当体即是空相，本来没有所谓缘聚为生，和缘尽为灭；不因被恶的因缘所染而变为垢，亦不为善的因缘所熏习而成净，也不是悟时为增，迷时为减的虚妄之相。
					因此从根本上看，这个空之中并没有物质之色，并没有感受、想象、意志和意识，也没有作为认知活动依据的眼、耳、鼻、舌、身、意官能，也不存在那作为六种认识官能的对象的色、声、香、味、触、法，也没有能见之眼根，
					乃至于没有别尘境之意根；也没有作为认知所得的六种意识。没有无明，也没有灭尽的无明，甚至于没有老死，也没有灭尽的老死。也即没有知苦、断集、修道、证灭的圣教实践过程；没有根本的般若智慧，也没有凭借此智慧所证的佛果或者所求的境界。
					由于并不存在所证之果，所以菩萨依止般若波罗密多的胜妙法门修行，而不再有牵挂滞碍。因为没有牵挂滞碍，所以不再有恐怖畏惧。因而远离了关于一切事物的颠倒和幻想，达到了究竟的涅槃。十方三世所有的佛世尊，
					也都是如此依止般若波罗密多的胜妙法门修行，而证得无上正等正觉圆满佛果。所以，确知般若波罗密多是一种大神力的咒，是一种具有大光明的咒，是一种至高无上的咒，是一种绝对无与伦比的咒，它能解除世间一切众生的苦难，这是的的确确的事实。
					所以，在这里宣说般若波罗密多的总持法门，也就是宣说如下咒语：揭谛，揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。`
					
			}
		},
		onLoad(data) {
			var _this = this
			var bName = data.bName
			_this.navTitle = bName  
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f5f5f5;
	}
	// 解决fixed布局脱离文档流遮挡下面内容
	.empty-view {
		width: 100%;
		height: 120upx;
	}
	
	.source-text {
		padding-bottom: 25upx;
		background: #FFFFFF;
		margin-top: 15upx;
		width: 100%;
		height: auto;

		
	}
	.translation-text {
		padding-bottom: 25upx;
		background: #FFFFFF;
		width: 100%;
		height: auto;
		margin-top: 20upx;
	}
	
	// 侧边标题
	.source-title {
		width: 50%;
		height: 130upx;
		position: relative;
		line-height: 155upx;	
		.source-nav-back {
			width: 145upx;
			height: 55upx;
		}
		.source-nav-txt {
			position: absolute;
			top: -16upx;
			left: 50upx;
		}
	}
	
	
	// 小标题字体
	.aside-title-font {		
		font-size: 35upx;
		color: rgb( 255, 255, 255 );
		font-weight: 520;
		z-index: 100;
	}
	
	// 文章字体
	.main-txt-font {
		text-align: justify;
		margin: auto 48upx;
		font-size: 33upx;
		text-indent: 60upx;
		line-height: 60upx;
	}
</style>

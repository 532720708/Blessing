<template>
	<view>
		<view class="loading">
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	.loading {
	
	    border: 8upx solid #f3f3f3;
	
	    border-radius: 50%;
	
	    border-top: 8upx solid #f6c791;
	
	    width: 40upx;
	
	    height: 40upx;
	
	    -webkit-animation: spin 1.2s linear infinite;
	
	    animation: spin 1.2s linear infinite;
	
	   }   
	
	   @-webkit-keyframes spin {
	
	    0% {
	
	     -webkit-transform: rotate(0deg);
	
	    }
	
	    100% {
	
	     -webkit-transform: rotate(360deg);
	
	    }
	
	   }   
	
	   @keyframes spin {
	
	    0% {
	
	     transform: rotate(0deg);
	
	    }
	
	    100% {
	
	     transform: rotate(360deg);
	
	    }
	
	   }
</style>

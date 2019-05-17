<template>
	<div :style = 'content'> 
		<div :style="content_left">
				<ul ref='conts'>
					<li :style='li' class='lis'>0</li>
					<li :style='li'>1</li>
					<li :style='li'>2</li>
					<li :style='li'>3</li>
				</ul>
		</div>
		<div :style="content_right">
			<div :style="content_center" ref='content_center'>

			</div>
		</div>
	</div>
</template>
<script>
import {drag} from "./app.js";
export default{
	name:"demo1",
	data(){
		return{
			content:{
				position:"fixed",
				width:"100%",
				height:"100%",
				display:"flex",
				flexDirection:"row",
			},
			content_left:{
				width: "200px",
				height: "100%",
			},
			content_right:{
				height: "100%",
				position: "fixed",
				right: 0,
				left: "200px",
				top: 0,
				bottom:0,
				border: "1px solid black",
			},
			content_center:{
				width:"375px",
				position: "fixed",
				top: 0,
				bottom: 0,
				marginLeft: "200px",
				border: "1px solid black",
				overflowY: "scroll",
			},
			li:{
				width: "100%",
				height: "100px",
				margin: "20px 0",
				lineHeight: "100px",
				background: "#eeeeee",
				// userSelect:"none",
			}
		}
	},
	methods:{ 
		
	},
	mounted(){
		this.$nextTick(()=>{
			let conts = this.$refs.conts;
			let content_center = this.$refs.content_center;
			new drag(conts,content_center);
		})
	}
}
</script>
<style>
*{
	padding: 0;
	margin: 0;
	user-select: none;
}

</style>
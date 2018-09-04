<template>
 <div id="body">
<div class="starFlick">*</div>
<div id="stars">
	<div class="star"></div>
	<div class="star pink"></div>
	<div class="star blue"></div>
</div>
<div class="wrap">
	<div class="cube">
		<div class="out-front"><img class="amy-img" :src="images[0]"/></div>
		<div class="out-back"><img class="amy-img" :src="images[1]"/></div>
		<div class="out-left"><img class="amy-img" :src="images[2]"/></div>
		<div class="out-right"><img class="amy-img" :src="images[3]"/></div> 
		<div class="out-top"><img class="amy-img" :src="images[4]"/></div>
		<div class="out-bottom"><img class="amy-img" :src="images[5]"/></div>

		<span class="in-front"><img class="inner-amy-img" :src="images[6]"/></span>
		<span class="in-back" ><img class="inner-amy-img" :src="images[7]"/></span>
		<span class="in-left"><img class="inner-amy-img" :src="images[8]"/></span>
		<span class="in-right"><img class="inner-amy-img" :src="images[9]"/></span>
		<span class="in-top"><img class="inner-amy-img" :src="images[10]"/></span>
		<span class="in-bottom"><img class="inner-amy-img" :src="images[11]"/></span>
	</div>
</div>

	
</div>
</template>

<script>
  //import psbe0 from'../images/psbe (0).jpg'
  export default {
    name: 'd3Box',
    data () {
      return {
       
      }
    },
    props: {
      images:{
		  type:Array,
		  default:()=>[]
	  }
    },
    methods: {
     
    },
    created () {
      console.log("props",this.images)
    },
    mounted(){
        var stars = document.getElementById('body')
        // js随机生成星
        for (var j=0;j<100;j++) {
            var number = randomDistance(10000,500)
            setTimeout(function () {
                var newStar = document.createElement("div")
                newStar.className = "starFlick"
                newStar.style.fontSize=randomDistance(20, 10)+"px"
                newStar.style.top = randomDistance(500, -100) + 'px'
                newStar.style.left = randomDistance(1300, 100) + 'px'
                newStar.innerHTML="*"
                stars.appendChild(newStar)
            }, number)
        }
        // 封装随机数方法
        function randomDistance (max, min) {
            var distance = Math.floor(Math.random() * (max - min + 1) + min)
            return distance
        }
    }
  }
</script>

<style scoped>
  *{
	margin:0 auto;
	padding:0;
}
.starFlick {
	color: #ffffff;
	position: absolute;
	animation: starFlick 0.8s ease-out infinite;
	-webkit-animation: starFlick 0.8s ease-out infinite;
}
@keyframes starFlick {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
.star {
	display: block;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: #FFF;
	top: 100px;
	left: 100px;
	position: relative;
	transform-origin: 100% 0;
	animation: star-ani 4s linear infinite;
	-webkit-animation:star-ani 5s linear infinite;
	box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
	opacity: 0;
	z-index: 2;
}
.star:after {
	content: '';
	display: block;
	top: 0px;
	left: 4px;
	border: 0px solid #fff;
	border-width: 0px 90px 2px 90px;
	border-color: transparent transparent transparent rgba(255, 255, 255, .3);
	transform: rotate(-45deg) translate3d(1px, 3px, 0);
	box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
	transform-origin: 0% 100%;
}
.pink {
	top: 100px;
	left: 400px;
	background: #fff;
	animation-delay: 3s;
	-webkit-animation-delay: 3s;
	-moz-animation-delay: 3s;
}
.pink:after {
	border-color: transparent transparent transparent #fff;
	animation-delay: 3s;
	-webkit-animation-delay: 3s;
	-moz-animation-delay: 3s;
}
.blue {
	top: 120px;
	left: 200px;
	background: #ffffff;
	animation-delay: 2s;
	-webkit-animation-delay: 2s;
	-moz-animation-delay: 2s
}
.blue:after {
	border-color: transparent transparent transparent #ffffff;
	-webkit-animation-delay: 2s;
	-moz-animation-delay: 2s;
	animation-delay: 2s;
}
@keyframes star-ani {
	0% {
		opacity: 0;
		transform: scale(0) translate3d(0, 0, 0);
	}
	20%{
		opacity: 0.8;
		transform: scale(0.2) translate3d(-100px, 100px, 0);
	}
	40% {
		opacity: 0.8;
		transform: scale(0.4) translate3d(-200px, 200px, 0);
	}
	60% {
		opacity: 0.8;
		transform: scale(0.6) translate3d(-300px, 300px, 0);
	}
	80% {
		opacity: 1;
		transform: scale(1) translate3d(-350px, 350px, 0);
	}
	100% {
		opacity: 1;
		transform: scale(1.2) translate3d(-400px, 380px, 0);
	}
}
@keyframes rotate{
	0%{
		transform:rotateX(0deg) rotateY(0deg);
	}
	100%{
		transform:rotateX(360deg) rotateY(360deg);
	}
}
html{
	background:#000000;
	height:100%;
}
.wrap{
	margin-top:200px;
	perspective: 1000px; /* 视图距元素的距离 相当于摄像机 */
}
.cube{
	width:200px;
	height:200px;
	position:relative;
	color:#fff;
	font-size:36px;
	font-weight:bold;
	text-align:center;
	line-height:200px;
	transform-style:preserve-3d; /* 默认flat 2D */
	transform:rotateX(-30deg) rotateY(-70deg); 
	animation:rotate 20s infinite linear; /*播放时间 播放次数为循环 缓动效果为匀速 */
}
.cube > div{
	width:100%;
	height:100%;
	border:1px solid #fff;
	position:absolute;
	background-color:#333;
	opacity:.6;
	transition:transform 0.4s ease-in;
}
.cube .out-front{
	transform: translateZ(100px);
}
.cube .out-back{
	transform: translateZ(-100px) rotateY(180deg);
}
.cube .out-left{
	transform: translateX(-100px) rotateY(-90deg);
}
.cube .out-right{ 
	transform: translateX(100px) rotateY(90deg);
}
.cube .out-top{
	transform: translateY(-100px) rotateX(90deg);
}
.cube .out-bottom{
	transform: translateY(100px) rotateX(-90deg);
}
.amy-img{
	width:100%;
	height:100%;
}
.cube > span{
	display:block;
	width:100px;
	height:100px;
	border:1px solid black;
	background-color:#999;
	position:absolute;
	top:50px;
	left:50px;
}
.cube .in-front{
	transform: translateZ(50px);
}
.cube .in-back{
	transform: translateZ(-50px) rotateY(180deg);
}
.cube .in-left{
	transform: translateX(-50px) rotateY(-90deg);
}
.cube .in-right{
	transform: translateX(50px) rotateY(90deg);
}
.cube .in-top{
	transform: translateY(-50px) rotateX(90deg);
}
.cube .in-bottom{
	transform: translateY(50px) rotateX(-90deg);
}
.inner-amy-img{
	position: absolute;
	width:100px;
	height:100px;
	left:0;
	top:0;
   
}
.wrap:hover .out-front{
	transform: translateZ(200px);
}
.wrap:hover .out-back{
	transform: translateZ(-200px) rotateY(180deg);
}
.wrap:hover .out-left{
	transform: translateX(-200px) rotateY(-90deg);
}
.wrap:hover .out-right{
	transform: translateX(200px) rotateY(90deg);
}
.wrap:hover .out-top{
	transform: translateY(-200px) rotateX(90deg);
}
.wrap:hover .out-bottom{
	transform: translateY(200px) rotateX(-90deg);
}
</style>
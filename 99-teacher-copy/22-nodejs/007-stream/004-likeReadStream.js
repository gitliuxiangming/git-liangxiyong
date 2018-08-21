/*
* @Author: TomChen
* @Date:   2018-07-23 16:06:13
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-23 16:25:11
*/
const EventEmitter = require('events');

class LikeReadableStream extends EventEmitter{
	constructor(data,offsetLength){
		super();
		this.data = data;
		this.offsetLength = offsetLength;
		this.on('newListener',(eventName)=>{
			if(eventName === 'data'){
				console.log(this.listeners('data'));
				setImmediate(()=>{
					this._dispatch();
				});
			}
		})
	}

	_dispatch(){
		let totalLength = this.data.length;
		let restLength = totalLength;

		while(restLength>0){
			let start = totalLength - restLength;
			let end = start + this.offsetLength;
			let tmp = this.data.slice(start,end);
			let buf = Buffer.from(tmp);
			this.emit('data',buf);
			restLength -= this.offsetLength;
		}
		this.emit('end');
	}

}

let data = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>我的博客</title>
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/common.css">
	<link rel="stylesheet" href="css/index.css">
</head>
<body>
	<nav class="navbar navbar-default navbar-fixed-top kz-navbar" id='kz-navbar'>
	  <div class="container">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-nav" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">我的个人博客</a>
	    </div>
	    <div class="collapse navbar-collapse" id="top-nav">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="index.html">首页</a></li>
	        <li><a href="list.html">HTML/CSS</a></li>
	        <li><a href="list.html">JavaScript</a></li>
	        <li><a href="list.html">学无止境</a></li>
	        <li><a href="list.html">我的足迹</a></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-->
	</nav>
	<div class="main">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div id="main-carousel" class="carousel slide" data-ride="carousel">
					  <!-- Indicators -->
					  <ol class="carousel-indicators">
					    <li data-target="#main-carousel" data-slide-to="0" class="active"></li>
					    <li data-target="#main-carousel" data-slide-to="1"></li>
					  </ol>

					  <!-- Wrapper for slides -->
					  <div class="carousel-inner" role="listbox">
					    <div class="item active">
					      <img src="img/carouse/s1.jpg" alt="s1.jpg">
					    </div>
					    <div class="item">
					      <img src="img/carouse/s2.jpg" alt="s2.jpg">
					    </div>
					  </div>

					  <!-- Controls -->
					  <a class="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
					    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="right carousel-control" href="#main-carousel" role="button" data-slide="next">
					    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>
					<div class="panel panel-default content-item">
					  <div class="panel-heading">
					    <h3 class="panel-title">
					    	<a href="detail.html" class="link" target="_blank">移动设备优先</a>
						</h3>
					  </div>
					  <div class="panel-body">
					    在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。
					  </div>
					  <div class="panel-footer">
						<span class="glyphicon glyphicon-user"></span>
						<span class="panel-footer-text text-muted">Tom</span>
						<span class="glyphicon glyphicon-th-list"></span>
						<span class="panel-footer-text text-muted">JavaScript</span>
						<span class="glyphicon glyphicon-time"></span>
						<span class="panel-footer-text text-muted">2018-07-01</span>
						<span class="glyphicon glyphicon-eye-open"></span>
						<span class="panel-footer-text text-muted"><em>1000</em>已阅读</span>
					  </div>
					</div>
					<div class="panel panel-default content-item">
					  <div class="panel-heading">
					    <h3 class="panel-title">
					    	<a href="#" class="link">移动设备优先</a>
						</h3>
					  </div>
					  <div class="panel-body">
					    在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。
					  </div>
					  <div class="panel-footer">
						<span class="glyphicon glyphicon-user"></span>
						<span class="panel-footer-text text-muted">Tom</span>
						<span class="glyphicon glyphicon-th-list"></span>
						<span class="panel-footer-text text-muted">JavaScript</span>
						<span class="glyphicon glyphicon-time"></span>
						<span class="panel-footer-text text-muted">2018-07-01</span>
						<span class="glyphicon glyphicon-eye-open"></span>
						<span class="panel-footer-text text-muted"><em>1000</em>已阅读</span>
					  </div>
					</div>	
					<div class="panel panel-default content-item">
					  <div class="panel-heading">
					    <h3 class="panel-title">
					    	<a href="#" class="link">移动设备优先</a>
						</h3>
					  </div>
					  <div class="panel-body">
					    在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。
					  </div>
					  <div class="panel-footer">
						<span class="glyphicon glyphicon-user"></span>
						<span class="panel-footer-text text-muted">Tom</span>
						<span class="glyphicon glyphicon-th-list"></span>
						<span class="panel-footer-text text-muted">JavaScript</span>
						<span class="glyphicon glyphicon-time"></span>
						<span class="panel-footer-text text-muted">2018-07-01</span>
						<span class="glyphicon glyphicon-eye-open"></span>
						<span class="panel-footer-text text-muted"><em>1000</em>已阅读</span>
					  </div>
					</div>	
					<div class="panel panel-default content-item">
					  <div class="panel-heading">
					    <h3 class="panel-title">
					    	<a href="#" class="link">移动设备优先</a>
						</h3>
					  </div>
					  <div class="panel-body">
					    在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式。而在 Bootstrap 3 中，我们重写了整个框架，使其一开始就是对移动设备友好的。这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中。也就是说，Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。
					  </div>
					  <div class="panel-footer">
						<span class="glyphicon glyphicon-user"></span>
						<span class="panel-footer-text text-muted">Tom</span>
						<span class="glyphicon glyphicon-th-list"></span>
						<span class="panel-footer-text text-muted">JavaScript</span>
						<span class="glyphicon glyphicon-time"></span>
						<span class="panel-footer-text text-muted">2018-07-01</span>
						<span class="glyphicon glyphicon-eye-open"></span>
						<span class="panel-footer-text text-muted"><em>1000</em>已阅读</span>
					  </div>
					</div>

					<nav aria-label="Page navigation" id="page">
					  <ul class="pagination">
					    <li>
					      <a href="#" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>
					    <li><a href="#">1</a></li>
					    <li><a href="#">2</a></li>
					    <li><a href="#">3</a></li>
					    <li><a href="#">4</a></li>
					    <li><a href="#">5</a></li>
					    <li>
					      <a href="#" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
					  </ul>
					</nav>												
				</div>
				<div class="col-md-4 hidden-xs hidden-sm">
					<div class="ad">
						<a href="#" class="thumbnail">
							<img src="img/ad/ad2.jpg" class="img-responsive" alt="Responsive image">
						</a>
					</div>
					<div class="ad">
						<a href="#" class="thumbnail">
							<img src="img/ad/ad1.jpg" class="img-responsive" alt="Responsive image">
						</a>
					</div>	
					<div class="panel panel-default custom-panel">
					  <div class="panel-heading">
					    <h3 class="panel-title">博主介绍</h3>
					  </div>
					  <div class="panel-body">
					    <div class="media">
						  <div class="media-left">
						    <a href="#">
						      <img class="media-object img-circle about-me-img" src="img/me.jpg" alt="me.jpg">
						    </a>
						  </div>
						  <div class="media-body">
						    <h4 class="media-heading">Tom</h4>
						    80后草根！07年入行。一直潜心研究web技术，一边工作一边积累经验，分享一些个人心得。
						  </div>
						</div>
					  </div>
					</div>
					<div class="panel panel-default custom-panel hot-list">
					  <div class="panel-heading">
					    <h3 class="panel-title">点击排行</h3>
					  </div>
					  <div class="panel-body">
						<ul class="list-group">
						  <li class="list-group-item"><a href="#" class="link text-ellipsis">我们对框架中的某些关键部分增加了对移动设备友好的样式</a></li>
						  <li class="list-group-item"><a href="#" class="link text-ellipsis">我们对框架中的某些关键部分增加了对移动设备友好的样式</a></li>
						  <li class="list-group-item"><a href="#" class="link text-ellipsis">我们对框架中的某些关键部分增加了对移动设备友好的样式</a></li>
						  <li class="list-group-item"><a href="#" class="link text-ellipsis">我们对框架中的某些关键部分增加了对移动设备友好的样式</a></li>
						  <li class="list-group-item"><a href="#" class="link text-ellipsis">我们对框架中的某些关键部分增加了对移动设备友好的样式</a></li>
						  <li class="list-group-item"><a href="#" class="link text-ellipsis">我们对框架中的某些关键部分增加了对移动设备友好的样式</a></li>						  						  						  						  
						</ul>
					  </div>
					</div>
					<div class="panel panel-default custom-panel">
					  <div class="panel-heading">
					    <h3 class="panel-title">关注我</h3>
					  </div>
					  <div class="panel-body">
							<img class="img-responsive" src="img/wechat.jpeg" alt="">
					  </div>
					</div>																
				</div>
			</div>
		</div>
	</div>
	<footer>
		<p>
			Blog Design by <a href="#">Kuazhu</a> <a href="#">豫ICP备11002373号-1</a>.
		</p>
	</footer>
</body>
<script src="lib/jQuery/jquery-1.12.4.min.js"></script>
<script src="lib/bootstrap/js/bootstrap.min.js"></script>
<script src="js/index.js"></script>
</html>`;

const rs = new LikeReadableStream(data,10);
let count = 0;
let body = '';
rs.on('data',(chunk)=>{
	console.log(count++,':::',chunk.toString());
	body += chunk;
});

rs.on('end',()=>{
	console.log('body:::',body);
	console.log('end...');
})
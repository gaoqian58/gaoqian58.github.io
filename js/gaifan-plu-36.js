/*
 * @area {type:Array}
 * 地区
 * @person {type:Array}
 * 姓+女士或先生
 * <script type="text/javascript"> var area = ['北京', '广州'] var person = ['赵女士', '吴女士'] </script>
 * */

var areas

var persons

document.addEventListener('DOMContentLoaded', function() {
	$("body").append('<style type="text/css"> .toastMsg { position: fixed; z-index: 999; left:50%; margin-left:-180px; bottom: 75px; text-align: center; display: block; }    .toast_text { border-radius: 32px; background: red; opacity: 0.9; padding: 8px; font-size: 14px; color:yellow } </style>  <gaifan-div class="toastMsg" id="toast" style="display: none;"> <gaifan-span id="toast_content" class="toast_text"></gaifan-span> </gaifan-div>')
	try {
		areas = area && area.length > 0 ? area : ['北京', '广州', '郑州', '武汉', '珠海', '长沙', '淄博', '东莞', '昆山', '无锡', '阳江', '钦州', '天津', '厦门', '深圳', '株洲', '达州', '成都', '重庆', '北海', '福州', '梧州', '青海', '哈尔滨', '呼和浩特', '桂林', '湛江', '金华'];
	} catch(e) {
		areas = ['北京', '广州', '郑州', '武汉', '珠海', '长沙', '淄博', '东莞', '昆山', '无锡', '阳江', '钦州', '天津', '厦门', '深圳', '株洲', '达州', '成都', '重庆', '北海', '福州', '梧州', '青海', '哈尔滨', '呼和浩特', '桂林', '湛江', '金华'];
	}

	try {
		persons = person && person.length > 0 ? person : 
		['赵女士上一期跟单，喜中2080元！', 
		'吴先生上一期跟单，喜中10400元！', 
		'高女士上一期跟单，喜中3600元！', 
		'郑先生上一期跟单，喜中2080元！', 
		'刘先生上一期跟单，喜中1040元！', 
		'王先生上一期跟单，喜中14000元！', 
		'刘女士上一期跟单，喜中20800元！', 
		'李先生上一期跟单，喜中2080元！', 
		'罗先生上一期跟单，喜中3460元！', 
		'罗女士上一期跟单，喜中10400元！', 
		'黄女士上一期跟单，喜中3400元！', 
		'孙先生上一期跟单，喜中2080元！', 
		'朱女士上一期跟单，喜中100000元！', 
		'何先生上一期跟单，喜中20800元！', 
		'朱先生上一期跟单，喜中8000元！', 
		'白女士上一期跟单，喜中2080元！', 
		'陈先生上一期跟单，喜中12000元！', 
		'邓女士上一期跟单，喜中16000元！', 
		'叶先生上一期跟单，喜中40000元！']
		;
	} catch(e) {
		persons = 
		['赵女士上一期跟单，喜中2080元！',
		'吴先生上一期跟单，喜中10400元！', 
		'高女士上一期跟单，喜中3600元！', 
		'郑先生上一期跟单，喜中2080元！', 
		'刘先生上一期跟单，喜中1040元！', 
		'王先生上一期跟单，喜中14000元！', 
		'刘女士上一期跟单，喜中20800元！', 
		'李先生上一期跟单，喜中2080元！', 
		'罗先生上一期跟单，喜中3460元！', 
		'罗女士上一期跟单，喜中10400元！', 
		'黄女士上一期跟单，喜中3400元！', 
		'孙先生上一期跟单，喜中2080元！', 
		'朱女士上一期跟单，喜中100000元！', 
		'何先生上一期跟单，喜中20800元！', 
		'朱先生上一期跟单，喜中8000元！', 
		'白女士上一期跟单，喜中2080元！', 
		'陈先生上一期跟单，喜中12000元！', 
		'邓女士上一期跟单，喜中16000元！', 
		'叶先生上一期跟单，喜中40000元！']
		;
	}
}, false)

$(function() {
	var showToast = function() {
		var areaIndex = Math.round(Math.random() * (areas.length - 1));
		var personIndex = Math.round(Math.random() * (persons.length - 1));
		$("#toast_content").html("<i class='fa fa-volume-down'></i> 恭喜" + areas[areaIndex] + "的彩民 " + persons[personIndex] + "");
		$("#toast").fadeIn();
		setTimeout(function() {
			dismissToast();
		}, 3500);
	};
	var dismissToast = function() {
		$("#toast").fadeOut();
		setTimeout(function() {
			showToast();
		}, 500 + Math.round(Math.random() * 1000));
	};
	dismissToast();
})
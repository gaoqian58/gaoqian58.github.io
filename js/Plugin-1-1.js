/**
 * 可以自定义变量 提示语
 *  var gaifanPluginTxt1= '微信已经复制 ,加我微信聊天把';
 *  var copyPhonenumber = true;
 */
var Plugin_html_1="";
Plugin_html_1 += "<style type=\"text\/css\">";
Plugin_html_1 += "	@font-face{font-family:antman-wechat-modal-icon;src:url(data:application\/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ4AAsAAAAACMAAAAPpAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEcIQAATYCJAMQCwoABCAFhG0HURt7B8iemjxtI4EHlAcPFmCBUAie\/x9z973\/J6IJsbizinhbwr2ERUhUQsOjpoWK+OleaTpoh+UqmIfSE5gKL07i9EtzmXtC\/yruFctXRFNoi2k5V0gHasZuwqlRqHefFIgLJCXf\/udyetd4noXzA+Uy5rKxJsZRvDWwMSZHYaAFEkFuWcDO7tPmBJ6GAF6K5CA9Fk+v0MEiTRJANqJ9Czo+NTaFILhlzpiVNos04cCtW3oKANvm5+UTqEQFisMgzazsyYXtAx9aSYv+qzChI3DqMwLCOjBAG4AFWYk1z6nb3jakeD\/hDcoAbpmo8NIV\/qH1\/z9xxyJ2k5iyfzwFcSKJ\/cCXfAZegMp2JeFQIpC0Ig4F2CEr3EAAqAH4QpLH6xlkcPl8fr+vAaGX7yoHdgyusqe3F6E1HOSdJ\/1sYW0TeA+nW2ctVuSursGLOSM7eolxdvf2viUOj8RktOY3jW3vRsc4zu5obm7cbm\/d7+89iz06eifH2W\/BzTu3uw8e9x89a28jaYr2sVqCKMbxGhQN\/or92k\/z6KChub\/zIK1KyFijkKTip9NNHBQTtPS7Z8QgL+nAtQbD0iUfSdExtixOW9tcBk9LtU4PD6u5Rbi7fkPt1mcMDDtVZqrqEa8\/blXu7qCg39hZ1YCLHG6T4e69Dzu7Hmf6jeGvn3u3P+\/tRXlUaboXeFFtytHz6gpZyy2yf\/\/ItmQGmBrbnTnIYaq\/iubaTRzcmo+Cgo8QkLMa8kda4tqjAkzPjEXgu9h3AXHUrMLyf70L8lORLpGTmhpmslRXFZ+gXCDiGp++KOiCJMQrV4i4JPCzymTKFMtkyXT6+f\/jgAIvXsFXnxkgB+WXRqfU6QaoAOD\/21QbatO\/2QggzboHvkPrdww1xnq\/qGgtAM87Mu+h\/K\/msxTBieTk5pzxookAAHZK5Ekaa98cVbKUPw\/LjDbsOqFXtsM\/2aNe1CFNfOJBcJNwQXFRAIObOtTi28CBjxI4cdMOXlpZrvcRk6KOWA\/QopwBIWwWlCA1MIRB1OKfg4OkT+AkHCl4GYp1Rx8NRdOYppAl5GJINkaHavYUnfSsxGfyq8QqvDyT9E5FGTpQWUEpGLgQU1HHnNQMf52W5mFEik7RgjmPkkRjUoqOyJF5VJpkG0XFiLgHzUMTU+jRrUAsgrhQiG8omkNjnl5f9ELvf0Z8lYSlSKn4oX9HCqWwd6RMgVIO9CLmXBX70j\/VB99aGuGx4yIUtBSygJEksldDSfHDIsQh5qJKuDMbilQtIq943r403cINgBdpdysqRqw4cC6nW2yHo9AoYt\/XarqEZRAOw6Lt9crkWU70V8UAAAAA) format(\"woff2\")}";
Plugin_html_1 += "	.antman-wechat-modal-icon{font-family:antman-wechat-modal-icon !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";
Plugin_html_1 += "	.iconguanbi:before{content:'\\\E665'}";
Plugin_html_1 += "	.plu-s{width:100%;height:100%;display:block;position:fixed;z-index:10001;top:0px;right:0px;left:0px;transition:opacity 0.1s ease-in 0s}";
Plugin_html_1 += "	.plu-s .plu-con{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay{width:330px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px;position:fixed;top:30%;left:50%;margin-left:-165px;margin-top:-109px;background:#fff;border-radius:13px}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-close{position:absolute;right:15px;top:15px;cursor:pointer}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc .image img{width:44px;height:44px}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc .title{color:#333;font-size:18px;font-weight:700;margin:7px 0 10px}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc .erweima img{width:100%}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc .desc,.plu-s .plu-con .plu-lay .plu-suc .wechat-number{color:#333;font-size:15px;line-height:30px}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc .plu-but{background-color:#1aad19;border-radius:5px;width:144px;height:44px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:15px;cursor:pointer}";
Plugin_html_1 += "	.plu-s .plu-con .plu-lay .plu-suc .plu-but plu-span{color:#fff;font-size:15px}";
Plugin_html_1 += "	.plu-mask{position:fixed;left:0;top:0;right:0;bottom:0;background-color:#000000;opacity:0.5;-moz-opacity:0.5;filter:alpha(opacity=50);z-index:888}";
Plugin_html_1 += "  #plu_click_pic {position:fixed;right:5px;top:30%;width:63px;height: 70px;cursor: pointer;}";
Plugin_html_1 += "<\/style>";
// Plugin_html_1 += "<plu-div class=\"Plugin_float_weixin\" id=\"plu_click_pic\">";
// Plugin_html_1 += "	<img src=\"/img/weixin.png\" alt=\"\" width=\"100%\"> ";
// Plugin_html_1 += "<\/plu-div>";

Plugin_html_1 += "<plu-div>";
Plugin_html_1 += "	<plu-div>";
Plugin_html_1 += "		<plu-div class=\"plu-s\" style=\"display: none;\">";
Plugin_html_1 += "			<plu-div class=\"plu-con\">";
Plugin_html_1 += "				<plu-div class=\"plu-lay\"> <i class=\"antman-wechat-modal-icon iconguanbi plu-close\"><\/i>";
Plugin_html_1 += "					<plu-div class=\"plu-suc\">";
Plugin_html_1 += "						<plu-div class=\"image\"> <img src=\"https:\/\/libs.gaifan.cn\/plugin\/1\/cpsuc.png\">";
Plugin_html_1 += "						<\/plu-div>";
Plugin_html_1 += "						<plu-div class=\"title\" style='color:red'>微信号: <span class=\"weixin\"></span> 复制成功!<\/plu-div>";
Plugin_html_1 += "						<plu-div class=\"desc\"  style='color:blue'>微信本期推荐号已出，已有<span style='color:red;font-weight:700'>368</span>人跟单<\/plu-div>";
Plugin_html_1 += "						<plu-div class=\"desc gaifanPluginTxt1_\"  style='color:green;font-size:16px'><\/plu-div>";
Plugin_html_1 += "						<plu-div class=\"desc\"  style=''>&nbsp;<\/plu-div>";
Plugin_html_1 += "						<plu-div class=\"erweima\"><img src='buzou.png'><\/plu-div>";


Plugin_html_1 += "						<plu-div class=\"plu-but\">";
Plugin_html_1 += "							<plu-span>知道了<\/plu-span>";
Plugin_html_1 += "						<\/plu-div>";
Plugin_html_1 += "					<\/plu-div>";
Plugin_html_1 += "				<\/plu-div>";
Plugin_html_1 += "			<\/plu-div>";
Plugin_html_1 += "		<\/plu-div>";
Plugin_html_1 += "		<plu-div class=\"plu-mask\" style=\"display: none;\"><\/plu-div>";
Plugin_html_1 += "	<\/plu-div>";
Plugin_html_1 += "<\/plu-div>";
if($("#Plugin_weixin_number").length>0){
}else{
  Plugin_html_1 += "<plu-span class=\"weixin\" id=\"Plugin_weixin_number\" style=\"visibility: hidden;\"></plu-span>";
}
$("body").append(Plugin_html_1);
$(".weixin").css("cursor","pointer");
$(function() {
	if(typeof(gaifanPluginTxt1)!="undefined"){
		$(".gaifanPluginTxt1_").text(gaifanPluginTxt1);
	}else{
		$(".gaifanPluginTxt1_").text("马上去微信添加老师为好友吧!");
	}
	$(".plu-but,.plu-close").click(function() {
		$(".plu-s,.plu-mask").hide();
	})
	if (window.clipboardData) {
		try {
			//ie自身的处理方式
			$(".weixin,.Plugin_float_weixin").click(function() {
				var text_ = $("#Plugin_weixin_number").text();
				window.clipboardData.setData('text', text_);
				$(".plu-s,.plu-mask").show();
				
				window.parent.location.href = 'weixin://';
			

			});
		} catch (e) {
			log("复制功能copy出错:" + e);
		}
	} else {
		try {
			var clipboard = new ClipboardJS(".weixin,.Plugin_float_weixin", {
				text: function() {
					return $("#Plugin_weixin_number").text();
				}
			});
			clipboard.on('success', function(e) {
				$(".plu-s,.plu-mask").show();
				window.parent.location.href = 'weixin://';
			});
			clipboard.on('error', function(e) {
				//判断是否uc浏览器
				if (navigator.userAgent.indexOf('UBrowser') > -1 || navigator.userAgent.indexOf('UCBrowser') > -1) {
					//uc移动浏览器进入这里
					$(".plu-s,.plu-mask").show();
					
				} else {
					layer.msg("复制失败，请长按复制");
				}
			});
		} catch (e) {
			log("复制功能copy出错:" + e);
		}
	}
})
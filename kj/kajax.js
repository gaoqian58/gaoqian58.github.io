var xgwss=[
"wss://zhibo3.dghmfcyy.com",
“wss://zhibo3.yuexiawang.com”
]；
var xawss=[
"wss://zhibo.dghmfcyy.com",
“wss://zhibo.yuexiawang.com”
]；
function time() {//时间调用
var date = new Date();
var year = date.getFullYear(); 
var moon = check(date.getMonth()+1);//获取当前月份的日期 
var day=check(date.getDate());
var sjrq=year+"-"+moon+"-"+day;
var hour= check(date.getHours());//得到小时数
var minute= check(date.getMinutes());//得到分钟数
var second= check(date.getSeconds());//得到秒数
var week = weekArray[new Date(sjrq).getDay()];
var a = hour + ":" + minute + ":" + second;
var b =year + "年" + moon +"月"+day+"日 星期"+week;
return {a,b,year,moon,day,hour,minute,second,week,sjrq};
}
function trim(a){return a.replace(/^\s+|\s+$/g,"").replace(/[ ]/g,"").replace(time().year,"")}
function hm_ys(b){if(b==0 || b>49 || isNaN(b)){return "hm kjbj kjbjopacity";}else{return ["hm-red","hm-blue","hm-green"][Math.floor(((b-1+Math.floor((b-1)/10))%6)/2)]}}
var lhc = {
    zodiac: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    getZodiac: function (year,num,a,b) {
if(a=="xg"){
var zodiackj= ["香","港","六","合","彩","开","奖"];
} else  if(a=="xa"){
var zodiackj= ["新","澳","六","合","彩","开","奖"];
} else {
var zodiackj= ["","连","接","","异","常",""];
}
if(num==0 || num>49 || isNaN(num)){return "<span style='margin-left:0.1rem;color:#808080;'>"+zodiackj[b]+"</span>";}else{
        return this.getZodiacList(year)[(Number(num) - 1) % 12];}
    },
    getZodiacList: function (year) {
        var startYear = 1924;
        var index = (year - startYear) % 12;
        var a = this.zodiac.slice(0, index + 1).reverse();
        var b = this.zodiac.slice(index + 1).reverse();
        return a.concat(b);
    },
};
function xgws(a) {
var lockReconnect = false;//避免重复连接
var tt;
    var ws;
    var wsUrl = a[Math.floor(a.length*Math.random())]+":"+[880,881,882,883,884,885,886,887,889][Math.floor(9*Math.random())]+"/Ws.ashx?"+Date.now();
    function createWebSocket(wsUrl) {
      try {
        ws = new WebSocket(wsUrl);
        init();
      } catch(e) {
        reconnect(wsUrl);
      }
    }
    function init() {
      ws.onclose = function () {
        console.log('链接关闭');
        reconnect(wsUrl);
      };
      ws.onerror = function() {
        console.log('发生异常了');
reconnect(wsUrl);//重新连接
      };
      ws.onopen = function () {
ws.send(" ");//发送空数据给服务器
      };
      ws.onmessage = function (event) {
//拿到任何消息都说明当前连接是正常的
//分析开始
var myObj =event.data;
var obj = JSON.parse(myObj);
var kjobj=trim(obj.k);
var kjjg=kjobj.split(",");
$("#q").text("2025"+kjjg[0]);
 /*         
//数据显示
for (i = 0; i < kjjg.length; i++) {
if(typeof kjjg[1] === "undefined" || isNaN(kjjg[1]) || kjjg[1].length<=1){kjjg[1]="香";};
if(typeof kjjg[2] === "undefined" || isNaN(kjjg[2]) || kjjg[2].length<=1){kjjg[2]="港";};
if(typeof kjjg[3] === "undefined" || isNaN(kjjg[3]) || kjjg[3].length<=1){kjjg[3]="六";};
if(typeof kjjg[4] === "undefined" || isNaN(kjjg[4]) || kjjg[4].length<=1){kjjg[4]="合";};
if(typeof kjjg[5] === "undefined" || isNaN(kjjg[5]) || kjjg[5].length<=1){kjjg[5]="彩";};
if(typeof kjjg[6] === "undefined" || isNaN(kjjg[6]) || kjjg[6].length<=1){kjjg[6]="开";};
if(typeof kjjg[7] === "undefined" || isNaN(kjjg[7]) || kjjg[7].length<=1){kjjg[7]="奖";};
$("#m"+i).text(kjjg[i]);
$("#mx"+i).html(lhc.getZodiac("2025",kjjg[i],"xg",i-1));
$("#w"+i).attr("class",hm_ys(kjjg[i]));
//
*/
}
//分析结束
      }
    }
    function reconnect(url) {
      if(lockReconnect) {
        return;
      };
      lockReconnect = true;
      //没连接上会一直重连，设置延迟避免请求过多
      tt && clearTimeout(tt);
      tt = setTimeout(function () {
        xgAjax(xgurl);
        createWebSocket(url);
        lockReconnect = false;
     },2000);
    }
  createWebSocket(wsUrl);
}

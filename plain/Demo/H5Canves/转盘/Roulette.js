/*
利用HTML5新标签Canvas绘制，主要思路是先绘制主体转盘，
再通过totate（）和setInterval（）函数进行旋转动画，
最后根据转过的度数判断中奖位置。
*/
var WINDOWS_HEIGHT=window.innerHeight;
var WINDOWS_WIDTH=window.innerWidth;
var num=8; //设置有几个扇形，最多10个
var beginAngle=50;//控制初始速度
var RADIUS=200;//转盘半径
var radio=0.95;//控制衰减速度
var t=null;

var step=2*Math.PI/num;
const info=["去新食堂","去老食堂","去小吃街","听一号床","听二号床","听三号床","听四号床","再来一次","九等奖","十等奖"];
const colors = ["#FFD600", "#e0605c", "#92bcde", "#0065ac", "#b670a8","#dea26c","#FFBB33","#FF8800","#FF4444","#CC0000"];
window.onload =function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.translate(WINDOWS_WIDTH / 2, WINDOWS_HEIGHT / 2);

    create(ctx);
    createArrow(ctx);
    document.getElementById("btn").onclick=function() {
        if(t){
            return false;
        }
        var step = beginAngle +Math.random()*10;
        var angle = 0;
        t = setInterval(
            function () {
                step *= radio;
                if (step <= 0.1) {
                    clearInterval(t);
                    t = null;
                    var pos =Math.ceil(angle /(360/num));
                    var res = info[num-pos];

                    ctx.save();
                    ctx.beginPath();
                    ctx.font = "25px 微软雅黑";
                    ctx.fillStyle = "#990000";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(res, 0, 0);
                    ctx.restore();

                }
                else {
                    ctx.clearRect(0, 0, WINDOWS_WIDTH, WINDOWS_HEIGHT);//刷新画板；
                    angle += step;
                    if (angle > 360) {
                        angle -= 360;
                    }

                    ctx.save();
                    ctx.beginPath();
                    ctx.rotate(angle * Math.PI / 180);
                    create(ctx);
                    ctx.restore();
                    createArrow(ctx);
                }
            },
            60
        );
    }
}
//绘制箭头
function createArrow(ctx){
        ctx.save();
        ctx.fillStyle="#990000";
        ctx.beginPath();
        ctx.moveTo(RADIUS*0.9,0);
        ctx.lineTo(RADIUS,-RADIUS*0.1);
        ctx.lineTo(RADIUS,RADIUS*0.1);
        ctx.fillRect(RADIUS,-RADIUS*0.05,RADIUS*0.2,RADIUS*0.1);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
}
function create(ctx){
        //绘制外边框
        ctx.save();
        ctx.fillStyle="#ffffff";
        ctx.beginPath();
        ctx.arc(0,0,RADIUS+10,0,step*num);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        //绘制扇形主体
        for (var i = 0; i < num; i++) {
            ctx.save();
            ctx.fillStyle = colors[i];
            ctx.beginPath();
            ctx.arc(0, 0, RADIUS, i * step, (i + 1) * step);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        //加上字
        for (var i = 0; i < num; i++){
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "#303030";
            ctx.font = "25px 微软雅黑";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.rotate(i * step + step / 2);
            ctx.fillText(info[i], RADIUS*1.3/ 2,  0);
            ctx.closePath();
            ctx.restore();
        }
        //绘制中心的圆
        ctx.save();
        ctx.fillStyle="#ffffff";
        ctx.beginPath();
        ctx.arc(0,0,RADIUS*0.3,0,step*num);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
}
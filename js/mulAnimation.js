function mulAnimation(ele,json,fn) {
    function startMove(obj,json,fn){
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            let pause=true;//设一个暂停 参数   当里面有没有执行到目标值的参数时,pause=false
            for(var attr in json){
                if(attr=='opacity'){
                    var iCur=parseInt(getStyle(obj,attr)*100);//如果目标参数是opacity,由于opacity是小数 ,  目标值抒写用整数如30, 所以需要对其进行换算
                }
                else{
                    var iCur=parseInt(getStyle(obj,attr));
                }
                var speed=(json[attr]-iCur)/10;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(json[attr]!=iCur){  //只用if(json[attr]==iCur){clearInterval(obj.timer);if(fn)fn();}会出现问题，当某一个attr执行完毕会把obj.timer结束
                    pause=false;       //会出现有的参数到达目标值 有的没有达到目标值的情况
                }
                if(attr=='opacity'){  //如果是opacity 则运行此函数
                    var opp=iCur+speed;
                    obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
                    obj.style.opacity=(iCur+speed)/100;
                    document.title=opp;
                }
                else{
                    obj.style[attr]=iCur+speed+'px' ;
                }
            }
            if(pause){  //全部参数执行到目标值时候  开始清掉定时器，执行需要执行的函数
                clearInterval(obj.timer);
                if(fn)fn();
            }
        },30)
    }

    function getStyle(obj,attr){   //  获取样式函数,避免只能获取行内样式.
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return getComputedStyle(obj,false)[attr];
        }
    }
    startMove(ele,json,fn);
}
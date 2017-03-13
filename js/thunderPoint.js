var body=document.getElementsByTagName("body");
var imgban=document.getElementsByClassName('lunboimg');
var left=document.getElementById('left');
var right=document.getElementById('right');
var INDEX=0;
var bannercontrol=document.getElementsByClassName('bannercontrol');
var bannerbox=document.getElementsByClassName('bannerbox');
var schoose=document.getElementsByClassName('s-choose');
var lunboimg=document.getElementsByClassName('lunboimg');
m=0;
var TIME;
    schoose[0].onmouseover=function(){
    // console.log(schoose[0].parentNode.previousElementSibling);
        schoose[0].parentNode.previousElementSibling.children[1].style.display="block";
    };
    schoose[0].onmouseout=function(){
    // console.log(schoose[0].parentNode.previousElementSibling);
        schoose[0].parentNode.previousElementSibling.children[1].style.display="none";
    };
    function xiaoyuan(){
        for(k=0;k<imgban.length;k++){
            bannercontrol[0].children[k].id=""; 
        };
        bannercontrol[0].children[INDEX].id="yellow1";
    };
    for(i=0;i<3;i++){
        bannercontrol[0].children[i].index=i;
        bannercontrol[0].children[i].onmouseover=function(){
            for(k=0;k<imgban.length;k++){
                bannercontrol[0].children[k].id="";
            };
            this.id="yellow1";
        };
    }; 
    function leftclick1(){
        m-=143;
        if(INDEX==2){
            imgban[INDEX].style.left=m+"px";
            imgban[0].style.left=715+m+"px";
            imgban[0].style.zIndex=4;
            if(m==-715){
                m=0;
                imgban[INDEX].style.left=m;
                imgban[INDEX].style.zIndex=0;
                INDEX=0;
                xiaoyuan();
                clearInterval(TIME);
            };
        };
        if(m>=-715&&INDEX!=2){
            imgban[INDEX].style.left=m+"px";
            imgban[INDEX+1].style.left=715+m+"px";
            imgban[INDEX+1].style.zIndex=4;
            if(m==-715){
                m=0;
                imgban[INDEX].style.left=m;
                imgban[INDEX].style.zIndex=0;
                if(INDEX<=1){
                    INDEX++;
                    xiaoyuan();
                    clearInterval(TIME);
                }; 
            };  
        };
    };
    function leftclick(){
        left.onclick=function(){
            clearInterval(TIME);
            TIME=setInterval(leftclick1,50);
        };
    };   
    leftclick();

    right.onclick=function(){
        clearInterval(TIME);
        TIME=setInterval(function(){
            m+=143;
            if(INDEX==0){
                imgban[INDEX].style.left=m+"px";
                imgban[2].style.left=-715+m+"px";
                imgban[2].style.zIndex=4;
                if(m==715){
                    m=0;
                    imgban[INDEX].style.left=m;
                    imgban[INDEX].style.zIndex=0;
                    INDEX=2;
                    xiaoyuan();
                    clearInterval(TIME);
                };
            };
            if(m<=715&&INDEX!=0){
                imgban[INDEX].style.left=m+"px";
                imgban[INDEX-1].style.left=-715+m+"px";
                imgban[INDEX-1].style.zIndex=4;
      
                // console.log(INDEX);
                if(m==715){
                // console.log(INDEX);
                    m=0;
                    imgban[INDEX].style.left=m;
                    imgban[INDEX].style.zIndex=0;
                    if(INDEX>=1){
                        INDEX--;
                        xiaoyuan();
                        // console.log(INDEX);
                        clearInterval(TIME);
                    }; 
                }; 
            };
        },50);
    };
    
    var viparray=[10,15,30];
    var vipzuanshi=document.getElementsByClassName("vipzuanshi");
    var vipmonth=document.getElementsByClassName("vipmonth");
    var vipjiesuan=document.getElementsByClassName("vipjiesuan");
    var vipjian=document.getElementsByClassName("vipjiantou");
    var vipselect=document.getElementsByClassName("viposelect");

    // var vipselectP=vipselect.getElementsByTagName("p");
     
    var vipinput=document.getElementsByClassName("vipinput");
    var qwerobj = document.getElementById("qwer");
    var vipabc = document.getElementsByClassName("vipabc");
    var huiyuanjibie = document.getElementsByClassName("huiyuanjibie");
    var vipindex=0;
    //判断当某某会员时的价格
    function huiyuanjiage1(obj){
        obj.parentNode.parentNode.nextElementSibling.nextElementSibling.children[0].innerText=viparray[vipindex];
        obj.parentNode.parentNode.nextElementSibling.nextElementSibling.children[2].innerText=viparray[vipindex];
    };

    for(i=0;i<3;i++){
        for(j=0;j<2;j++){
            vipselect[j].children[i].index=i;
            vipselect[j].children[i].onclick=function(){
                vipindex=0;
                this.parentNode.parentNode.nextElementSibling.children[0].value=1;
                this. parentNode.parentNode.children[0].value=this.innerText;
                var bb=this. parentNode.parentNode.children[0].value;
                this. parentNode.style.display="none";
                // console.log(bb);
                if (bb=="迅雷钻石会员"){
                    vipindex=2;
                    huiyuanjiage1(this);         
                };
                if (bb=="迅雷会员"){
                    vipindex=0;
                    huiyuanjiage1(this); 
                }; 
                if (bb=="迅雷白金会员"){
                    vipindex=1;
                    huiyuanjiage1(this);
                };
                if (bb=="迅雷网游加速会员"){
                    vipindex=1;
                    huiyuanjiage1(this);     
                };
                if (bb=="高级网游加速会员"){
                    vipindex=2;
                    huiyuanjiage1(this);          
                };
            };
        };
    };  

    //判断当某某会员时的价格2
    function huiyuanjiage2(obj){
        var a=obj.parentNode.previousElementSibling.children[0].value;
        var b=obj.parentNode.nextElementSibling.children[0];
        var c=obj.parentNode.nextElementSibling.children[2];
        if(a=="迅雷钻石会员"){
            b.innerText=viparray[2]*obj.value
            b.innerText=viparray[2]*obj.value;
        };
        if(a=="迅雷会员"){
            b.innerText=viparray[0]*obj.value
            c.innerText=viparray[0]*obj.value;
        }; 
        if(a=="迅雷白金会员"){
            b.innerText=viparray[1]*obj.value
            c.innerText=viparray[1]*obj.value;
        };
        if(a=="迅雷网游加速会员"){
            b.innerText=viparray[1]*obj.value
            c.innerText=viparray[1]*obj.value;
        };
        if(a=="高级网游加速会员"){
            b.innerText=viparray[2]*obj.value
            c.innerText=viparray[2]*obj.value;
        };
        if(a=="牛叉页游金钻"){
            b.innerText=viparray[0]*obj.value
            c.innerText=viparray[0]*obj.value;
        };
    };  
    for(i=0;i<3;i++){
      vipmonth[i].onkeyup=function(){
            // console.log(this.parentNode.previousElementSibling.children[0].children[0]);
            if(this.value<=12){
              huiyuanjiage2(this);
            }else{
              this.value=12;
              huiyuanjiage2(this);
            };
        };
    };  
    var tt=false;     
    for(i=0;i<2;i++){
        vipjian[i].onclick=function(){
        this.parentNode.children[2].style.display="block";
        };
    };
    for(i=0;i<2;i++){
        vipabc[i].onmouseover=function(){
          tt=true;
        };
        vipabc[i].onmouseout=function(){
          tt=false;
        };
    };
   
    window.onclick=function(){
        if(!tt){
            for(i=0;i<2;i++){
                vipselect[i].style.display="none";
            };
        };
    };

    var businessimg=document.getElementsByClassName("business_img");
   
    // console.log(businessimg);

    for(i=0;i<10;i++){
        businessimg[0].children[i].onmouseover=function(){  
            var xialaa=new xiala(this);  
            clearInterval(this.timer);  
        };
        businessimg[0].children[i].onmouseout=function(){
            var shanglaa=new shangla(this);  
            clearInterval(this.time);
        };
    };
    function xiala(obj){
        var aa=obj.children[0].children[0];
        var xialatop=document.defaultView.getComputedStyle(aa,null).top; 
        var xtop=parseInt(xialatop)
      
        obj.time=setInterval(function(){
            if(xtop<0){
                xtop+=2;
                aa.style.top=xtop+"px";
            };
        },1);
    };
    function shangla(obj){
        var bb=obj.children[0].children[0];
        var xialatop=document.defaultView.getComputedStyle(bb,null).top; 
        var xtop=parseInt(xialatop)
        obj.timer=setInterval(function(){
            if( xtop>-100){
                xtop-=2;
                bb.style.top=xtop+"px";
            };
        },1);
    };
    var hot=document.getElementsByClassName("hot");
    function xiala2(obj){
        var aa=obj.children[0].children[0];
        var xialatop=document.defaultView.getComputedStyle(aa,null).top; 
        var xtop=parseInt(xialatop)
          
        obj.time=setInterval(function(){
            if(xtop<-5){
                xtop+=2;
                aa.style.top=xtop+"px";
            };
        },1);
    };
    function shangla2(obj){
        var bb=obj.children[0].children[0];
        var xialatop=document.defaultView.getComputedStyle(bb,null).top; 
        var xtop=parseInt(xialatop)
        obj.timer=setInterval(function(){
            if( xtop>-100){
                xtop-=2;
                bb.style.top=xtop+"px";
            };
        },1);
    };
    for(j=0;j<7;j++){
        for(i=0;i<10;i++){
            hot[j].children[i].onmouseover=function(){  
                var xialaa=new xiala2(this);   
                clearInterval(this.timer);  
            };
            hot[j].children[i].onmouseout=function(){
                var shanglaa=new shangla2(this);  
                clearInterval(this.time);
            };
        };
    };
    var hh; 
    huakuai.onclick=function(){
        hh= setInterval(function(){
           var ll=document.body.scrollTop;
           // console.log(ll);
           if(document.body.scrollTop>0){
           document.body.scrollTop-=30;
           }else{
            clearInterval(hh);
           };
        },10);
    };
    var findb=document.getElementsByClassName("findb");
    // console.log(findb.value);
    var souhear=document.getElementsByClassName("souhear_sp png");
    souhear[0].onclick=function(){  
        var a= findb[0].value;
        this.href=" http://jifen.xunlei.com/jifen/exchange/group/0/type/2/searchName/"+a;
    };
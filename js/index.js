//鼠标移入移出显示与隐藏子菜单
$('.ss_list').on('mouseenter',function(){
    $('.ss_list_bg ').show();
});
$('.ss_list').on('mouseleave',function(){
    $('.ss_list_bg ').hide();
});
//左边购物列表导航  鼠标移入移出显示与隐藏二级子菜单
$('.leftNav ul li ').hover(function(){
    $(this).find('.zj').show();
},function(){
    $(this).find('.zj').hide();
});
//轮播图
function play(){
    var index_=0;
    var flag=false;
    var $img=$('.slide_box').children('li');
    var $num=$('.num').children('li');
    $num.on('mouseover',function(){
        flag=true;
        index_=$num.index($(this));
        $(this).addClass("active").stop(true,true).siblings().removeClass('active');
        $img.eq(index_).stop(true,true).fadeIn().siblings().fadeOut();
    });
    $num.on('mouseout',function(){
        flag=false;
    });
    setInterval(function(){
        if(flag)return;
        index_++;
        if(index_>=$img.length){
            index_ = 0;
        }
        $img.eq(index_).stop(true,true).fadeIn().siblings().fadeOut();
        $num.eq(index_).addClass('active').stop(true,true).siblings().removeClass('active');
    },2000);
}
play();

//快讯向上滚动
// var $ul=$('#express');
// var $li=$('#express li');
//此处不能用变量保存 效果会是滚动只插入一个
var timer=null;
width=$('#express li').innerHeight();
function scroll(){
    $('#express').animate({
        'marginTop':-width
    },1000,function(){
        $('#express').css('margin-top','0px');
        $('#express li').slice(0,1).appendTo($('#express'));
    })
}
timer=setInterval(scroll,1000);
$('#express').on('mouseenter',function(){
    clearInterval(timer);
});
$('#express').on('mouseleave',function(){
    timer=setInterval(scroll,1000);
});

//购物车
$('.i_car').on('mouseenter',function(){
    $('.last').show();
});
$('.i_car').on('mouseleave',function(){
    $('.last').hide();
});

var shopCar={
    totalPrice:0,
    totalCount:0,
    totalList:[]
};
var $lis1=$('.shop li');
$lis1.each(function(index,item){
    var p=$(item).find('.J_smallTotalPrice').text().slice(1)-0;
    var n=$(item).find('.J_inputCount').val()-0;
    shopCar.totalList.push({
        price:p,
        count:n,
        tp:n*p
    })
});
$('.J_btnAddCount').on('click',function(){
    var _index=$(this).parents('li').index();
    var new_count=++shopCar.totalList[_index].count;
   changeDate(_index,new_count);
});
$('.J_btnDelCount').on('click',function(){
    var _index=$(this).parents('li').index();
    var new_count=shopCar.totalList[_index].count;
    if(new_count<=1){
        alert('确定要删除吗？');
        $(this).parents('li').remove();
        shopCar.totalList.splice(_index,1);
}
    --new_count;
    changeDate(_index,new_count);
});

function changeDate(index,count){
    if(index>-1){
        shopCar.totalList[index].tp=count*shopCar.totalList[index].price;
        shopCar.totalList[index].count=count;
    }
    shopCar.totalPrice=0;
    shopCar.totalCount=0;
    $.each(shopCar.totalList,function(index,item){
       shopCar.totalPrice+=item.tp;
       shopCar.totalCount+=item.count;
    });
    html(index);
}

function html(index){
    if(index>-1){
        $lis1.eq(index).find('.J_smallTotalPrice').text(shopCar.totalList[index].tp);
        $lis1.eq(index).find('.J_inputCount').val(shopCar.totalList[index].count);
        $lis1.eq(index).find('.J_count').text('共'+shopCar.totalList[index].count+'件商品');
    }
    $('.J_totalPrice').text('￥'+shopCar.totalPrice);
    $('.J_totalCount').text('('+shopCar.totalCount+')');
}
    $('.J_btnDelete').on('click',function(){
        var _index=$(this).parents('li').index();
        $(this).parents('li').remove();
        shopCar.totalList.splice(_index,1);
        changeDate(-1);
        if(shopCar.totalCount==0){
            $(' .noshop').show();
            $('.buy').hide();
        }
    });



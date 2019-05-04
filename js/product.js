//鼠标移入移出显示与隐藏子菜单
$('.ss_list').on('mouseenter',function(){
     $('.ss_list_bg ').show();
});
$('.ss_list').on('mouseleave',function(){
    $('.ss_list_bg ').hide();
});
//尺码与颜色的选择
$('.des_choice ul li').on('mouseenter',function(){
    $(this).find('.ch_img').show();
});
$('.des_choice ul li').on('mouseleave',function(){
    $(this).find('.ch_img').hide();
});
//商品数量的增加与减少
var num=1;
$('.n_btn_1').on('click',function(){
    num++;
    $('.n_ipt').val(num);
});
$('.n_btn_2').on('click',function(){
    if(num<1){
        return false;
    }
    num--;
    $('.n_ipt').val(num);
});

//推荐搭配 套餐的总价与数量
var shopCar={
    totalSum:0,
    count:1,
    shopList:[]
};
var $lis=$('.team_list');
var $checked=$('input[name="zuhe"]');
var $sumIpt=$('.sum_ipt');
var $total=$('.team_sum span');
//初始化数据
$lis.each(function(index,item){
   var price=$(item).find('.price span').text().slice(1)-0;
   var checked=$(item).find('.price input').is(':checked');
    shopCar.shopList.push({
        price:price,
        checked:checked
    });
});
// shopCar.count=$sumIpt.val()-0;
//改变复选框
$checked.on('click',function(){
    var index=$checked.index(this);
    var checked=$(this).is(':checked');
    shopCar.shopList[index].checked=checked;
    html();
});
//改变几套产品数
$sumIpt.on('change',function(){
    var newCount=$(this).val()-0;
    if(/^[1-9]\d*$/.test(newCount)){
        shopCar.count=newCount;
    }else{
        $(this).val(shopCar.count);
    }
    html();
});
//数据渲染
function html(){
        // $.each(shopCar.shopList,function(index,item){
        //     var price = item.checked ? item.price : 0;
        //     shopCar.totalSum=price*shopCar.count;
        // })
    shopCar.totalSum=shopCar.shopList.reduce(function(value,item){
        var price = item.checked ? item.price : 0;
        return value + price
    },0)*shopCar.count;
    $total.text(shopCar.totalSum);
}
html();





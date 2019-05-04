//鼠标移入移出显示与隐藏子菜单
$('.ss_list').on('mouseenter',function(){
    $('.ss_list_bg ').show();
});
$('.ss_list').on('mouseleave',function(){
    $('.ss_list_bg ').hide();
});
//排序
var $lis=$('.cate_list');
var flag=true;
function sort(){
    var list=$('li',$lis).toArray();//$(' li',$lis)可传两个参数1:子2:父
    list.sort(function(a,b){   //比较大小传参进行
        var price1=$('.price span',a).text().slice(1);
        var price2=$('.price span',b).text().slice(1);
        var res=price1-price2;
        return flag?res:-res;
    });
    $lis.empty();
    $lis.append(list);
}
$('.i_down').on('click',function(){
    flag=false;
    sort();
});
$('.i_up').on('click',function(){
    flag=true;
    sort();
});



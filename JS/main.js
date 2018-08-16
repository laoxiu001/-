/* 整个 HTML 页面 淡入淡出 */
$(document).ready(function(){
    $("html").fadeIn(1000);
    visible();
});
/* 整个 HTML 页面 淡入淡出 */

/* 首屏高度自适应 */
function visible() {
    $(".GitHub").height($(window).height());
}
$(window).resize(function () {
    //浏览器大小变化
    visible();
});
/* 首屏高度自适应 */

/* lazy 懒加载内容 */
$(window).scroll(function(event){
    var pageTopY = $(window).scrollTop();
    var pageBottomY = $(window).scrollTop() + $(window).height();

    $(".lazy").each(function(){
        var boxTopY = $(this).offset().top;
        var boxCenter = boxTopY + ($(this).height() / 2);

        if(boxCenter > pageTopY && boxCenter < pageBottomY){
            $(document).ready(function(){
                $(".lazy").fadeIn(3000);
            });
        }
    });

});
/* lazy 懒加载内容 */
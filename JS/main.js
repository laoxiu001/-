/* 整个 HTML 页面 淡入淡出 */
$(document).ready(function () {
    $("html").fadeIn(1000);
    var top = $(".top").height();
    visible(top);
});
/* 整个 HTML 页面 淡入淡出 */

/* 点击导航栏展开 */
function showNav() {
    $(document).ready(function () {
        $(".nav_xs").slideToggle("slow");
    })
}
/* 点击导航栏展开 */

/* 屏幕变大隐藏div */
function hideNav() {
    var width = $(window).width();
    if (width >= 768) {
        $(".nav_xs").css("display", "none")
    }
}
/* 屏幕变大隐藏div */

/* 首屏高度自适应 */
function visible(height) {
    $(".visible").height($(window).height() - height);
}
$(window).resize(function () {
    //浏览器大小变化
    var top = $(".top").height();
    visible(top);
    hideNav();
});
/* 首屏高度自适应 */

/* lazy 懒加载内容 */
$(window).scroll(function (event) {
    var pageTopY = $(window).scrollTop();
    var pageBottomY = $(window).scrollTop() + $(window).height();

    $(".box").each(function () {
        var boxTopY = $(this).offset().top;
        var boxCenter = boxTopY + ($(this).height() / 2);

        if (boxCenter > pageTopY && boxCenter < pageBottomY) {
                console.log(this);
                $(this).find('.lazy').fadeIn(3000);
        }
    });
});
/* lazy 懒加载内容 */
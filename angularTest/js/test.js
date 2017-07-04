/**
*方法封装
*
*/
(function($){
	$.fn.tip=function(_aa1,_aa2){
		if(typeof _aa1 == "string"){
			$.fn.tip.mengths[_aa1](this,_aa2);
		}
	};
	$.fn.tip.methods={
		options:function(jq){
			return $.data(jq[0],"tip").options;
		}
	}
    //jQuery方法扩展
    $.extend({
            maxValue:function(n1,n2){
                return Math.max(n1,n2);
            },
            minValue:function(n1,n2){
                return Math.min(n1,n2);
            }
        });
    


})(jQuery);
(function(){
    //js 图片轮播封装
<ul class="switcher">
    <li class="active">
       <img src="/assets/images/web/PrivateJet/4s_jet_maldives-06746.jpg"> 
    <>
    <li>
       <img src="/assets/images/web/PrivateJet/4s_jet_seattle-06867.jpg"> 
    <>
    <li>
       <img src="/assets/images/web/PrivateJet/backstage.013.jpg"> 
    <>
</ul>

var Switcher = (function() {
    var Switcher = function(id) {
        this.id = $(id);
        this.autoplay();
    };
    Switcher.prototype.autoplay = function() {
        var that = this;
        setInterval(function() {
            var i = that.id.find('.active').index();
            if(i < 2) {
                i = i + 1;
            }else {
                i = 0;
            };

            that.id.find('li').removeClass('active').fadeOut(1500);

            that.id.find('li').eq(i).addClass('active').fadeIn(1500);

         }, 5000)   
    }
    return Switcher;
})(jQuery);
new Switcher('.switcher')
});
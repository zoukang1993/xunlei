$(document).ready(function(){
	/* The code here is executed on page load */
	
	/* Converting the slide handles to draggables, constrained by their parent slider divs: */
	
	$('.slider-handle').draggable({
		containment:'parent',
		axis:'y',
		drag:function(e,ui){
			
			/* The drag function is called on every drag movement, no matter how minute */
			
			if(!this.par)
			{
				/* Initializing the variables only on the first drag move for performance */
				
				this.par = $(this).parent();
				this.parHeight = this.par.height();
				this.height = $(this).height();
				this.color = $.trim(this.par.attr('class').replace('colorful-slider',''));
			}
			
			var ratio = 1-(ui.position.top+this.height)/this.parHeight;
			
			resizeBar(this.color,ratio);
		}
	});
});

function resizeBar(color,ratio)
{
	$('.cu-mid','.cuboid.'+color).height(200*ratio)
}
/*
本代码由97站长网收集并编辑整理;
尊重他人劳动成果;
转载请保留97站长网链接 - www.97zzw.com
*/
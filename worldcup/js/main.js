// JavaScript Document
require.config({
	
	paths:{
			"jquery":"http://cdn.bootcss.com/jquery/1.10.2/jquery.min",
			"bxslide":"../bower_components/bxslider-4/jquery.bxslider.min",
			"nav":"../bower_components/jQuery-One-Page-Nav/jquery.nav",
			"top":"top"		}
	
	});
require(['jquery'],function($){
	require(['bxslide',"nav","top"],function(){
		$(document).ready(function(e) {
            	$("#section-1").css('margin-top',0-$("#menu").height());
				$("#section-1").css('padding-top',$("#menu").height());
        });
		
		 $('.bxslider').bxSlider({
			 auto: true,
			 captions: true
		});	
	   $('#nav').onePageNav({
		   easing: 'swing'
		  });
		  /*
		  <div class="zu pure-u-1-4">
        	<h2>Group A</h2>
        	<div class="team"><div class="counrty" style=""></div> <div class="c_text"><span>中国 China</span></div></div>
  
       </div>*/
	   var result = "";
	   var country = [['巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['1巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['2巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['3巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['1巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['2巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR'],['3巴西 BR','克罗地亚 HRV','墨西哥 MEX','客卖隆 CMR']];
	   var group = ['A','B','C','D','E','F','G','H'];
	   
	   for(var i=0;i<8;i++){
		   result +=  "<div class=\"zu pure-u-1-4\"><h2>Group "+group[i]+"</h2>";
			for(var j=0;j<4;j++){
				var position =(0-i*78)+"px" +' '+ (0-j*45)+"px";
//				console.log(position);
				var data = "<div class='team'><div class='counrty' style=\"background-position:"+position +"\"></div> <div class='c_text'><span>"+country[i][j]+"</span></div></div>";
				
				result += data;
			}
			result+="</div>"
		}
		$("#group").append(result);
	   
		
		console.log("I am ready");
	
	/*screen*/
	var width = $(window).width();
	if(width > 480){
		 	$('.bxslider2').bxSlider({}); 
		}else{
			$("#group .zu").on("click",function(){
				//$("#group .zu .team").slideUp();
				$(this).find(".team").slideToggle();
			}); 	
		}
		
		
	});
});
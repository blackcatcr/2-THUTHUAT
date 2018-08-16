 $(function(){
 	$(window).resize(function(){
		//in ra console lệnh thông báo 
		console.log('ban vừa resize man hinh')
		// *** resize màn hình tự động 
		var docao = $(window).width();
		if(docao < 500){
			$('.top6').addClass('tienhoa');
		}
		else if(docao > 500){
			$('.top6').removeClass('tienhoa');
		}

	});

	 
})  
 
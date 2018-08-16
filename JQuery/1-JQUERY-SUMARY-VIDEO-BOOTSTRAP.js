$(function(){


	//*** hàm tính độ cao màn hình
	console.log($(window).height());
	var docao = $(window).height();
	console.log(docao);
	//gọi css top1 và gán height top1 bằng docao
	$('.top1').css({'height' :docao})




	//--------------------------------
	//Gán độ cao cho ảnh khi resize màn hình
	$(window).resize(function(){
		//in ra console lệnh thông báo 
		console.log('ban vừa resize man hinh')
		// *** resize màn hình tự động 
		var docao = $(window).height();
		$('.top1').css({'height' :docao})
	});


	//------------------
	//CUỘN BODY ĐẾN VỊ TRÍ TÍNH TRƯỚC
	 
	//tính vị trí của '.top2'
	console.log($('.top2').offset().top);

	//cuộn đén vị trí 1000px 
	$('.top1 a.btn.btn-default').click(function(){
		$('body').animate({scrollTop:1000});
		return false;
	})

	// cuộn đến vị trí top 2 
	$('.top1 a.btn.btn-default').click(function(){
		$('body').animate({scrollTop:$('.top2').offset().top});
		$('.menuphai').removeClass('ra'); // tụt menu vào luôn 
		return false;
	})


//-------------------------------------MENU--------------------------------------------------------

	//-------------------
	//TẠO MENU ẨN
	//khi click vào nút 'nutmenu' thì addclass 'ra'
	$('.nutmenu').click(function(){
		$('.menuphai').addClass('ra');
	})

	//khi nutmenu là thẻ a nó sẽ chuyển đến link mà ko chạy hiệu ứng
	$('.nutmenu').click(function(){
		$('.menuphai').addClass('ra');
		return false;
	})
	// click vào nút 'tat' thì remove class 'ra'
	$('.tat').click(function(){
		$('.menuphai').removeClass('ra');
		return false;
	})

	//---------------------------
	//THAY ĐỔI HOẠT ĐỘNG ACTIVE CỦA MENU 

	//Scroll spy làm thay đổi menu 
	//1. đặt tên cho các mục trên menu: href='#about' #gioithieu
	//2. đặt tên các khối id tương ứng id='about' id='gioithieu'
	// thêm: data-spy="scroll" data-target=".nav-bar" data-offset="50" vào body
	//css lại phần class "active" cho menu .
	//data-spy="affix" data-offset-top="700"  - nên cài snippet cho nhanh
	// thêm vào phần menu - thẻ nav ngoài cùng (.navbar .navbar-default)
	//viết css cho class .affix đc add vào 
	// z-index: 10 - phải thêm position:relative vào 



	//-----------------------------
	//THAY ĐỔI MENU BẰNG CÁCH ADD THÊM CLASS

	// hàm cuộn chuột 
	$(window).scroll(function(){
		console.log ('hello, you are just scrolling mouse!');
		//hàm tính vị trí hiện tại 
		vitrihientai = $('body').scrollTop();
		console.log(vitrihientai);

		if(vitrihientai > 337){
			$('.navbar-fixed-top').addClass('tienhoa');
		}
		else if(vitrihientai < 337){
			$('.navbar-fixed-top').removeClass('tienhoa');
		}








//mở rộng : làm biến vào biến ra phần portfolio
		//CSS tự viết 
		if(vitrihientai > 700){
			$('.portfolio').addClass('ra');
		}
		else if(vitrihientai < 700){
			$('.portfolio').removeClass('ra');
		}
		//.portfolio {transition: all 0.4s; opacity:0; transform:translatrY(-100px);}
		// .portfolio.ra {opacity:1; transform:translateY(0px);}

	})


	// hàm click để tính toán phần tử và dịch chuyển body 
	$('.n1').click(function(){
		$('body').animate({scrollTop:$('#sanpham').offset().top})
	})



	// Eassing Jquery - hiệu ứng chuyển đọng và gia tốc
	// http://gsgd.co.uk/sandbox/jquery/easing/
	// http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js 
	// paste đường dẫn trên như đường dẫn bootstrap
	$('.n1').click(function(){
		$('body').animate({scrollTop:$('#sanpham').offset().top},1000,"easeOutExpo")
	})





	//-------------------
	//Gọi phần tử trong Jquery 
	<div class="text-center">
	<b class="btn btn-default nut1" hienthi="modi"> Đây là nút số 1 </b>
	<b class="btn btn-default nut2" hienthi="komo"> Đây là nút số 2 </b>
	<b class="btn btn-default nut3" hienthi="modi"> Đây là nút số 3 </b>
</div>
	
	//nut2 và nút 3 bị mờ đi 
	//gọi theo thẻ b
	$('b').animate({opacity:0.2})
	// Gọi theo class 
	$('.nut2,.nut3').animate({opacity:0.2})

	// Truyền hiệu ứng - gọi theo tên tự đặt 
	$('[hienthi="modi"]').animate({opacity:0.2})
	$('[hienthi="komo"]').animate({width:300})



	//-----------------
	// Hiệu ứng popover 
	<div class="btn btn-default" hu="popover" 
	data-placement="left" title="tiêu đề của POP" data-content="hieu ứng popover quá đơn giản"> Click vào thì biết </div>
	$('[hu="popover"]').popover(); 
	// những phần tử có thuộc tính hu="popover" sẽ chạy hiệu ứng popover.



	//-------------------
	//Hiệu ứng tooltip
	<div class="btn btn-default" hieuung="tooltip" 
	 title="Tooltip là cái đang hiện ra này" data-placement="left" >
	 Click vào thì biết </div>
	$('[hieuung="tooltip"]').tooltip(); 
	//nên áp dụng popover và tooltip vào những thẻ nào không xuống dòng 
	// Giả sử thẻ p sẽ hiển thị cuối dòng -> add thêm thẻ span
	


	//---------
	dropdown và collapse/acordion

	// modal và carousel 
	bs3-modal - kích vào xổ ra thông tin, ảnh ,.. viết html trong modal-body như bình thường 
	bs3-carousel - hiển thị slide ảnh 
	




})
(function($){
	$(document).ready(function(){
		

	// input-text focus/blur >>> start
		
		$('.input-text__input').focus(function(){
			
			if($(this).val() === ''){
				
				let input = $(this).closest('.input');
				let input__label = input.find('.input__label');
				
				$(this).addClass('_focus');
				input__label.animate({'top':'30px'}, 50, function(){
					$(this).fadeOut(50);
				});
			}

		}).blur(function(){

			if($(this).val() === ''){
				
				let input = $(this).closest('.input');
				let input__label = input.find('.input__label');

				$(this).removeClass('_focus');
				input__label.animate({'top':'18px'},50, function(){
					$(this).fadeIn(50);
				});
			}

		}); // input-text focus/blur <<< end


	// input-file change >>> start

		$('.input-file__input').change(function() {
			console.log('was change');
   				
   			if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    		else $(this).prev().text('Выберите файлы');
		});

	});
})(jQuery);
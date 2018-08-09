(function($){
	
	ClassicEditor
        .create( document.querySelector( '#editor' ),{
        	language: 'zh-cn'
        })
        .catch( error => {
            console.error( error );
        } );
	
})(jQuery);


    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":963},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-music-page","displayName":"Music Page","link":{"linkType":"LinkTypePage","href":"#!page-music-page"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true}]}
        $(document).ready(function() {
        	$('.fancybox').each(function () {
        	    var href = this.getAttribute('data-silex-href') || this.getAttribute('href');
        	    if (this.getAttribute('data-silex-href')) {
            	    this.removeAttribute('data-silex-href');
            	    // for the fancybox script
            	    this.setAttribute('href', href);
            	    // prevent silex from opening link
            	    $(this).off('click');
        	    }
        	    // this is a galery
        	    this.setAttribute('data-fancybox-group', 'group1');
        	});
        	// create the fancybox
        	$('.fancybox').fancybox();
        });
    
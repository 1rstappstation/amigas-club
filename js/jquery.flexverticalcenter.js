(function($){$.fn.flexVerticalCenter=function(options){var settings=$.extend({cssAttribute:'margin-top',verticalOffset:0,parentSelector:null,debounceTimeout:25,deferTilWindowLoad:false},options||{});return this.each(function(){var $this=$(this);var debounce;var resizer=function(){var parentHeight=(settings.parentSelector&&$this.parents(settings.parentSelector).length)?$this.parents(settings.parentSelector).first().height():$this.parent().height();$this.css(settings.cssAttribute,(((parentHeight-$this.height())/2)+parseInt(settings.verticalOffset)));if(settings.complete!==undefined){settings.complete();}};$(window).resize(function(){clearTimeout(debounce);debounce=setTimeout(resizer,settings.debounceTimeout);});if(!settings.deferTilWindowLoad){resizer();}$(window).load(function(){resizer();});});};})(jQuery);
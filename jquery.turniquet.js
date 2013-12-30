(function($) {
    
    $.fn.turniquet = function(options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            zindex : 500,
            direction: 'up',
            reverseZindex: false,
            duration: 200,
            easing: 'swing',
            animateOnCLick: true,
            triggerUp: null,
            triggerDown: null,
            complete: null,
            before: null,
            after: null,
            loop: true,
            validate: function(){return true;}
        }, options);
        
        var windowWidth = this.parent().width(),
            windowHeight = this.parent().height(),
            zIndexI = settings.zindex,
            children = this.children(),
            nbChild = children.length,
            childWidth = $(children[0]).width(),
            childHeight = $(children[0]).height(),
            positions = [],
            objectMovingCounter = 0,
            animationCounter = 0;
        
        var animate = function(direction){
            if(typeof direction != 'string'){
                direction = settings.direction;
            }
            
            // check if no animation is running and if the current slide is allow to change
            if(objectMovingCounter == 0 && settings.validate(animationCounter)){
            	// stop looping
            	if(settings.loop == false && ((animationCounter+1) >= nbChild)){
            		return false;
            	}
                // for each child of main collection
                children.each(function(index, element){
                    var $c = $(element),
                        dataIndex = parseInt($c.attr('data-index')),
                        newIndex = 0,
                        down = null,
                        animTop = '',
                        animLeft = '';
                    
                    if(direction == 'up'){// up
                        newIndex = nbChild-1;
                        down = true;
                        if(dataIndex > 0){
                            newIndex = dataIndex-1;
                            down = false;
                        }
                    }else{ // down
                        newIndex = 0;
                        down = false;
                        if(dataIndex < (nbChild-1)){
                            newIndex = dataIndex+1;
                            down = true;
                        }
                    }
                    
                    // Change data index
                    $c.attr('data-index', newIndex);
                    
                    // Trigger before method
                    if(typeof settings.before == 'function'){
                        settings.before(index, element);
                    }
                                
                    if(!down){
                        animTop = '-='+($c.position().top - positions[newIndex].top);
                        animLeft = '-='+($c.position().left - positions[newIndex].left);
                    }else{
                        if(direction == 'up'){
                            animTop = '+='+($c.position().top + positions[newIndex].top);
                            animLeft = '+='+($c.position().left + positions[newIndex].left);
                        }else{
                            animTop = '+='+(positions[newIndex].top - $c.position().top);
                            animLeft = '+='+(positions[newIndex].left - $c.position().left);
                        }
                    }
                    
                    objectMovingCounter++;
                    
                    // change z-index
                    if(direction == 'up'){
                        $c.css('z-index', positions[newIndex].zindex);
                    }else{// delay z-index
                        var ozIndex = {
                            zindex : positions[newIndex].zindex    
                        };
                        setTimeout(function(){
                            $c.css('z-index', ozIndex.zindex);
                        }, settings.duration);
                    }
                    
                    // Animate slides
                    $c.animate({
                        left: animLeft,
                        top: animTop
                    }, settings.duration, settings.easing, function(){
                        if(objectMovingCounter > 0){
                        	objectMovingCounter --;
                        }
                    });

                    // Trigger before method
                    if(typeof settings.before == 'function'){
                        setTimeout(function(){
                            settings.after(index, element);
                        }, settings.duration);
                    }
                    
                });

                // Trigger complete method
                if(typeof settings.complete == 'function'){
                    setTimeout(settings.complete, settings.duration);
                }
                animationCounter++;
            }
        };
        
        // Initilize First Position
        children.each(function(index, element){
            var $e = $(element);
            if(settings.reverseZindex == false){
            	zIndexI--;
            }else{
            	zIndexI++;
            }
            
            // Calculate position of each slide
            var left = (((windowWidth-(childWidth))/(nbChild-1))*index);
            var top = (((windowHeight-(childHeight))/(nbChild-1))*index);
            
            positions[index] = {
                'top':top,
                'left':left,
                'zindex':zIndexI
            };
            
            // Position slides
            $e.css('top', top)
                .css('left', left)
                .css('z-index', zIndexI)
                .attr('data-index', index);
        });
        
        //Manage Click
        if(settings.animateOnCLick){
            children.click(animate);
        }
        
        if(settings.triggerUp != null){
            var $triggerUp = $(settings.triggerUp);
            if($triggerUp.length > 0){
                $triggerUp.click(function(){
                    animate('up');
                });
            }
        }
        
        if(settings.triggerDown != null){
            var $triggerDown = $(settings.triggerDown);
            if($triggerDown.length > 0){
                $triggerDown.click(function(){
                    animate('down');
                });
            }
        }
        
        return this;
    };
    
}(jQuery));
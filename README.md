# Turniquet plugin for jQuery

turniquet is a new type of slider for jQuery. Instead of the typical horizontal slider, this slider is following a diagonal of a div.
Sliding can occur in both direction (Up or down).

## Why turniquet and not tourniquet?

Tourniquet in french is not bandage. In general it's use to describe a turnstyle.

I replaced "tourn" which almost mean "turn" in french by "turn" and got the word "turniquet". 

## How to Use?

turniquet depends on jQuery (>= 1.10.0). Include them both in end of your HTML code:

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.turniquet.js" type="text/javascript"></script>
```

You must use an ordered list. And add a few line of CSS.

```html
    <style type="text/css">
        .container {
            position: relative;
            height: 600px;
        }
        .turniquet {
            position: relative;
            margin:0;
        }
        .turniquet li {
            position:absolute;
            display:block;
            width:350px;
            height:350px;
            list-style: none;
        }
    </style>
    <div class="container">
        <ul class="turniquet">
            <li><img src="http://placehold.it/350&text=Slide1" /></li>
            <li><img src="http://placehold.it/350&text=Slide2" /></li>
            <li><img src="http://placehold.it/350&text=Slide3" /></li>
        </ul>
    </div>
```

then in your code do:


```html
$('.turniquet').turniquet();
```

This will activate the silder. 


## Options

```html
{
    // These are the defaults.
    zindex : 10000,
    direction: 'up',
    duration: 200,
    easing: 'swing',
    animateOnCLick: true,
    triggerUp: null,
    triggerDown: null,
    complete: null,
    before: null,
    after: null
}
```

### zindex

Define what zindex the first slide should use.

### reverseZindex

Define what zindex the other slide should use +1 or -1.

### direction

Define the default direction.

### duration

Define the duration of the animation

### easing

Define what type of animation to use. This are default jQuery animation. As today there is only "easing" and "linear".

### animateOnCLick

Will animate slider when clicking on any slider

### triggerUp

Selector to use as a trigger to make the slide slide up.
```htm
$('.turniquet').turniquet({
    triggerUp: '.myTriggerClass'
});
```

### triggerDown

Same as "triggerUp" but for the other direction

### complete

Method to call after animation complete

### before

Method to call before animation each slide.
```htm
$('.turniquet').turniquet({
    before: function(index, element){
        //element is the current element
    }
});
```

### after

Same a "before" but for after

# License

All code licensed under the "MIT License":http://www.opensource.org/licenses/mit-license.php. In other words you are basically free to do whatever you want. Just don't remove my name from the source.

# Changelog

### 0.0.2

* Added ability to reverse zindex

### 0.0.1

* First version of turniquet
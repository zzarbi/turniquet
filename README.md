h1. Turniquet plugin for jQuery

turniquet is a new type of slider for jQuery. Instead of the typical horizontal slider, this slider is following a diagonal of a div.

Sliding can occur in both direction (Up or down).

h2. Why turniquet and not tourniquet?

Tourniquet in french is not bandage. In general it's use to describe a turnstyle.

I replaced "tourn" which almost mean "turn" in french by "turn" and got the word "turniquet". 

h2. How to Use?

turniquet depends on jQuery. Include them both in end of your HTML code:

<pre><script src="jquery.js" type="text/javascript"></script>
<script src="jquery.turniquet.js" type="text/javascript"></script></pre>

You must use an ordered list. And add a few line of CSS.

<pre>
    <style type="text/css">
        .jumbotron {
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
    <div class="jumbotron">
        <ul class="turniquet">
            <li><img src="http://placehold.it/350&text=Slide1" /></li>
            <li><img src="http://placehold.it/350&text=Slide2" /></li>
            <li><img src="http://placehold.it/350&text=Slide3" /></li>
        </ul>
    </div>
</pre>

then in your code do:

<pre>$('.turniquet').turniquet();</pre>

This will activate the silder. 


h2. Options

<pre>
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
</pre>

h3. zindex

Define what zindex the first slide should use. The next slide will use zindex-1 and so on.

h3. direction

Define the default direction.

h3. duration

Define the duration of the animation

h3 . easing

Define what type of animation to use. This are default jQuery animation. As today there is only "easing" and "linear".

h3. animateOnCLick

Will animate slider when clicking on any slider

h3. triggerUp

Selector to use as a trigger to make the slide slide up.
<pre>$('.turniquet').turniquet({
    triggerUp: '.myTriggerClass'
});</pre>

h3. triggerDown

Same as "triggerUp" but for the other direction

h3. complete

Method to call after animation complete

h3. before

Method to call before animation each slide.
<pre>$('.turniquet').turniquet({
    before: function(index, element){
        //element is the current element
    }
});</pre>

h3. after

Same a "before" but for after

h1. License

All code licensed under the "MIT License":http://www.opensource.org/licenses/mit-license.php. In other words you are basically free to do whatever you want. Just don't remove my name from the source.

h1. Changelog

h3. 0.0.1

* First version of turniquet
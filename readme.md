# Unicode.js

Unicode.js is a small javascript library, which converts letters of a given text to some of the more artistic unicode alphabets.

### Instructions

`Unicode.js` is a stand alone, vanilla javascript library, so usage is pretty straight forward. Its a matter of creating a new instance of `Unicoder`, and calling `translate`.

#### JS

`Overscroll.js` is fairly straight forward when it comes to kicking it off, you'll need to create a new instance of overscroll (and include the script in the page), and then bind elements to it once they have been rendered. You can do this with `document.querySelector`.

```html
<img class="easter-egg-element" src="./img/awesome-source.png" />

<script>
var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element'));
}
</script>
```

There are options, for when the easter egg is at the top, or bottom.

```html
<img class="easter-egg-element top" src="./img/awesome-source.png" />
<img class="easter-egg-element bottom" src="./img/awesome-source.png" />

<script>
var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element.top'), 'top');
	overscroll.bindElement(document.querySelector('.easter-egg-element.bottom'), 'bottom');
}
</script>
```

And finally, a delta, to show how sensitive the scroll should be, when in the overscroll area... this makes it easier for people to find, but isn't really necessary.

```html
<img class="easter-egg-element" src="./img/awesome-source.png" />

<script>
var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element'), 'top', 2);
}
</script>
```

### License

The MIT License (MIT)

Copyright (C) 2015 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com

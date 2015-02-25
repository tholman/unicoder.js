# Unicoder.js

Unicoder.js is a small javascript library, which converts letters of a given text to some of the more artistic unicode alphabets ⓛⓘⓚⓔ ⓣⓗⓘⓢ, 🅰🅽🅳 🆃🅷🅸🆂. You can try it out live, [here](http://tholman.com/unicoder.js).

### Instructions

`Unicoder.js` is a stand alone, vanilla javascript library, so usage is pretty straight forward. Its a matter of creating a new instance of `Unicoder`, and calling `translate`.

#### JS

`Unicoder.js` is built with a single purpose in mind, so there aren't really a whole lot of different things that can be need to be done with it. It translates the text, that is all. 

The most basic example, would be below, translating some text, using a dictionary. (examples above) The dictionary defines the type of unicode characters to be returned.

```javascript
// Unicoder.js file referenced somewhere above...
var unicoder = new Unicoder();

console.log( unicoder.translate('Hello, how are you.', 'fraktur') );
// returns: 𝕳𝖊𝖑𝖑𝖔, 𝖍𝖔𝖜 𝖆𝖗𝖊 𝖞𝖔𝖚.
```

In the first example, the dictionary is hard coded. `Unicoder.js` also provides a function to get the list of current dictionaries available.

```javascript
// Unicoder.js file referenced somewhere above...
var unicoder = new Unicoder();

console.log( unicoder.getDictionaryKeys() );
// returns: ["circled", "negative-circled", "squared", "negative-squared", "script", "fraktur", "parenthesized", "monospace"]
```

### Demo & Examples

You can play around with a small demo [here](http://tholman.com/unicoder.js)... but just for fun, here are some live samples of the results.

| Dictionary       	| Output                                                                                           	|
|------------------	|--------------------------------------------------------------------------------------------------	|
| Circled          	| Ⓣⓗⓔⓢⓔ ⓐⓡⓔ ⓓⓘⓕⓕⓔⓡⓔⓝⓣ ⓔⓧⓐⓜⓟⓛⓔⓢ ⓞⓕ ⓤⓝⓘⓒⓞⓓⓔⓡ.ⓙⓢ ⓞⓤⓣⓟⓤⓣⓢ.                                             	|
| Negative-Circled 	| 🅣🅗🅔🅢🅔 🅐🅡🅔 🅓🅘🅕🅕🅔🅡🅔🅝🅣 🅔🅧🅐🅜🅟🅛🅔🅢 🅞🅕 🅤🅝🅘🅒🅞🅓🅔🅡.🅙🅢 🅞🅤🅣🅟🅤🅣🅢. 	|
| Squared          	| 🅃🄷🄴🅂🄴 🄰🅁🄴 🄳🄸🄵🄵🄴🅁🄴🄽🅃 🄴🅇🄰🄼🄿🄻🄴🅂 🄾🄵 🅄🄽🄸🄲🄾🄳🄴🅁.🄹🅂                 	|
| Negative-Squared 	| 🆃🅷🅴🆂🅴 🅰🆁🅴 🅳🅸🅵🅵🅴🆁🅴🅽🆃 🅴🆇🅰🅼🅿🅻🅴🆂 🅾🅵 🆄🅽🅸🅲🅾🅳🅴🆁.🅹🆂                 	|
| Script           	| 𝓣𝓱𝓮𝓼𝓮 𝓪𝓻𝓮 𝓭𝓲𝓯𝓯𝓮𝓻𝓮𝓷𝓽 𝓮𝔁𝓪𝓶𝓹𝓵𝓮𝓼 𝓸𝓯 𝓾𝓷𝓲𝓬𝓸𝓭𝓮𝓻.𝓳𝓼 𝓸𝓾𝓽𝓹𝓾𝓽𝓼. 	|
| Fraktur          	| 𝕿𝖍𝖊𝖘𝖊 𝖆𝖗𝖊 𝖉𝖎𝖋𝖋𝖊𝖗𝖊𝖓𝖙 𝖊𝖝𝖆𝖒𝖕𝖑𝖊𝖘 𝖔𝖋 𝖚𝖓𝖎𝖈𝖔𝖉𝖊𝖗.𝖏𝖘 𝖔𝖚𝖙𝖕𝖚𝖙𝖘. 	|
| Parenthesized    	| ⒯⒣⒠⒮⒠ ⒜⒭⒠ ⒟⒤⒡⒡⒠⒭⒠⒩⒯ ⒠⒳⒜⒨⒫⒧⒠⒮ ⒪⒡ ⒰⒩⒤⒞⒪⒟⒠⒭.⒥⒮ ⒪⒰⒯⒫⒰⒯⒮.                                             	|
| Monospace        	| 𝚃𝚑𝚎𝚜𝚎 𝚊𝚛𝚎 𝚍𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚝 𝚎𝚡𝚊𝚖𝚙𝚕𝚎𝚜 𝚘𝚏 𝚞𝚗𝚒𝚌𝚘𝚍𝚎𝚛.𝚓𝚜 𝚘𝚞𝚝𝚙𝚞𝚝𝚜. 	|


### License & Acknowledgements
The main goal here was to make an open source, js version of [this unicode toy](http://www.panix.com/~eli/unicode/convert.cgi?text=hello), its awesome. Also [this little tool](http://rishida.net/tools/conversion/) and [this dictionary](http://unicode-table.com/en/) where super useful in helping to understand the unicode system & structure.

The MIT License (MIT)

Copyright (C) 2015 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com

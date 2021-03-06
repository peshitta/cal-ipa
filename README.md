# cal-ipa

[![npm version](https://badge.fury.io/js/cal-ipa.svg)](https://badge.fury.io/js/cal-ipa)
[![npm module downloads](http://img.shields.io/npm/dt/cal-ipa.svg)](https://www.npmjs.org/package/cal-ipa)
[![Build Status](https://travis-ci.org/peshitta/cal-ipa.svg?branch=master)](https://travis-ci.org/peshitta/cal-ipa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-ipa/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-ipa.svg)](https://david-dm.org/peshitta/cal-ipa)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-ipa/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-ipa?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Transliterate CAL code to IPA

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-ipa --save
```

Following bundles are available:
* `cal-ipa.js` - UMD ES5 version for use in browser, node, etc.
* `cal-ipa.min.js` - minified version of `cal-ipa.js`
* `cal-ipa.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-ipa/-/cal-ipa-1.0.3.tgz](https://registry.npmjs.org/cal-ipa/-/cal-ipa-1.0.3.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/cal-ipa/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-ipa/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [calIpa](#module_calIpa)
    * [.mapper](#module_calIpa.mapper) : <code>Mapper</code>
    * [.toIpa](#module_calIpa.toIpa) ⇒ <code>string</code>

<a name="module_calIpa.mapper"></a>

### calIpa.mapper : <code>Mapper</code>
IPA Mapper

**Kind**: static constant of [<code>calIpa</code>](#module_calIpa)  
<a name="module_calIpa.toIpa"></a>

### calIpa.toIpa ⇒ <code>string</code>
Convert from CAL to IPA Unicode

**Kind**: static constant of [<code>calIpa</code>](#module_calIpa)  
**Returns**: <code>string</code> - the input word converted to IPA Unicode  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |


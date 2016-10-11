
# is-semver

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/is-semver.svg)](https://www.npmjs.com/package/is-semver) [![Downloads](https://img.shields.io/npm/dt/is-semver.svg)](https://www.npmjs.com/package/is-semver) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if an input value is a valid semver version or not.

## :cloud: Installation

```sh
$ npm i --save is-semver
```


## :clipboard: Example



```js
const isSemver = require("is-semver");

console.log(isSemver("1.2.3"));
// => true

console.log(isSemver("a.b.c"));
// => false

console.log(isSemver("foo"));
// => false
```

## :memo: Documentation


### `isSemver(input)`
Checks if the input value is a valid semver version.

#### Params
- **String** `input`: The input value.

#### Return
- **Boolean** Returns `true` if the input is a valid semver version or `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`generator-cosmia`](https://github.com/theoutliar/generator-cosmia#readme) (by Christopher J Gore)—Yeoman generator for cosmia
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`kanpai`](https://github.com/egoist/kanpai#readme) (by EGOIST)—🍻  Kanpai to publish a new version of your module!
 - [`nwjs`](https://github.com/egoist/nwjs#readme) (by EGOIST)—Install nw.js prebuilts using npm
 - [`nwjs-bf`](https://github.com/kruemelo/nwjs-bf#readme) (by kruemelo)—Install SDK/NaCl nw.js prebuilts using npm
 - [`nwjs-versions`](https://github.com/egoist/nwjs-versions#readme) (by EGOIST)—Get all available nw.js versions.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

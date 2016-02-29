# is-semver [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/is-semver.svg)](https://www.npmjs.com/package/is-semver) [![Downloads](https://img.shields.io/npm/dt/is-semver.svg)](https://www.npmjs.com/package/is-semver) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if an input value is a valid semver version or not.

## Installation

```sh
$ npm i --save is-semver
```

## Example

```js
const isSemver = require("is-semver");

console.log(isSemver("1.2.3"));
// => true

console.log(isSemver("a.b.c"));
// => false

console.log(isSemver("foo"));
// => false
```

## Documentation

### `isSemver(input)`
Checks if the input value is a valid semver version.

#### Params
- **String** `input`: The input value.

#### Return
- **Boolean** Returns `true` if the input is a valid semver version or `false` otherwise.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

- [kanpai](https://github.com/egoist/kanpai) - An alternative to `npm publish`
- [nwjs](https://github.com/egoist/nwjs) - NW.js version manager

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
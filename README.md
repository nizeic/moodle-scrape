# moodle-scrape
[![NPM](https://nodei.co/npm/moodle-scrape.png)](https://www.npmjs.com/package/moodle-scrape)<br>
Easily scrape data from moodle sites

# Installation
```sh
npm install moodle-scrape
```
```js
const { Moodle } = await import("moodle-scrape"); // CommonJS, must be in an async function
// or
import { Moodle } from "moodle-scrape"; // ESM
```

# Example
```js
const moodle = new Moodle("https://testsite.com"); // must have no trailing slash

const cookies = await moodle.login('supercoolusername', 'superCoolpassword123');
// will also be stored in moodle.cookies property

if (!cookies) {
	return; // login failed or no cookies received
}

const user = await moodle.getInfo(cookies);
// cookies parameter is optional, will default to moodle.cookies stored by .login()

if (!user) {
	return; // no user found or error while parsing
}

console.log(user.name); // string
console.log(user.courses); // array of strings
console.log(user.tasks); // array of objects
```
or view the [example](example.js) script
<h1 align="center">
   <b>
        <h6>Random User Agent</h6><br>
    </b>
</h1>

## Install
Using npm:

```bash
$ npm install https://github.com/dedesundara/user-agent
```

Using yarn:

```bash
$ yarn add https://github.com/dedesundara/user-agent
```

Using pnpm:

```bash
$ pnpm add https://github.com/dedesundara/user-agent
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
// const {GeneratorUA, GeneratorUAType} = require("@dedesundara/user-agent");
import {GeneratorUA, GeneratorUAType} from '@dedesundara/user-agent';
const randomUA = new GeneratorUA().generate([GeneratorUAType.chromeWin]);
console.log(randomUA);
```

Example Result:

```js
{
  useragent: 'Mozilla/5.0 (Linux; Android 10; SM-T837V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5553.226 Mobile Safari/537.36',
  engine: 'blink',
  osType: 'android',
  browser: 'chrome',
  browserVersion: { major: 113, full: '113.0.5553.226' }
}
```

Other type:

```js
GeneratorUAType {
    edgeWin = "edge_win",
    edgeMac = "edge_mac",
    chromeWin = "chrome_win",
    chromeMac = "chrome_mac",
    chromeLinux = "chrome_linux",
    chromeAndroid = "chrome_android",
    firefoxWin = "firefox_win",
    firefoxMac = "firefox_mac",
    firefoxLinux = "firefox_linux",
    firefoxAndroid = "firefox_android",
    operaWin = "opera_win",
    operaMac = "opera_mac",
    safariIphone = "safari_iphone",
    safariMac = "safari_mac"
}
```
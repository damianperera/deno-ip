# isIP

[![tag](https://img.shields.io/github/tag/ako-deno/isIP.svg)](https://github.com/ako-deno/isIP/tags)

An IP address library for Deno which provides access to [ipify.org](https://ipify.org) APIs to detect your IP address or lookup geolocation data on a provided IP address, domain or email.

# Usage

```javascript
import { IP } from 'https://deno.land/x/ip/mod.ts'

const apiToken: string = 'xxx'
const ipAddress = new IP.Address() // does not require an API token
const geoLocate = new IP.GeoLocation(apiToken)

const myIPAddress = await ipAddress.get().then((res: string) => {
    console.log(res)
}))

const myIPAddressGeolocation = await geoLocate.get().then((res: object) => {
    console.log(res)
})

const myIPAddressGeolocation = await geoLocate.get().then((res: object) => {
    console.log(res)
})

const myDomainGeolocation = await geoLocate.getDomain('deno.land').then((res: object) => {
    console.log(res)
})

const myEmailGeolocation = await geoLocate.getEmail('ip@deno.land').then((res: object) => {
    console.log(res)
})
```

If your having any issues using this module please check [test.ts](./test.ts).

# License

[MIT](./LICENSE)
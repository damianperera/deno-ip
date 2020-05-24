# IP

An IP address library for Deno which provides access to [ipify.org](https://ipify.org) APIs to detect your IP address or lookup geolocation data on a provided IP address, domain or email.

# Usage

## API Token
While the `Address` class can be used without an API token, in order to use the `GeoLocation` class you need to obtain one from [geo.ipify.org](https://geo.ipify.org).

## Example
```typescript
import { IP } from 'https://deno.land/x/ip/mod.ts'

const apiToken: string = 'xxx'
const ipAddress = new IP.Address()
const geoLocate = new IP.GeoLocation(apiToken)

const myIPAddress = await ipAddress.get().then((res: string) => {
    console.log(res)
}))

const myIPAddressGeolocation = await geoLocate.get().then((res: object) => {
    console.log(res)
})

const googleIPAddressGeolocation = await geoLocate.get('8.8.8.8').then((res: object) => {
    console.log(res)
})

const myDomainGeolocation = await geoLocate.getDomain('deno.land').then((res: object) => {
    console.log(res)
})

const myEmailGeolocation = await geoLocate.getEmail('ip@deno.land').then((res: object) => {
    console.log(res)
})
```

If your having any issues using this module please check [test.ts](https://deno.land/x/ip/test.ts).

# License

[MIT](./LICENSE)

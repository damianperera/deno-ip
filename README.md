# IP
[![Deno Module](https://img.shields.io/badge/Module-Deno-blue)](https://deno.land/x) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## Running Tests
In order to run the tests first export your API token to `IPIFY_API_TOKEN` in your local environment and execute the Deno test command from the root directory.
```bash
export IPIFY_API_TOKEN=xxxx
deno test --allow-net --allow-env
```

If your having any issues using this module please refer [test.ts](https://deno.land/x/ip/test.ts) for usage examples.

# License

[MIT](./LICENSE)

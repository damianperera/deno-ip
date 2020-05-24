import { assert, assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isIP } from 'https://deno.land/x/isIP/mod.ts'
import { IP } from './mod.ts'

const { test } = Deno
const apiToken: string = Deno.args[0]

const ipAddress = new IP.Address()
const geoLocate = new IP.GeoLocation(apiToken)

test('fetch IP', async () => {
    await ipAddress.get().then((res) => assert(isIP(res)))
})
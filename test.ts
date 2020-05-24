import { assert, assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isIP } from 'https://deno.land/x/isIP/mod.ts'
import { IP } from './mod.ts'

const { test } = Deno
const apiToken: any = Deno.env.get('IPIFY_API_TOKEN')

const ipAddress = new IP.Address()
const geoLocate = new IP.GeoLocation(apiToken)

test('Address.get', async () => {
    await ipAddress.get().then((res: string) => assert(isIP(res)))
})

test('GeoLocation.get without method args', async() => {
    await geoLocate.get().then((res: any) => assert(isIP(res.ip)))
})

test('GeoLocation.get with method args', async() => {
    await geoLocate.get('8.8.8.8').then((res: any) => assert(res.isp === 'Google LLC'))
})

test('GeoLocation.getDomain with method args', async() => {
    await geoLocate.getDomain('example.com').then((res: any) => assert(res.isp === 'EDGECAST'))
})

test('GeoLocation.getEmail with method args', async() => {
    await geoLocate.getEmail('whatever@mailinator.com').then((res: any) => assert(res.isp === 'Linode'))
})
import { soxa as api } from 'https://deno.land/x/soxa/mod.ts'

export namespace IP {
    
    interface Service {
        get(ipAddress?: string): Promise<any>
    }

    export class Address implements Service {

        private readonly BASE_URL: string = 'http://api.ipify.org'
        private httpClient: typeof api = api
        private readonly options: object = {
            params: {
                format: 'json'
            }
        }

        get = (): Promise<string> => new Promise<string>(
            (resolve, reject) => {
                this.httpClient.get(this.BASE_URL, this.options)
                    .then((response) => {
                        resolve(response.data.ip)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        )
    }

    export class GeoLocation implements Service {

        private readonly BASE_URL: string = 'http://geo.ipify.org'
        private httpClient: typeof api = api
        private apiToken: string

        constructor(apiToken: string) {
            this.apiToken = apiToken
        }

        get = (ipAddress: string): Promise<object> => new Promise<object>(
            (resolve, reject) => {
                const options: object = {
                    params: {
                        apiKey: this.apiToken,
                        ipAddress
                    }
                }

                this.httpClient.get(this.BASE_URL, options)
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        )

        getDomain = (domain: string): Promise<object> => new Promise<object>(
            (resolve, reject) => {
                const options: object = {
                    params: {
                        apiKey: this.apiToken,
                        domain
                    }
                }

                this.httpClient.get(this.BASE_URL, options)
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        )

        getEmail = (email: string): Promise<object> => new Promise<object>(
            (resolve, reject) => {
                const options: object = {
                    params: {
                        apiKey: this.apiToken,
                        email
                    }
                }

                this.httpClient.get(this.BASE_URL, options)
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        )
    }
}
import { ref } from "vue"

export const tokenPrices = ref(new Map<string, string>())
export const tokenWebsockets = ref(new Map<string, InterfaceCryptoPriceWebSocket>())

export interface InterfaceCryptoPriceWebSocket {
    subscribeToSocket(token: string): void
    closeSocket(token: string): void
}

export class CryptoPriceWebSocket implements InterfaceCryptoPriceWebSocket {
    private readonly socket: WebSocket

    constructor(token: string) {
        this.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${token}usdt@trade`)
        this.socket.addEventListener("error", (event) => console.error("Error encountered in websocket connection", event))
        this.socket.addEventListener("close", (event) => {
            if (event.code !== 1000) {
                console.error("Websocket erroneously closed due to:", event)
            }
        })
    }

    subscribeToSocket(token: string) {
        //tokenPrices.value.set(token, "00.00")
        this.socket.onmessage = (message) => {
            console.log(token)
            const price = JSON.parse(message.data).p
            tokenPrices.value.set(token, price)
        }
    }

    closeSocket(token: string) {
        console.warn("Socket close")
        tokenPrices.value.delete(token)
        this.socket.close(1000)
    }
}

export const priceWebSocket = (token: string): InterfaceCryptoPriceWebSocket => {
    return new CryptoPriceWebSocket(token)
}

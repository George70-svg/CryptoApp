declare module '*.vue' {
    import { defineComponent } from 'vue'

    const Component: DefineComponent<typeof defineComponent>
    export default Component
}

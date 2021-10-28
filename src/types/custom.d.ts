declare global {
    namespace NodeJS {
        interface Global {
            app_config: {
                CSS_ID: string
            }
        }
    }
}
export default global;
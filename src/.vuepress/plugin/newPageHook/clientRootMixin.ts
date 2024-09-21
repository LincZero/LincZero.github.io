/**
 * 这个是V1的旧API，现在已经不用了。取之替代的是clientConfigFile
 */

export default {
    updated() {
        console.log("clientRootMixin file 1")
        setTimeout(() => {
            console.log("clientRootMixin file 2")
        }, 100)
    }
}

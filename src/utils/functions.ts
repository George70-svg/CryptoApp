export const getIndexAfterDote = (string: string): number | null => {
    if(string.indexOf('.') !== -1) {
        return string.indexOf(".")
    } else {
        return null
    }
}

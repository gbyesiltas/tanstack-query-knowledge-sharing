/**
 * Promise based sleep method based on [this blog post](https://www.sitepoint.com/delay-sleep-pause-wait/)
 */
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export const ddd = (time: number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(time);
    }, time)
})
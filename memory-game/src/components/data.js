const names = ['react', 'java', 'css', 'nodejs', 'html', 'js']

const data = [...names, ...names].map((n, i) => {
    return {
        id: i,
        name: n,
        img: `images/${n}.png`,
        matched: false,
    }
})

export default data

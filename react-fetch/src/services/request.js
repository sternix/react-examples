function parseFormData(data) {
    const formData = new FormData()
    for (let [key, value] of Object.entries(data)) {
        formData.append(key, value)
    }
    return formData
}

const URL = 'https://jsonplaceholder.typicode.com'

function request(url , data = false, method = 'GET', format = 'JSON') {
    return new Promise(async (resolve, reject) => {
        const options = {
            method
        }

        if (data && method === 'POST') {
            options.body = format === 'JSON' ? JSON.stringify(data) : parseFormData(data)
        }

        const response = await fetch(URL + url, options)
        const result = await response.json()
        if (response.ok && response.status >= 200 && response.status < 300) {
            resolve(result)
        } else {
            reject(result)
        }
    })
}

export const post = (url, data) => request(url, data, 'POST')
export const postForm = (url, data) => request(url, data, 'POST', 'FORM')
export const get = url => request(url)
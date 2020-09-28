export const fetchGet = (async (apiUrl: string) => {
    try {
            const result = await fetch(apiUrl)
            const data = await result.json()
            return data 
    } catch(err) {
            console.log(err.message)
    }            
})

export const fetchPost = (async (apiUrl: string, bodyParam: object) => {
    try {
            const result = await fetch(apiUrl, {
                method: 'post',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(bodyParam)
              })
            const data = await result.json()
            return data 
    } catch(err) {
            console.log(err.message)
    }            
})
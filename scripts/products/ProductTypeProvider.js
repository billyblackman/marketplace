let types = []

export const useProductTypes = () => types.slice()

export const getProductTypes = () => fetch("http://localhost:9000/producttypes")
    .then(res => res.json())
    .then(parsedTypes => types = parsedTypes)
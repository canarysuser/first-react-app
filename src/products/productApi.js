import axios from "axios";
const productURL = "http://localhost:5000/products";

const axiosInstance = axios.create({
    baseURL: productURL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000, // Set a timeout of 5 seconds
    maxContentLength: 65536,
})



export async function getProducts() { 
    //var response = await axios.get(productURL);
    var response = await axiosInstance.get('/');
    return response.data;
}

// export async function getProducts() {
//     // setTimeout(); -- after 1 second
//     // setInterval(); -- after 1 second
//     // setImmediate(); -- immediately after the current operation completes
//     // Promise = runs immediately after the current operation completes or 
//     //     after the setImmediate queue is empty
//     try {
//         const response = await fetch(productURL);
//         var result= await response.json();
//         return result; 
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }
// }
// export function getProducts() { 
//     return fetch(productURL)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Error fetching products:", error);
//             throw error;
//         });
// }

export async function getProductById(productId) {
    try {
        const response = await fetch(`${productURL}/?productId=${productId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        var result = await response.json();
        return result[0];
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw error;
    }
}
export async function upsert(product) {
    let method = product.productId == 0 ? 'POST' : 'PUT';
    let Url = productURL;
    if(method=="PUT") {
        Url+= '/' + product.id;
    }
    //var list = await getProducts();
    //var lastId = list.(p => p.productId).sort((a, b) => b - a)[0];
    try {
        const response = await fetch(Url, {
            method: product.productId==0 ? 'POST' : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error upserting product:", error);
        throw error;
    }
}
export async function remove(productId) {
    try {
        const response = await fetch(`${productURL}/?productId=${productId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error removing product:", error);
        throw error;
    }
}
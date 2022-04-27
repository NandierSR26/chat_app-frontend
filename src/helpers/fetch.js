
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchSinToken = async(endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/api/${endpoint}`;

    if ( method === 'GET' ) {
        const resp = await fetch( url );
        return await resp.json();
    } else {
        const resp = await fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }
}

export const fetchConToken = async(endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/api/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        const resp = await fetch( url, {
            headers: {
                'x-token': token
            }
        });
        return await resp.json();
    } else {
        const resp = await fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }
}
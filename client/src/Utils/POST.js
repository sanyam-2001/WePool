export const POST = async (url, body) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(body);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    catch (err) {
        console.log("POST ERR: ", err);
        return {
            success: false,
            data: null,
            err: "Failed to make Request",
            code: "0000"
        }
    }

}

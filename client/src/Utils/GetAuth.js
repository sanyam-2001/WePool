const GetAuth = async (url) => {
    try {
        const JWT_TOKEN = localStorage.getItem("JWTTOKEN");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `BEARER ${JWT_TOKEN}`);


        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);
        const jsonReponse = response.json();
        return jsonReponse;

    }
    catch (err) {
        console.log(err);
        return {
            success: false,
            error: err || "ISE",
            data: null
        }
    }
}

export default GetAuth;
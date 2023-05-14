export const GET = async (url) => {
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    catch (err) {
        console.log("GET Error: ", err);
        return {
            success: false,
            data: null,
            err: "Failed to make Request",
            code: "0000"
        }
    }
}
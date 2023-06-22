import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

const Loader = () => {
    return (
        <>
            <ReactLoading
                type={"bars"}
                color={"#03fc4e"}
                height={100}
                width={150}
            />

        </>
    );
}

export default Loader;
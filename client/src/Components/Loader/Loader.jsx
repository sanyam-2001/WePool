import ReactLoading from "react-loading";

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
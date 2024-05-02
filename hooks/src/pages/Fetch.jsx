import useFetch from "../hooks/useFetch";

function Fetch() {
    const ret = useFetch('https://dog.ceo/api/breeds/image/random')
    if (!ret.response) {
        return <div>Loading...</div>
    } else if (ret.error) {
        return (
            <div>Error: {ret.error} </div>
        )
    }

    const imageUrl = ret.response.message
    return (
        <div>
            <img src={imageUrl} alt="avatar" width={400} height="auto" />
        </div>
    )
}

export default Fetch
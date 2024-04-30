import useSearchParam from "../hooks/useSearchParam";

// TODO: çalışmıyor

function SearchParam() {
    const post = useSearchParam('post');

    return (
        <>
            <p>Post param value: {post || 'null'}</p>
            <button
                onClick={() =>
                    window.history.pushState({}, '', window.location.pathname + '?post=42')
                }
            >
                View post 42
            </button>

            <button onClick={() => window.history.pushState({}, '', window.location.pathname)}>
                Exit
            </button>
        </>
    )
}

export default SearchParam
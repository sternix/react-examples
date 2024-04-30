import useLocalStorage from "../hooks/useLocalStorage";

function LocalStorage() {
    const [name, setName] = useLocalStorage('name', 'Yavuz');

    return (
        <input value={name} onChange={e => setName(e.target.value)} />
    )
}

export default LocalStorage
import useMergeState from "../hooks/useMergeState";

function MergeState() {
    const [data, setData] = useMergeState({ name: 'Yavuz', age: 18 });

    return (
        <>
            <input
                value={data.name}
                onChange={e => setData({ name: e.target.value })}
            />
            {data.name}
            <br />
            <button onClick={() => setData(({ age }) => ({ age: age - 1 }))}>
                -
            </button>
            {data.age}
            <button onClick={() => setData(({ age }) => ({ age: age + 1 }))}>
                +
            </button>
        </>
    );

}

export default MergeState
https://www.youtube.com/watch?v=KY6al2AiW_Q&list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-&index=11


1) Create tour context

    const AppContext = createContext()

2) Wrap Provider component:
<AppContext.Provider>
    <App/>
</AppContext.Provider>

3) Put data on value prop
<AppContext.Provider value="Hello">

4) Get data with useContext

```js
function Title() {
    // burada value olarak ne verdiysek onu alıyoruz
    // object verirsek destruct edebiliriz
    const text = useContext()
    return <h1>{text}</h1>
}

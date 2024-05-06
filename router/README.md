https://www.youtube.com/watch?v=QnH1q-saSeo&list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-&index=13

https://www.youtube.com/watch?v=Hua8Rq6oGoM&list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-&index=14

```sh
npm install react-router-dom
```

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
...
```

```code
<a href="/contact">İletişim</a>
```

yerine
```code
<Link to="/contact">İletişim</Link>
```

NavLink
varsayılan olarak seçili route'a active class'ını veriyor

```css
.active {
    background-color: yellow;
}
```

bu şeklide bir class tanımladığımızda aktif olan linke css class'ı tanımlayabiliyoruz

yada active yerine başka bir class kullanmak istersek

fonksiyon bize isActive değerini yolluyor, eğer true ise istediğimiz değeri - class'ı atayabiliyoruz

```js
<NavLink to="/" className={({ isActive }) => isActive && 'benimAktif' }>Anasayfa</NavLink>
```

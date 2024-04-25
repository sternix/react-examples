https://www.youtube.com/watch?v=QnH1q-saSeo&list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-&index=13

https://www.youtube.com/watch?v=Hua8Rq6oGoM&list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-&index=14

npm install react-router-dom

index.js'deki App bileşenini BrowserRouter'un içine al


<a href="/contact">İletişim</a>
yerine
<Link to="/contact">İletişim</Link>

NavLink
varsayılan olarak seçili route'a active class'ını veriyor


.active {
    background-color: yellow;
}

bu şeklide bir class tanımladığımızda aktif olan linke css class'ı tanımlayabiliyoruz

yada active yerine başka bir class kullanmak istersek

fonksiyon bize isActive değerini yolluyor, eğer true ise istediğimiz değeri - class'ı atayabiliyoruz
<NavLink to="/" className={({ isActive }) => isActive && 'benimAktif' }>Anasayfa</NavLink>
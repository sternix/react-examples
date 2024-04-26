https://www.youtube.com/watch?v=RAR72L8YX_0&list=PLfAfrKyDRWrGXWpnJdyC4yXIW6v-PcFu-&index=18


create-react-app react-redux
cd react-redux

```sh
rm public/favicon.ico public/logo* public/manifest.json public/robots.txt

rm src/App.css src/App.test.js src/index.css src/logo.svg src/reportWebVitals.js src/setupTests.js src/App.js
```

vim public/index.html
```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

vim src/App.jsx
```js
function App() {
    return (
        <h1>
            Hello world! from React
        </h1>
    )
}

export default App
```

vim src/index.js
```js
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

```sh
npm install @reduxjs/toolkit react-redux
npm install nanoid
```



import { Helmet } from "react-helmet"

function Index() {
  return (
    <div>
      <Helmet>
        <title>Anasayfa</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Anasayfa açıklaması" />
      </Helmet>
      <h3>Anasayfa</h3>
    </div>

  )
}

export default Index
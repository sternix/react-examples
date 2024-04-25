import { Helmet } from "react-helmet"

function About() {
    return (
        <div>
            <Helmet>
                <title>Hakkımızda</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Hakkımızda açıklaması" />
            </Helmet>
            <h3>Hakkımızda</h3>
        </div>
    )
}

export default About
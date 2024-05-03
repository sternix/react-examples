import { useParams } from "react-router-dom"

function Post() {
  // App.jsx'de id değeri verdiğimizden id geldi
  const { id } = useParams()

  return (
    <div>Post id = {id}</div>
  )
}

export default Post
import React, { useEffect } from "react";
import { PostService, UserService} from "./services";

function App() {
    // const [users, setUsers] = useState(false)

    /* yada bu şekilde
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset:utf8',
                'Authorization': 'Bearer testtesttest'
            }
    */

    /*
const addPost = (data) => {
const headers = new Headers();
headers.append('Content-Type', 'application/json;charset:utf8')
headers.append('Authorization', 'Bearer testtesttest')

const formData = new FormData()
formData.append('userId', data.userId)
formData.append('title', data.title)
formData.append('body', data.body)


fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
// istersek json data, istersek formData gönderebiliyoruz
//body: JSON.stringify(data), 
body: formData,
headers
})
.then(res => {
    if (res.ok && res.status >= 200 && res.status < 400) {
        return res.json()
    }
})
.then(data => console.log(data))
.catch(e => console.log(e))

}
*/

    /*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.ok && res.status >= 200 && res.status < 400) {
                    return res.json()
                }
            })
            .then(data => setUsers(data))
            .catch(e => console.log(e))
    }, [])
    */

    useEffect(() => {
        PostService.getPosts()
            .then(res => console.log(res))

        PostService.getPostDetail(3)
            .then(res => console.log(res))

        PostService.newPost({
            userId: 28,
            title: 'Test Post',
            body: 'Post Body'
        }).then(res => console.log(res))

        UserService
            .getUsers()
            .then(res => console.log(res))
    })

    /*
     <button onClick={() => addPost({
                userId: 28,
                title: 'Test Post',
                body: 'Post Body'
            })}>Add Post</button>
    */

    return (
        <>
            <h1>Hello</h1>
            {/*
            <ul>
                {
                    users && users.map(u => (
                        <li key={u.id}>{u.name}</li>
                    ))
                }
            </ul>
            */}
        </>)
}

export default App

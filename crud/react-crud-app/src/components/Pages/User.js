import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "http://localhost:3001/user";

  useEffect(() => {
    fetch(getUserApi.concat("/") + id)
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setUser(data.data)
        } else {
          console.log(data.error);
        }
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default User;

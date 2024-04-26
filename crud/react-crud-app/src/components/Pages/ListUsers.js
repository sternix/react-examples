import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";

const ListUsers = () => {
  const showUserApi = "http://localhost:3001/user";
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    console.log(`deleted id : ${id}`);
    setIsLoading(true);
    try {
      const response = await fetch(showUserApi.concat("/") + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setUser(user.filter(item => item.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch(showUserApi)
      .then(res => res.json())
      .then(jres => {
        if (jres.ok) {
          setUser(jres.data);
        } else {
          throw new Error(jres.error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  if (user.length <= 0) {
    return <h1>no user found</h1>;
  } else {
    return (
      <div className="mt-5">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={`/edit-user/${item.id}`}>
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <Link to={`/user/${item.id}`}>
                      <i className="bi bi-eye"></i>
                    </Link>
                    <i
                      className="bi bi-trash"
                      onClick={() => handleDelete(item.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListUsers;
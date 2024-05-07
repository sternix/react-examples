import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryList({ info, currentCategory, changeCategory }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => setCategories(data))
    }

    return (
        <div>
            <h3>{info.title}</h3>
            <ListGroup>
                {categories.map(category => (
                    <ListGroupItem active={category.categoryName === currentCategory ? true : false}
                        onClick={() => changeCategory(category)}
                        key={category.id}
                    >
                        {category.categoryName}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default CategoryList
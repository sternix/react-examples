import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

function FormDemo2() {

    const [state, setState] = useState({
        email: '',
        password: '',
        city: '',
        description: '',
    })

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState({ [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        alertify.success(state.email + " added to db!");
        alertify.success(state.password + " added to db!");
        alertify.success(state.city + " added to db!");
        alertify.success(state.description + " added to db!");
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Enter description"
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        type="select"
                        name="city"
                        id="city"
                        onChange={handleChange}
                    >
                        <option>Ankara</option>
                        <option>İstanbul</option>
                        <option>İzmir</option>
                        <option>Adana</option>
                        <option>Diyarbakır</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Save</Button>
            </Form>
        </div>
    );
}

export default FormDemo2
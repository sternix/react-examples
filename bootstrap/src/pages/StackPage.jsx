import { Button, Stack, Form } from 'react-bootstrap'

function StackPage() {
    return (
        <>
            <Stack direction="horizontal" gap={2}>
                <Button size='sm' as="a" variant="primary">
                    Button as link
                </Button>
                <Button size='sm' as="a" variant="success">
                    Button as link
                </Button>
            </Stack>

            <br/>

            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Add your item here..." />
                <Button variant="secondary">Submit</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack>
        </>
    )
}

export default StackPage
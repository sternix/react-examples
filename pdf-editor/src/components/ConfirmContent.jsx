import { Header, Button } from 'semantic-ui-react';

function ConfirmContent({
    title,
    onConfirm,
    onDismiss,
}) {
    return (
        <div>
            <Header as="h4" inverted>
                {title}
            </Header>

            <Button onClick={onDismiss}>No</Button>
            <Button negative onClick={onConfirm}>
                Yes
            </Button>
        </div>
    )
}

export default ConfirmContent
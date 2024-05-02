import { Button, Snackbar, IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { useState } from "react";

function SnackbarPage() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                Undo
            </Button>
            <IconButton
                size="small"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </>
    )

    return (
        <div>
            <Button onClick={handleClick}>Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Görünen mesaj"
                action={action}
            />
        </div>
    )
}

export default SnackbarPage


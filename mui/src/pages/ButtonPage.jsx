import { Button, Box } from "@mui/material"

function ButtonPage() {
    return (
        <Box width={500} height={300}>
            <Button variant="contained">Hello world</Button>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Box>
    )
}

export default ButtonPage



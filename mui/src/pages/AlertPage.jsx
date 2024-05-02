import { Alert, Box, Stack } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';

function AlertPage() {
    return (
        <Box width={500} height={200} >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Severity == success
                </Alert>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="info">
                    Severity == info
                </Alert>
                <Alert variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
                <Alert variant="outlined" severity="error">
                    This is an outlined error Alert.
                </Alert>
            </Stack>
        </Box>
    )
}

export default AlertPage
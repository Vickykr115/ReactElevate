import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Card sx={{ maxWidth: 345, textAlign: 'center', padding: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" color="text.primary">
                        Counter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h2>{count}</h2>
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <IconButton 
                        onClick={() => setCount(count + 1)} 
                        color="success" 
                        sx={{ fontSize: 40, margin: 1 }}
                    >
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton 
                        onClick={() => setCount(count - 1)} 
                        color="error" 
                        sx={{ fontSize: 40, margin: 1 }}
                    >
                        <RemoveCircleIcon />
                    </IconButton>
                    <IconButton 
                        onClick={() => setCount(0)} 
                        color="secondary" 
                        sx={{ fontSize: 40, margin: 1 }}
                    >
                        <RestartAltIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Counter;

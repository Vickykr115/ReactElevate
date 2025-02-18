import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const UserForm = () => {
    const [isDirty, setIsDirty] = useState(false);
    const alluser = useSelector(state => state.Userlist);
    const [uname, setUname] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    // Track form changes
    useEffect(() => {
        const hasUnsavedChanges = uname !== "" || address !== "" || mobile !== "" || email !== "";
        setIsDirty(hasUnsavedChanges);
    }, [uname, address, mobile, email]);

    // Handle browser closure/refresh
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = ''; // Required for Chrome
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    const save = () => {
        const newuser = { sname: uname, address: address, email: email, mobile: mobile };
        dispatch({ type: "saveuser", uinfo: newuser });
        setUname("");
        setAddress("");
        setMobile("");
        setEmail("");
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    User Data Form
                </Typography>
                <form>
                    <TextField label="User ID" fullWidth disabled margin="normal" />
                    <TextField 
                        label="Name" 
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                        fullWidth required margin="normal" 
                    />
                    <TextField 
                        label="Address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth required margin="normal" 
                    />
                    <TextField 
                        label="Email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth required margin="normal" 
                    />
                    <TextField 
                        label="Phone" 
                        type="tel" 
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        fullWidth required margin="normal" 
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        style={{ marginTop: 10 }} 
                        onClick={save}
                    >
                        Save
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default UserForm;
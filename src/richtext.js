import React, { useState, useRef, useEffect, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const RichTextEditor = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // Load saved content from localStorage on mount
    useEffect(() => {
        const savedContent = localStorage.getItem('richTextContent');
        if (savedContent) {
            setContent(savedContent);
        }
    }, []);

    // Save content to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('richTextContent', content);
    }, [content]);

    const config = useMemo(() => ({
        readonly: false, // Enable editing
        placeholder: placeholder || 'Start typing...',
        toolbarAdaptive: false, // Ensure the toolbar is always available
        toolbarSticky: true,
        showCharsCounter: false,
        showWordsCounter: false,
        disablePlugins: 'about', // Removes "Powered by Jodit"
        buttons: [
            'bold', 'italic', 'underline', '|', 'ul', 'ol', '|',
            'align', 'undo', 'redo', '|', 'font', 'fontsize', 'brush', 'paragraph', 'hr'
        ]
    }), [placeholder]);

    return (
        <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4, p: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Rich Text Editor
                </Typography>
                <Box sx={{ border: '1px solid #ccc', borderRadius: 1, p: 1 }}>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                    />
                </Box>
                <Box mt={2}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => { setContent(''); localStorage.removeItem('richTextContent'); }}
                    >
                        Clear Content
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default RichTextEditor;

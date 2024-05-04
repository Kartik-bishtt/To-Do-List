import ListItem from "@mui/material/ListItem";
import Create from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        addTodo(text);
        setText("")       
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton aria-label="create todo" edge="end" type="submit">
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    );
}

//Plata o Plomo, yo soy Pablo Emilio Escobar Gaviria, Silver or Lead.
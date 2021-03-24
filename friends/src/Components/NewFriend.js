import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from "@material-ui/core";
import { axiosWithAuth } from "./axiosWithAuth";


const emptyFriend = {
    name: '',
    age: '',
    email: ''
}
let options = [];

for (let i = 0; i < 100; i++) {
    options.push(
        <MenuItem key={i} value={i}>{" " + i}</MenuItem>
    )
}

const NewFriend = (props) => {
    const [newFriend, setNewFriend] = useState(emptyFriend);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewFriend({
            ...newFriend,
            [name]: value,
        });
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.submit(newFriend)
        setNewFriend(emptyFriend)
    };

    return (
        <div className="container newFriend">
            <h2>Want to add a new friend?</h2>
            <form className="form container" onSubmit={onSubmit}>
                <TextField
                    className="textField"
                    id="outlined-basic"
                    name="name"
                    label="Name"
                    value={newFriend.name}
                    onChange={handleChange}
                    maxLength="100"
                    variant="outlined"
                    size="small"
                />
                <TextField
                    id="outlined-basic"
                    name="email"
                    className="textField"
                    type="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    maxLength="100"
                    label="Email"
                    variant="outlined"
                    size="small"
                />
                <FormControl>

                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="age"
                        value={newFriend.age}
                        onChange={handleChange}
                    >
                        {options}
                    </Select>
                </FormControl>
                <div className="container">
                    <Button
                        type="submit"
                        className="submit"
                        value="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                        endIcon={<Icon>send</Icon>}
                    >
                        submit
        </Button>

                </div>
            </form>
        </div>
    )
}


export default NewFriend;
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import { useHistory } from "react-router";

const initialCredentials = {
    username: '',
    password: ''
}

const Login = () => {

    const [loginCredentials, setLoginCredentials] = useState(initialCredentials);
    const [error, setErrors] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginCredentials({
            ...loginCredentials,
            [name]: value,
        });
    };

    const history = useHistory();
    const onSubmit = (evt) => {
        evt.preventDefault();
        axios
            .post('http://localhost:5000/api/login', loginCredentials)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token', res.data.payload);
                setLoginCredentials({
                    ...initialCredentials
                });
                history.push({
                    pathname: "/friends",
                    state: {
                        response: "GoodJob"
                    }
                })

            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.error)
            });

    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <h2>Please Log In To Proceed</h2>
            <h4>Hint: Username: Username, Password: password</h4>
            <TextField
                className="textField"
                id="outlined-basic"
                name="username"
                label="Username"
                value={loginCredentials.username}
                onChange={handleChange}
                maxLength="100"
                variant="outlined"
                size="small"
            />
            <TextField
                id="outlined-basic"
                name="password"
                className="textField"
                type="password"
                value={loginCredentials.password}
                onChange={handleChange}
                maxLength="100"
                label="Password"
                variant="outlined"
                size="small"
            />
            <div className="container">
                <Button
                    type="submit"
                    id="submitLogin"
                    value="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={<Icon>send</Icon>}
                >
                    Submit
        </Button>
                <div className="errors">
                    <div>{error}</div>
                </div>
            </div>
        </form>
    );
}
export default Login;
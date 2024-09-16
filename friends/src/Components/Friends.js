import React, { useEffect, useState } from "react";
import { axiosWithAuth } from './axiosWithAuth';
import NewFriend from './NewFriend'
import Loader from "react-loader-spinner";

const Friends = (props) => {
    const { updateLocation } = props;
    const [friendList, setFriendList] = useState([]);
    useEffect(() => {

        axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                updateLocation(window.location.href)
                console.log(res.data);
                setFriendList(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, []);

    const addFriend = (newFriend) => {
        axiosWithAuth()
            .post('api/friends', newFriend)
            .then((res) => {
                console.log(res.data);
                setFriendList(res.data)
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (


        <div className="container friendsContainer">
            <h1>All my friends are here!</h1>
            {friendList.map(friend => {
                return (
                    <div className="friend" key={friend.id}>
                        <h3>{friend.name}</h3>
                        <h4>Age: {friend.age}</h4>
                        <h4>Email: {friend.email}</h4>
                    </div>
                )
            })}
            <NewFriend submit={addFriend} />
        </div>
    )
}

export default Friends;
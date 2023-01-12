import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const user = useParams();
    return (<div>
        <h1>Abubakar Kehinde</h1>
        <h2>{user}</h2>
    </div>);
}
export default Profile;


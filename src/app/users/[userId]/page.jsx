import React from 'react';

const UserDetailsPage = async({params}) => {

    const{userId}=await params;
    // console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user= await res.json();
    // console.log(user,userId)
    return (
        <div>
            <h2>UserDetailsPage</h2>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>

        </div>
    );
};

export default UserDetailsPage;
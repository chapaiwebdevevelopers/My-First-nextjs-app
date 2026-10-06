import Link from 'next/link';
import React from 'react';

const Post = ({post}) => {
    // console.log(post);
    const {id,title, description} = post;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {/* <p>{description}</p> */}
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`}>
                    <button className="btn btn-primary">Read More</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Post;
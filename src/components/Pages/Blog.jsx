import React from 'react';
import DynamicTitle from './Shared/DynamicTitle';

const Blog = () => {
    DynamicTitle("Blog");
    return (
        <>
            <div className="h-screen flex items-center justify-center font-serif m-auto">
    <h2 className="text-center text-5xl my-5 font-extrabold text-orange-600">
        Blog Page coming soon...
    </h2>
</div>

        </>
    );
};

export default Blog;
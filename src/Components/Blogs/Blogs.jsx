import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);


    return (
        <div>
            <div className="flex justify-between mx-20 my-20">
            <h1>Available Players: {blogs.length}</h1>
            <div className="gap-10">
                <button className="bg-lime-500 w-36">Available</button>
                <button className="text-slate-500 bg-slate-100">Selected(0)</button>
            </div>
            </div>

        </div>
    );
};

export default Blogs;
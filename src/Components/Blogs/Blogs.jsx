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
            <h1 className="font-bold">Available Players: {blogs.length}</h1>
            
            
            <div className="font-bold space-x-4">
                <button className="bg-lime-500 w-36 h-12 rounded-xl">Available </button>
                <button className="text-slate-500 bg-slate-200 rounded-xl  w-36 h-12">Selected(0)</button>
            </div>
            </div>
            
            
            

        </div>
    );
};

export default Blogs;
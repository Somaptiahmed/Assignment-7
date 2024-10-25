import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
   const {name} = blog;

    return (
        <div>
            <h2 className='text-3xl'>Name:{name}</h2>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
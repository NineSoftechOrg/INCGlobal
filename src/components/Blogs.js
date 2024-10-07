
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blogs.css'; // Add styling as necessary

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch blog data from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts'); // Update with your backend URL
        setBlogs(response.data);
      } catch (err) {
        setError('Error fetching blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div className="blogs-page">
      <div className="container">
        <h2 className="blog-heading text-center">Our Blogs</h2>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="col-md-4">
                <div className="blog-card">
                  <div className="blog-card-inner">
                    <div className="blog-card-front">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="blog-image img-fluid"
                      />
                      <h5 className="blog-title">{blog.title}</h5>
                    </div>
                    <div className="blog-card-back">
                      <p className="blog-content">{blog.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No blogs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs; 

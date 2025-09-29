// src/screens/BlogPage/Blogs.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

import { blogs } from '../../data/blogs';
import BlogCard from '../../components/ui/BlogCard';
import Sidebar from '../../components/ui/Sidebar';
import PageHero from '../../components/ui/PageHero';

// Import this page's specific CSS
import './BlogPage.css';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const categories = ["General", "Mathematics", "English", "Exam Prep", "Health"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <main>
        {/* Section 1: Hero Banner */}
        <PageHero title="Blogs" />
        <section className="py-5 my-5 bg-white blog-page">
            <Container>
            <Row>
                {/* Main Blog Grid */}
                <Col lg={9}>
                <Row>
                    {currentBlogs.map((blog) => (
                    <Col key={blog.id} md={6} lg={4} className="mb-5">
                        <BlogCard blog={blog} />

                        
                    </Col>
                    ))}

                    {/* Pagination */}
                        <div className="d-flex justify-content-center mt-4">
                          <nav>
                            <ul className="pagination">
                              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                                  Previous
                                </button>
                              </li>

                              {[...Array(totalPages)].map((_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                    {i + 1}
                                  </button>
                                </li>
                              ))}

                              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                                  Next
                                </button>
                              </li>
                            </ul>
                          </nav>
                        </div>
                </Row>
                </Col>

                {/* Sidebar */}
                <Col lg={3} className="mt-4 mt-lg-0">
                <Sidebar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                </Col>
            </Row>
            </Container>
        </section>
    </main>
  );
};

export default BlogPage;
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

  const categories = ["General", "Mathematics", "English", "Exam Prep", "Health"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
        {/* Section 1: Hero Banner */}
        <PageHero title="Blogs" />
        <section className="py-5 my-5 bg-white">
            <Container>
            <Row>
                {/* Main Blog Grid */}
                <Col lg={9}>
                <Row>
                    {filteredBlogs.map((blog) => (
                    <Col key={blog.id} md={6} lg={4} className="mb-5">
                        <BlogCard blog={blog} />
                    </Col>
                    ))}
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
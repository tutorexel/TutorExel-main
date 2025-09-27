// src/components/BlogCard.js
import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const slugify = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')     // remove invalid characters
    .replace(/\s+/g, '-')             // collapse whitespace and replace with -
    .replace(/-+/g, '-');             // collapse multiple hyphens

const BlogCard = ({ blog }) => {
  const shortContent =
    typeof blog.excerpt === 'string'
  ? (blog.excerpt.length > 100
      ? blog.excerpt.substring(0, 80) + "..."
      : blog.excerpt)
  : '';

  return (
    <Card className="mb-4 shadow-sm border-0 h-100 d-flex flex-column">
      <div className="position-relative">
        {/* Background Image */}
        <Card.Img
          src={blog.image}
          alt={blog.title}
          className="blog-card-img"
        />

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Category Badge */}
        <span className="badge bg-orange text-dark position-absolute top-0 end-0 m-2">
          {blog.category}
        </span>

        {/* Title Overlay */}
        <Card.ImgOverlay className="d-flex align-items-end p-3">
          <Card.Title className="text-white fw-bold">{blog.title}</Card.Title>
        </Card.ImgOverlay>
      </div>

      {/* Content Below Image */}
      <Card.Body className="pb-3">
        <div>{shortContent}</div>
        <Link to={`/blog/${slugify(blog.title)}`} className="stretched-link"></Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;

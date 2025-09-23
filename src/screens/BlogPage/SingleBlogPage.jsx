// src/pages/SingleBlogPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <Container className="my-5 text-center">
        <h2>Blog Not Found</h2>
        <Link to="/">
          <Button variant="primary" className="mt-3">Go Back</Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="single-blog">
      <Container className="my-5">
        <Row>
          <Col lg={12} className="mx-auto">
            <Card className="shadow-sm">
              <div className="blog-header">
                <Card.Img variant="top" src={blog.image} alt={blog.title} />
                <h2>{blog.title}</h2>
              </div>
              
              <Card.Body>
                <div className="blog-content">{blog.content}</div>
                <small className="text-muted">Category: {blog.category}</small>
                <div className="mt-4">
                  <Link to="/">
                    <Button variant="secondary">← Back to Blogs</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleBlogPage;

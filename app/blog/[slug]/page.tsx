"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function SingleBlogPage({ params }: PageProps) {
  // ✅ unwrap params Promise
  const { slug } = React.use(params);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs.find((b) => slugify(b.title) === slug);

  if (!blog) {
    return (
      <Container className="my-5 text-center">
        <h2>Blog Not Found</h2>

        <Link href="/" className="d-inline-block mt-3">
          <Button variant="primary">Go Back</Button>
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
                <h2>{blog.title}</h2>
              </div>

              <Card.Body>
                <div className="blog-content">{blog.content}</div>

                <small className="text-muted">Category: {blog.category}</small>

                <div className="mt-4">
                  <Link href="/blog">
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
}

// src/components/Sidebar.js
"use client";
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';

const Sidebar = ({ searchTerm, setSearchTerm, categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="p-3 border rounded">
      {/* Search */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      {/* Categories */}
      <h5>Categories</h5>
      <ListGroup>
        {categories.map((cat) => (
          <ListGroup.Item
            key={cat}
            action
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </ListGroup.Item>
        ))}
        <ListGroup.Item
          action
          active={!selectedCategory}
          onClick={() => setSelectedCategory("")}
        >
          All
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;

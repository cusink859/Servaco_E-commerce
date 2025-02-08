CREATE DATABASE online_store;

USE online_store;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE cart (
  id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO users (username, email, password) VALUES
  ('admin', 'admin@example.com', 'password123'),
  ('user1', 'user1@example.com', 'password123'),
  ('user2', 'user2@example.com', 'password123');

INSERT INTO products (name, description, price) VALUES
  ('Product 1', 'This is product 1', 10.99),
  ('Product 2', 'This is product 2', 9.99),
  ('Product 3', 'This is product 3', 12.99);

INSERT INTO orders (user_id, product_id, quantity) VALUES
  (1, 1, 2),
  (1, 2, 1),
  (2, 3, 3);

INSERT INTO cart (user_id, product_id, quantity) VALUES
  (1, 1, 1),
  (1, 2, 2),
  (2, 3, 1);
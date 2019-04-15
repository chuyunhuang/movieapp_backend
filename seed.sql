DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY, 
  genre_name VARCHAR NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY, 
  title VARCHAR NOT NULL, 
  genre_id INT NOT NULL
  REFERENCES genres (id)
  ON DELETE CASCADE, 
  image_url VARCHAR 
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY, 
  stars INT NOT NULL, 
  movie_id INT NOT NULL
  REFERENCES movies (id)
  ON DELETE CASCADE 
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY, 
  comment_text VARCHAR NOT NULL, 
  movie_id INT NOT NULL
  REFERENCES movies (id)
  ON DELETE CASCADE
);



INSERT INTO genres (genre_name) VALUES 
('action'), 
('comedy'), 
('science-fiction'), 
('kids and family'), 
('animations'), 
('horror'), 
('romance'), 
('crime'), 
('historical');

INSERT INTO movies (title, genre_id, image_url) VALUES 
('Harry Potter', '1', 'harrypotter.jpg'),   
('A Walk to Remember', '7', 'example.jpg'), 
('Inception', '3', 'example.jpg'), 
('Spirited Away', '5', 'example.jpg'), 
('Interstellar', '3', 'example.jpg'), 
('The Mummies', '1', 'example.jpg'), 
('The Fault In Ours Stars', '7', 'example.jpg'), 
('A Quiet Place', '6', 'scary.jpg');

INSERT INTO ratings (stars, movie_id) VALUES 
('4', '1'),
('5', '2'),
('5', '3'),
('5', '4'),
('3', '5'),
('2', '6'),
('2', '7'),
('1', '8');

INSERT INTO comments (comment_text, movie_id) VALUES 
('Harry Potter is the best, ALWAYS!', '1'),
('I always cry from watching this..', '2'),
('Jorge loves this movie!', '3'),
('Best animation ever!!', '4'),
('Jorge recommended it', '5'),
('Q likes it when she was little', '6'),
('Mie loves this movise', '7'),
('Jorge recommended it', '8');

CREATE TABLE users (
  id serial PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  name VARCHAR,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL,
  "deletedAt" TIMESTAMP
);
CREATE TABLE categories (
  id serial PRIMARY KEY,
  name VARCHAR NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL,
  "deletedAt" TIMESTAMP
);
CREATE TABLE expenses (
  id serial PRIMARY KEY,
  concept VARCHAR NOT NULL,
  amount NUMERIC NOT NULL,
  date DATE NOT NULL,
  "isIncome" BOOLEAN NOT NULL,
  "userId" INT NOT NULL,
  "categoryId" INT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL,
  "deletedAt" TIMESTAMP,
  FOREIGN KEY ("userId") REFERENCES users(id),
  FOREIGN KEY ("categoryId") REFERENCES categories(id)
);
INSERT INTO categories (name, "createdAt", "updatedAt")
VALUES ('Varios', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Medicina', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (
    'Supermercado',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    'Servicios',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  ('Shopping', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
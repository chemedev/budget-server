CREATE TABLE users (
  id serial PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  name VARCHAR,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL,
  "deletedAt" TIMESTAMP NOT NULL
);
CREATE TABLE categories (
  id serial PRIMARY KEY,
  name VARCHAR NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL,
  "deletedAt" TIMESTAMP NOT NULL
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
  "deletedAt" TIMESTAMP NOT NULL,
  FOREIGN KEY ("userId") REFERENCES users(id),
  FOREIGN KEY ("categoryId") REFERENCES categories(id)
)
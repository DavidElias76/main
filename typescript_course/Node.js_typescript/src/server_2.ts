import express from 'express';
import type { Request, Response, NextFunction } from 'express'; // Ths is import seperately as types and

interface User {
  id: number;
  username: string;
  email: string;
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Array of users which is an array of objects
const users: User[]= [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' }
];

// GET all users
app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.json(user);
});

// POST create new user
app.post('/api/users', (req: Request, res: Response) => {
  const { username, email } = req.body;

  if (!username || !email) {
    res.status(400).json({
      message: 'Username and email are required'
    });
    return;
  }

  const newUser: User = {
    id: users.length + 1,
    username,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err.stack);

    res.status(500).json({
      message: 'Something went wrong!'
    });
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
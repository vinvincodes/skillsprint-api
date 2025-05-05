Here's how to test properly:

1. Terminal 1: Keep your server running with `node app.js`
2. Terminal 2: Run test commands like:

```bash
   curl -X POST http://localhost:3000/progress/user1/1
   curl -X POST http://localhost:3000/progress/user1/2
   curl -X POST http://localhost:3000/progress/user1/3
   curl http://localhost:3000/progress/user1
```
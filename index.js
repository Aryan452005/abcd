const app = require('./test');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.loh('Server running on https://localhost:${PORT}');
});
//new commit

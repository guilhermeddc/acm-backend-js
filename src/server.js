import app from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`\nApi runnung in: http://localhost:${PORT}/`);
});

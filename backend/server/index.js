import { DBConection } from './database.js';
import { PORT } from './config.js';
import app from './app.js';

//Database connection
DBConection();

app.listen(PORT);
console.log('Server listening on port ' + PORT);

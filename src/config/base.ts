import 'dotenv/config';

const { 
  DB_USER: user, 
  DB_PASSWORD: pass, 
  DB_NAME: cluster 
} = process.env;

export const MongoUri = `mongodb+srv://${user}:${pass}@${cluster}.15b5j.mongodb.net/?retryWrites=true&w=majority`;
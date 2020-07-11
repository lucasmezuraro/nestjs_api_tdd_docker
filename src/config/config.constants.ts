
import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
    port: process.env.PORT || '3010',
    database: {
      uri: process.env.DATABASE_HOST,
      connection: {
        port: process.env.DATABASE_PORT || '27017', 
        pass: process.env.DATABASE_PASS || '',
        user: process.env.DATABASE_USER || '',
        db_name: process.env.DATABASE_NAME || '',
        authSource: true
      }
      
    }
  });
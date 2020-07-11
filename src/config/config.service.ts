import * as dotenv from 'dotenv';
import * as fs from 'fs';
import configConstants from './config.constants';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { database: {
        uri?: string, 
       connection?: { 
           pass?: string,
           port?: string, 
           user?: string, 
           db_name?: string
        }
     },
    port?: string};

  constructor() {
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'staging'
    ) {
      this.envConfig = {
        database: {
            uri: process.env.database_host
        }
      };
    } else {
      this.envConfig = configConstants(); 
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }

   connection(): {
     host: string,
     pass: string,
     user: string,
     port: string,
     db_name: string
   } {
      return {
          host: this.envConfig.database.uri,
          pass: this.envConfig.database.connection.pass,
          user: this.envConfig.database.connection.user,
          port: this.envConfig.database.connection.port,
          db_name: this.envConfig.database.connection.db_name
      }
      
  } 

  
}
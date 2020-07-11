import * as dotenv from 'dotenv';
import * as fs from 'fs';
import configConstants from './config.constants';
import { Injectable } from '@nestjs/common';
import { MongooseModuleAsyncOptions, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConnectionOptions } from 'mongoose';

@Injectable()
export class ConfigService {
  MONGODB_URI: string;
  private readonly envConfig: { database: {
        uri?: string, 
       connection?: { 
           pass?: string,
           port?: string, 
           user?: string, 
           database?: string
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

   data(): MongooseModuleOptions {
      return {
          authSource: 'true',
          user: this.envConfig.database.connection.user,
          pass: this.envConfig.database.connection.pass,
          uri: this.envConfig.database.uri
      }
  } 

  
}
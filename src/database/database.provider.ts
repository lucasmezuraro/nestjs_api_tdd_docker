import { MongooseModule, MongooseModuleAsyncOptions } from "@nestjs/mongoose";
import {ConfigService} from '../config/config.service';
import { ConfigModule } from "src/config/config.module";

/*'mongodb://db:27017/pizz_finder_api', {
        authSource: 'admin',
        user: 'root',
        pass: 'rootpassword'
    } */

const options: MongooseModuleAsyncOptions = {
    
} 

export const databaseProvider = [
    MongooseModule.forRootAsync({imports: [ConfigModule],
    useFactory : async(config: ConfigService) => ({
       uri: `mongodb://${config.connection().user}:${config.connection().pass}@${config.connection().host}:${config.connection().port}/${config.connection().db_name}?authSource=admin`
    }),
    inject:[ConfigService]})
]

 

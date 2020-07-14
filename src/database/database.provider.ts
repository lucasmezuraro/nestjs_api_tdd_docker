import { MongooseModule } from "@nestjs/mongoose";
import {ConfigService} from '../config/config.service';
import { ConfigModule } from "src/config/config.module";


export const databaseProvider = [
    MongooseModule.forRootAsync({imports: [ConfigModule],
    useFactory : async(config: ConfigService) => {
        console.log(config.connection().host);   
        return {uri: `mongodb://${config.connection().user}:${config.connection().pass}@${config.connection().host}:${config.connection().port}/${config.connection().db_name}?authSource=admin`
    }},
    inject:[ConfigService]})
]

 

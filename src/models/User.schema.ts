import { Document  } from "mongoose";
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema()
export class User extends Document {

    @Prop({type: 'string', required: 'true'})
    username: string;

    @Prop({type: 'string', required: 'true'})
    email: string;

    @Prop({type: 'string', required: 'true'})
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
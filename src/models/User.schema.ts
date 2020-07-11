import { Document, SchemaTypes } from "mongoose";
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { IsMongoId } from "class-validator";
import { Address, AddressSchema } from "./Address.schema";

@Schema()
export class User extends Document {

    @Prop({type: 'string', required: 'true'})
    username: string;

    @Prop({type: 'string', required: 'true'})
    email: string;

    @Prop({type: 'string', required: 'true'})
    password: string;

    @Prop({type: SchemaTypes.ObjectId, required: 'true'})
    addressId?: string

}

export const UserSchema = SchemaFactory.createForClass(User);
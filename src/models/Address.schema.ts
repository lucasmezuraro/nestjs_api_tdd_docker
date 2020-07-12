import { Document  } from "mongoose";
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema()
export class Address extends Document {

    @Prop({type: 'string', required: 'true'})
    street: string;

    @Prop({type: 'string', required: 'true'})
    city: string;

    @Prop({type: 'string', required: 'true'})
    number: string;

    @Prop({type: 'string', required: 'true'})
    state: string;

    @Prop({type: 'string', required: 'true'})
    neighborhood: string;

    @Prop({type: 'string', required: 'true'})
    zipCode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
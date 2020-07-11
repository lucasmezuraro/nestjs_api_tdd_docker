import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/models/Address.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Address.name, schema: AddressSchema}])],
    providers: [AddressService],
    exports: [AddressService]
})
export class AddressModule {}

import { Injectable } from "@nestjs/common";
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class BcryptFacade {
    async compare(s: string, hash: string): Promise<boolean> {
        return await bcryptjs.compare(s, hash);
    }
}
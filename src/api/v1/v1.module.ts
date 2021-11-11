import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, InfraModule],
})
export class V1Module {}

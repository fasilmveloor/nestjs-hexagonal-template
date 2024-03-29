import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { AuthModule } from './v1/auth/auth.module';
import { V1Module } from './v1/v1.module';

const routes: Routes = [
  {
    path: '/v1',
    module: V1Module,
    children: [
      {
        path: '/auth',
        module: AuthModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
})
export class ApiModule {}

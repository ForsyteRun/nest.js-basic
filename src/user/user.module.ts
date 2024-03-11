import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { AuthGuard } from 'src/guards/auths.guard';

@Module({
  controllers: [UserController],
  // imports: [forwardRef(() => AuthGuard)],
})
export class UserModule {}

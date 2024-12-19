import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ApplicationsModule } from '../applications/applications.module';
import { NominationsModule } from '../nominations/nominations.module';
import { EmailsModule } from '../emails/emails.module';

@Module({
  imports: [UsersModule, ApplicationsModule, NominationsModule, EmailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

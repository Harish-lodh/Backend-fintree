import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available globally
      envFilePath: '.env', 
    }),MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // or your SMTP provider
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ID ,
          pass: process.env.EMAIL_PASS,
        },
      },
      defaults: {
        from: '"Fintree Finance" wecarefintree@gmail.com',
      },
    }),EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

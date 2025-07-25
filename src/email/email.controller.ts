import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('form')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('application')
  async handleForm(@Body() body: any) {
    try {
        console.log(body)
         await this.emailService.sendFormEmail(body);
         return { message: 'Form submitted and email sent successfully' };
    } catch (error) {
        console.log(error);
throw new HttpException('Email failed', HttpStatus.INTERNAL_SERVER_ERROR);    }
    
  }
}

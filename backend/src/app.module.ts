import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './module/report/report.module';
import { ResumeModule } from './module/resume/resume.module';

@Module({
  imports: [ReportModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { TrackerService } from './tracker.service';

@Controller('trackers')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  @Get()
  findAll() {
    return this.trackerService.findAll();
  }

  @Post('analyze')
  analyze(@Body() data: { url: string }) {
    return this.trackerService.analyzeUrl(data.url);
  }
}

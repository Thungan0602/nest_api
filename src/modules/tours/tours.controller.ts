import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToursService } from './tours.service';
import { TourDto } from './tours.dto';


@Controller()
export class ToursController {
  constructor(private toursService: ToursService) {}
    
  @Get('tours')
  getTours() {
    return this.toursService.tours();
  }

  @Post('tours')
  createTour(@Body() data: TourDto) {
    return this.toursService.createTour(data);
  }

  @Delete('tours/:id')
  deleteTour(@Param('id') id: string) {
    return this.toursService.deleteTour(id);
  }
}

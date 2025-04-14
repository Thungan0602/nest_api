import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TourDto } from "./tours.dto";

@Injectable()
export class ToursService {
    constructor(private prisma: PrismaService) {}

    tours() {
        return this.prisma.tour.findMany();
    }

    createTour(tour: TourDto) {
        return this.prisma.tour.create({
            data: tour,
        });
    }

    deleteTour(id: string) {
        return this.prisma.tour.delete({
            where: {    
                id: id,
            },
        });
    }
}

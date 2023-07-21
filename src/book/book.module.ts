import { Module } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookService } from "./book.service";
import { BookResolver } from "./book.resolver";

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity])
    ],
    controllers:[],
    providers:[BookService,BookResolver],
})
export class BookModule {}
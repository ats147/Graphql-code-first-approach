import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";

@Resolver(of=>Book)
export class BookResolver{
    @Query(returns => [Book])
    getAllBooks(){
        return [
            {id:1,title:'Harry Potter',price: 660},
            {id:2,title:'Harr Potter',price: 60},
            {id:3,title:'Hrry Potter',price: 610}
        ]
    }
}
import { ObjectID } from "bson";
import {Entity, ObjectIdColumn, Column} from "typeorm";

@Entity('autor')
export class Autor {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string;

    @Column()
    created_at: Date;
}

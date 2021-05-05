import { ObjectID } from 'bson';
import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity('noticias')
export class Noticias {

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    @ObjectIdColumn()
    id: ObjectID;    

    @Column()
    titulo: string;

    @Column()
    conteudo: string;

    @Column()
    @CreateDateColumn({ type: 'timestamp' })
    data_publicacao: Date; 
}

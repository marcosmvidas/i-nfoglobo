import { NextFunction, Request, Response } from "express";
import { getRepository } from 'typeorm';
import { Noticias } from '../entity/Noticias';

export class NoticiasController {

    private noticiasRepository = getRepository(Noticias);

    async all(req: Request, res: Response, next: NextFunction) {
        return this.noticiasRepository.find();
    };

    async one(req: Request, res: Response, next: NextFunction) {

        try {
            await this.noticiasRepository.save(req.body);

        } catch (err) {
            return res.json({message: "Erro! Notícia não encontrada."});
        }


    };

    async save(req: Request, res: Response, next: NextFunction) {
        // console.log(req.body);

        try {
            await this.noticiasRepository.save(req.body);
            return res.json({message: "Notícia publicada.!"});
        } catch (err) {
            return res.json({message: "Erro! Notícia não publicada."});
        }
    };

    async remove(req: Request, res: Response, next: NextFunction) {
        
        let noticiaRemove = await this.noticiasRepository.findOne(req.params.id);
        
        try {
            await this.noticiasRepository.remove(noticiaRemove);

            return res.json({message: "Notícia publicada removida.!"});
        } catch (err) {
            return res.json({message: "Erro! na remoção da notica."});
        }
    };

};
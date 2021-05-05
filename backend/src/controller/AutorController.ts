import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Autor } from "../entity/Autor";

export class AutorController {

    private autorRepository = getRepository(Autor);

    async all(req: Request, res: Response, next: NextFunction) {
        return this.autorRepository.find();
    };

    async one(req: Request, res: Response, next: NextFunction) {
        return this.autorRepository.findOne(req.params.id);
    };

    async save(req: Request, res: Response, next: NextFunction) {
        return this.autorRepository.save(req.body);
    };

    async remove(req: Request, res: Response, next: NextFunction) {
        let autorRemove = await this.autorRepository.findOne(req.params.id);
        await this.autorRepository.remove(autorRemove);
    };

};

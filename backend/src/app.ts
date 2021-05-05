import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectDB } from './config/dbase';
import { routerNoticias } from './routes/noticias'
import { routerAutor } from "./routes/autor";
import { Response, Request } from 'express';
import axios from "axios";

export const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(logger('dev'));

connectDB();

app.get('/user', async(req, res) => {
    
    try{
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    
    } catch (err) {
        console.log(err)
    }
})

routerAutor.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

routerNoticias.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

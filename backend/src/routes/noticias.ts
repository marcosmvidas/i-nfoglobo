import { NoticiasController } from '../controller/NoticiasController';

export const routerNoticias = [{
    method: "get",
    route: "/noticias",
    controller: NoticiasController,
    action: "all"
}, {
    method: "get",
    route: "/noticias/:id",
    controller: NoticiasController,
    action: "one"
}, {
    method: "post",
    route: "/noticias",
    controller: NoticiasController,
    action: "save"
}, {
    method: "delete",
    route: "/noticias/:id",
    controller: NoticiasController,
    action: "remove"
}];

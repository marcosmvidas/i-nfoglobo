import { AutorController } from "../controller/AutorController";

export const routerAutor = [{
    method: "get",
    route: "/autores",
    controller: AutorController,
    action: "all"
}, {
    method: "get",
    route: "/autores/:id",
    controller: AutorController,
    action: "one"
}, {
    method: "post",
    route: "/autores",
    controller: AutorController,
    action: "save"
}, {
    method: "delete",
    route: "/autores/:id",
    controller: AutorController,
    action: "remove"
}];

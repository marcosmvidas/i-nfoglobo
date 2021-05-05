import { app } from './app';

const PORTA = 3333;

const server = 
    app.listen(PORTA, () => console.log(`Servidor na porta ${PORTA} iniciado`));

    process.on('SIGINT', () => {
        server.close();
        console.log(`Servidor na porta ${PORTA} finalizado`)
    })


import { createConnection } from "typeorm"


export const connectDB = async () => {
    const conn = await createConnection();
    console.log(`Conexão ao DB ${conn.options.database} iniciada`);

    process.on('SIGINT', () => {
        conn.close().then(() => console.log(`Conexão ao DB ${conn.options.database} encerrada!`)); 
    });


}
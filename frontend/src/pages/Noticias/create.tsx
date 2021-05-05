import React from "react";
import TextField from "@material-ui/core/TextField";
import { Card, Container } from "@material-ui/core";
import { CreateContainer } from "./sytles";
import { useForm } from "react-hook-form";
import { apiServidor } from "../../service/api";

export default function MultilineTextFields(): React.ReactElement {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any): void => {
        // data.data_publicacao = new Date();

        try {
            apiServidor.post("noticias", data).then(() => {
            window.history.go(-1);
        });
        } catch (err) {
        console.log(err);
        }
        console.log("finish");
    };

    return (
        <Container>
            <CreateContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card elevation={3}>
                        <TextField
                            id="titulo"
                            label="Título"
                            fullWidth
                            multiline
                            variant="outlined"
                            {...register("titulo", { required: true })}
                        />
                        <TextField
                            id="conteudo"
                            label="Conteúdo"
                            fullWidth
                            multiline
                            rows={8}
                            variant="outlined"
                            {...register("conteudo", { required: true })}
                        />
                    </Card>
                    <button type="submit">PUBLICAR </button>
                </form>
            </CreateContainer>
        </Container>
    );
};

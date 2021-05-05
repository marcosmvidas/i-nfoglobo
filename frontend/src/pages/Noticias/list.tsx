// @flow 
import * as React from 'react';
import { Container } from '@material-ui/core';
import { Noticia } from '../../components/apiNoticias';
import { Div } from './sytles';

type Props = {};

export const listNoticia = (props: Props) => {
    return (
        
        <Container> 
            <Div>
                <a href="/noticias/create"> Nova notícia </a>
            </Div>
        
            <div>
                <Noticia />
            </div>
        </Container>
        
    );
};

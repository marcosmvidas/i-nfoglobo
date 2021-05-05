import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import { Usuario_s } from './pages/Users';
import { listNoticia } from './pages/Noticias/list';
import { Post_s } from './pages/Posts';
import MultilineTextFields, {   } from './pages/Noticias/create';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/noticias/create" component={MultilineTextFields} />
                <Route path="/noticias" component={listNoticia} />
                <Route path="/posts" component={Post_s} />
                <Route path="/users" component={Usuario_s} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
import React from 'react';
import { renderToString } from 'react-dom/server';
import Template from './Template';

export default (title, content) => (`<!DOCTYPE html>${renderToString(<Template title={title} content={content} />)}`);

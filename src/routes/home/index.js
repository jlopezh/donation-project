import React from 'react';
import Home from './Home';

export const path = '/';
export const action = async (state) => {
  const title = 'Donors';
  state.context.onSetTitle(title);

  const news = {
    att1: 'Atributo 1',
    att2: 'Atributo 2',
  };
  return <Home news={news} />;
};

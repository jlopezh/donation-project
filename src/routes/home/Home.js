import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Map from '../../components/Map';

function Home() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Blood Donors Location</h1>
        <Map></Map>
      </div>
    </div>
  );
}

export default withStyles(Home, s);

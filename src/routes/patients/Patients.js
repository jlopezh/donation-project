import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Patients.scss';
import Map from '../../components/Map';

function Patients({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <Map></Map>
      </div>
    </div>
  );
}

export default withStyles(Patients, s);

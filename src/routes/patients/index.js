import React from 'react';
import Patients from './Patients';

export const path = '/patients';
export const action = async (state) => {
  const title = 'Patients';
  const pageTitle = 'Blood Patients Location';
  state.context.onSetTitle(title);
  return <Patients title={pageTitle} />;
};

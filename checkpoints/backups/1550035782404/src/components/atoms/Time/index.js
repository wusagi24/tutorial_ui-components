import React from 'react';
import moment from 'moment';
import 'moment/locale/ja';

export const TimeContainer = ({
  presenter,
  children: value,
  dateTime,
  format = 'MM月DD日(ddd)HH:mm',
  ...props,
}) => {
  value = parseInt(value, 10);

  const children = (!isValid(value)) ?
    '有効な時間表現ではありません' :
    formatDatetime(value, format);

  if (!dateTime) {
    dateTime = formatDatetime(value);
  }

  return presenter({ children, dateTime, ...props });
};

export const TimePresenter = props => <time { ...props } />;

const Time = props => (
  <TimeContainer
    presenter={ presenterProps => <TimePresenter { ...presenterProps }/> }
    { ...props }
  />
);

moment.locale;

function isValid(unixtime) {
  return moment(unixtime, 'x', true).isValid();
}

function formatDatetime(datetime, format = 'YYYY-MM-DDTHH:mm') {
  return moment(datetime).format(format);
}

export default Time;

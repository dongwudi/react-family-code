import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

function Loading() {
  return <Spin tip="Loading..."/>;
}

//按需加载
const StandardCom = Loadable({
  loader: () => import('../pages/standard'),
  loading: Loading
});

const DetailCom = Loadable({
  loader: () => import('../pages/detail'),
  loading: Loading
})

export {
  StandardCom,
  DetailCom
}
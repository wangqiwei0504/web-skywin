import request from '@/utils/request';

// 获取产品列表
export const getProductList = (params) =>
  request.get('/api/page/product/list', { params });

// 获取页面联系方式
export const getLink = () => request.get('/api/page/sys/contact');

import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// 获取首页轮播图
export let getBaner = () => {
  return axios.get('/slider');
}

// 获取首页列表
export let getNew = () => {
  return axios.get('/new');
}

// 首页所有数据获取
export let getHome = () => {
  return axios.all([getBaner(),getNew()]);
}

// 获取列表页列表
export let getList = () => {
  return axios.get('/list');
}

// 获取单个商品详情
export let getDetail = (id) => {
  return axios.get(`/list?id=${id}`);
}

// 获取列表分页接口
export let getPage = (page) => {
  return axios.get(`/page?page=${page}`);
}

// 删除商品
export let deleteGood=(id)=>{
  return axios.delete(`/list?id=${id}`);
}

// 修改商品
export let modifyGood=(id,data)=>{
  return axios.put(`/list?id=${id}`,data);
}

// 添加商品
export let addNewGood=(good)=>{
  return axios.post('/list',good);
}
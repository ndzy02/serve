import * as path from 'path';

const index = path.resolve(__dirname, 'public');

const blog = path.resolve(__dirname, '../ndzy/blog/dist');

export default {
  originUrl: '*', //允许所有访问
  port: 6688, //服务端口
  servePathList: [
    {
      url: '/',
      path: index
    },
    {
      url: '/blog',
      path: blog
    }
  ]
};

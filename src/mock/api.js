import Mock from 'mockjs'

Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 12,
    "username": "@name", //中文请使用@cname
    "email": "@email",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000 
  }
});
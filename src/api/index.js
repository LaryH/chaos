//加工ajax请求函数,使其进行定向请求指定数据

import Ajax from "@/server/ajax";
import MockAjax from "@/server/mockajax";

// const reqCategoryList = () => {
//   return Ajax.get('/product/getBaseCategoryList"');
// };
const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};

const reqBannerList = () => {
  return MockAjax({
    url: "/banner",
    method: "GET",
  });
};

const reqFloorList = () => {
  return MockAjax({
    url: "/floor",
    method: "GET",
  });
};

//searchParams代表搜索参数,这个参数必须要有,至少是一个没有属性的空对象
//参数如果是一个空对象,带吧搜索请求获取的是全部的数据
//参数如果有,代表获取是匹配后的数据
//code:201 参数有问题
const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: "/list",
    method: "POST",
    data: searchParams,
  });
};

const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: "GET",
  });
};

//请求添加购物车或者修改购物车
///api/cart/addToCart/{ skuId }/{ skuNum }
const reqAddOrUpdateCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "POST",
  });
};
//获取购物车列表
///api/cart/cartList
const reqShopCartList = () => {
  return Ajax({
    url: "/cart/cartList",
    method: "GET",
  });
};

///api/cart/checkCart/{skuID}/{isChecked}
//请求更改选择状态

const reqUpdateIsCheck = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "GET",
  });
};

//请求注册
///api/user/passport/register
const reqRegister = (mobile, password, code) => {
  return Ajax({
    url: "/user/passport/register",
    method: "post",
    data: { mobile, password, code },
  });
};

//请求登录
const reqLogin = ({ mobile, password }) => {
  return Ajax({
    url: "/user/passport/login",
    method: "post",
    data: { mobile, password },
  });
};

//退出登录
//api/user/passport/logout
const reqLogout = () => {
  return Ajax({
    url: "/user/passport/logout",
    method: "get",
  });
};

export {
  reqCategoryList,
  reqBannerList,
  reqFloorList,
  reqGoodsListInfo,
  reqGoodsDetailInfo,
  reqAddOrUpdateCart,
  reqShopCartList,
  reqUpdateIsCheck,
  reqRegister,
  reqLogin,
  reqLogout,
};

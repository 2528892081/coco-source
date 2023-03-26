import { saxios } from "@/utils/request";

const api = {
  detail: "/api/coco/goodsManage/query/goods",
  list: "/api/coco/goodsManage/query/goodsList",
};

function getGoodsList(params) {
  return saxios.post(api.list, params);
}

function getGoodsDetail(params) {
  return saxios.post(api.detail, params);
}

export { getGoodsDetail, getGoodsList };

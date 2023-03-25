import { saxios } from "@/utils/request";

const api = {
  detail: "/api/coco/goodsManage/query/goods",
};

function getGoodsDetail(params) {
  return saxios.post(api.detail, params);
}

export { getGoodsDetail };

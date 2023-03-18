import logo from "@/assets/icon.jpg";
export const navlist = [
  {
    path: "/home",
    icon: "house",
    label: "游戏无限",
    pic: logo,
  },
  {
    path: "/pc",
    icon: "el-icon-monitor",
    label: "单机游戏",
  },
  {
    path: "/switch",
    icon: "el-icon-coordinate",
    label: "switch游戏",
  },
  {
    path: "/connect",
    icon: "el-icon-chat-dot-square",
    label: "联系客服",
  },
  {
    path: "/usingWay",
    icon: "el-icon-info",
    label: "使用办法",
  },
];

export const loginList = [
  {
    id: 1,
    label: "登录",
    path: "/signUp",
    icon: "el-icon-turn-off",
  },
  {
    id: 2,
    label: "注册",
    path: "/register",
    icon: "el-icon-edit-outline",
  },
  {
    id: 3,
    label: "忘记密码",
    path: "/forgetPassword",
    icon: "el-icon-key",
  },
];

export const userList = [
  {
    id: 1,
    label: "个人信息",
    path: "/polyfile",
    icon: "el-icon-postcard",
  },
  {
    id: 2,
    label: "我的订单",
    path: "/orderList",
    icon: "el-icon-document",
  },
  {
    id: 3,
    label: "注销",
    path: "/loginout",
    icon: "el-icon-switch-button",
  },
];

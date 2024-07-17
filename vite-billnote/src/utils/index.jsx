import axios from "./axios";
import { baseUrl } from '../config'

export const get = axios.get;

export const post = axios.post;

const MODE = import.meta.env.MODE // 环境变量


export const typeMap = {
  1: {
    icon: "canyin",
  },
  2: {
    icon: "fushi",
  },
  3: {
    icon: "jiaotong",
  },
  4: {
    icon: "riyong",
  },
  5: {
    icon: "gouwu",
  },
  6: {
    icon: "xuexi",
  },
  7: {
    icon: "yiliao",
  },
  8: {
    icon: "lvxing",
  },
  9: {
    icon: "renqing",
  },
  10: {
    icon: "qita",
  },
  11: {
    icon: "gongzi",
  },
  12: {
    icon: "jiangjin",
  },
  13: {
    icon: "zhuanzhang",
  },
  14: {
    icon: "licai",
  },
  15: {
    icon: "tuikuang",
  },
  16: {
    icon: "qita",
  },
};
export const imgUrlTrans = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } else {
    url = `${MODE === 'development' ? 'http://localhost:7001' : baseUrl}${url}`
    return url
  }
}
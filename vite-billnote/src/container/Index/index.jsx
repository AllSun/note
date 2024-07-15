import { Button } from "antd-mobile";
import s from "./style.module.less";


export default function Index() {

  return (
    <div className={s.index}>
      <span>样式</span>
      <Button color="primary" fill="solid">
        Solid
      </Button>
    </div>
  );
}

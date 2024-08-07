import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { NavBar } from "antd-mobile";

import s from "./style.module.less";

const Header = ({ title = "" }) => {
  const navigateTo = useNavigate();
  return (
    <div className={s.headerWarp}>
      <div className={s.block}>
        <NavBar
          className={s.header}
          onBack={() => navigateTo(-1)}
        >{title}</NavBar>
      </div>
    </div>
  );
};
// 写公用组件一定要写 PropTypes
Header.propTypes = {
  title: PropTypes.string, // 标题
};

export default Header;

import Header from "~/layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div
      className={cx("wrapper")}
      style={{ background: "black", minHeight: "100vh" }}
    >
      <Header />
      <div className={cx("container")}>{children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

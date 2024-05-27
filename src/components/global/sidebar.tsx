import "@/scss/global/sidebar.scss";
import React from "react";
const Sidebar = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="side-bar">
      <p className="ss" ref={ref}></p>
    </div>
  );
});

export default Sidebar;

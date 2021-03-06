import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {/* If the particular icon is selected, 
      add the 'selected' class using JS */}
      <Icon className={"sidebarRow__icon"} />
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
}

export default SidebarRow;

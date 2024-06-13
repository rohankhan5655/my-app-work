import React from "react";

function Alert(props) {
  // <-- funtion to Capitalize the first word of the alert.type --->
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert color-white-500 bg-green alert-dismissible fade show fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-${props.alert.type}-700 border border-${props.alert.type}-400 px-4 py-2 rounded mt-4`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
    )
  );
}
export default Alert;

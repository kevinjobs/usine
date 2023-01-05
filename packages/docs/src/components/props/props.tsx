import React from "react";

interface PropsProps {
  of: React.FC;
}

function Props(props: PropsProps) {
  console.log(<props.of />);

  return (
    <div className="component-props">
      some props
    </div>
  )
}

export { Props, type PropsProps }
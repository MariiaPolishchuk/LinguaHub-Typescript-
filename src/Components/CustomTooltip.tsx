import React, { ReactElement } from "react";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

interface CustomTooltipProps extends TooltipProps {
  title: string;
  arrow?: boolean;
  children: ReactElement<any, any>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  arrow = true,
  children,
  ...otherProps
}: CustomTooltipProps) => {
  return (
    <Tooltip className="tooltip" title={title} arrow={arrow} {...otherProps}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;

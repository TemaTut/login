import React from "react";
import { ElProps } from "../../../utils/types/prop-types";

const Skeleton: React.FC<ElProps> = ({ width, background }) => {
    const style = {
        width,
        height: "28px",
        borderRadius: "14px",
        background,
        flexShrink: 0,
    };

    return <div style={style}></div>;
};

export default Skeleton;

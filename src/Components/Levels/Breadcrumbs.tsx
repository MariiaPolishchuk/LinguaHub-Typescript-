import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }: { paths: { url: string; label: string | React.ReactNode }[] }) => {
    return (
        <div className="breadcrumbs">
            {paths.map((path, index) => (
                <React.Fragment key={index}>
                    <Link to={path.url}>{path.label}</Link>
                    {index < paths.length - 1 && <span> {" > "} </span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;


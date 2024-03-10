import React from "react";
import { Link } from "react-router-dom";

interface PaginationItemProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
  route: string;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  page,
  isActive,
  onClick,
  route,
}) => {
  return (
    <Link
      to={route}
      className={`pagination-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <button>{page}</button>
    </Link>
  );
};

export default PaginationItem;

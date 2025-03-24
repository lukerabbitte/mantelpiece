import Badge from "@/components/Badge";

import { FaNewspaper, FaMicrophone, FaStar } from "react-icons/fa";

/* Util */
const getIcon = (category) => {
    return category.toUpperCase() === "INTERVIEW"
        ? FaMicrophone
        : category.toUpperCase() === "REVIEW"
        ? FaStar
        : FaNewspaper;
};

/* Util */
const getBadgeColor = (category) => {
    return category.toUpperCase() === "INTERVIEW"
        ? "bg-category-1"
        : category.toUpperCase() === "REVIEW"
        ? "bg-category-2"
        : "bg-category-3";
};

const CategoryBadge = ({ category }) => {
    return (
        <Badge
            icon={getIcon(category)}
            text={category}
            className={`max-w-32 ${getBadgeColor(category)} text-slate-900`}
        />
    );
};

export default CategoryBadge;

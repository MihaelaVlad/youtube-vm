import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import {
  backgroundColor,
  dropShadow,
  boxShadowStyle,
  selectedCategoryBackground,
} from "../utils/constants";

export const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      p={[0, 2]}
      m={[1, 2]}
      borderRadius={1}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "91%" },
        flexDirection: { md: "column" },
        background: backgroundColor,
        boxShadow: boxShadowStyle,
        filter: dropShadow,
        backdropFilter: "blur(16px)",
        border: "1px solid #3b92e982",
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background:
              category.name === selectedCategory && selectedCategoryBackground,
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? "#fff"
                  : selectedCategoryBackground,
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

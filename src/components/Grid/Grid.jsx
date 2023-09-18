/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Grid = ({ type, gap, children }) => {
  const minMaxWidths = {
    small: "187px",
    medium: "289px",
    large: "391px",
  };

  return (
    <div
      css={css`
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: repeat(
          auto-fill,
          minmax(${minMaxWidths[type]}, 1fr)
        );
        gap: ${gap};
        justify-content: center;
      `}
      className="grid"
    >
      {children}
    </div>
  );
};

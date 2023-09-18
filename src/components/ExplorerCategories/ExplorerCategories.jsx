/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Category } from "../Category/Category";
import { Grid } from "../Grid/Grid";
import imgAccommodations from "./img/img_accommodations.png";
import imgExperiences from "./img/img_experiences.png";
import imgAdventures from "./img/img_adventures.png";

export default function ExplorerCategories() {
  return (
    <div
      className="explorer-categories"
      css={css`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      `}
    >
      <h1
        className="explorer-categories__title"
        css={css`
          color: var(--secondary-dark-grey, #484848);
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        `}
      >
        Explorer Chairdnb
      </h1>
      <Grid type="large" gap="16px">
        <Category name="Accommodations" imgUrl={imgAccommodations} key="1" />
        <Category name="Experiences" imgUrl={imgExperiences} key="2" />
        <Category name="Adventures" imgUrl={imgAdventures} key="3" />
      </Grid>
    </div>
  );
}

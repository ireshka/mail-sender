import React from "react";
import { readFileSync } from "fs";

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlStyle,
  MjmlText,
  MjmlFont,
} from "mjml-react";

export const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Intern Survey</MjmlPreview>
        <MjmlStyle>{`
          .heading {
            margin-top: 24px;
            color: red;
          }
        `}</MjmlStyle>
        <MjmlFont
          name="FontAwesome"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection
          fullWidth
          backgroundColor="#efefef"
          paddingTop={"24px"}
          paddingLeft={"10px"}
          paddingRight={"10px"}
        >
          <MjmlText cssClass="heading" color={"#27BC3C"}>
            Hi! Rate our Intern Project.
          </MjmlText>
          <MjmlImage
            src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
            height="10px"
            width="10px"
          ></MjmlImage>
        </MjmlSection>
      </MjmlBody>
      <Mjml></Mjml>
    </Mjml>
  );
};

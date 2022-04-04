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
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef" paddingTop={"24px"} paddingLeft={'10px'} paddingRight={'10px'}>
          <MjmlText cssClass="heading" color={"#27BC3C"}>
            Hi! Rate our Intern Project.
          </MjmlText>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

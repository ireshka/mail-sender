import React from "react";

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
  MjmlGroup,
  MjmlSpacer,
} from "mjml-react";

export const generate = (email: string) => {
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
          <MjmlText
            cssClass="heading"
            color={"#27BC3C"}
            fontSize="30px"
            align="center"
            fontWeight={600}
          >
            Hi! Rate our Intern Project.
          </MjmlText>
          <MjmlSpacer height="40px"></MjmlSpacer>
          <MjmlGroup>
            <MjmlColumn>
              <MjmlImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                height="20px"
                width="20px"
              ></MjmlImage>
              <MjmlButton
                href={`http://localhost:3000/rating?mail=${email}&rating=5`}
              >
                <MjmlText align="center">5</MjmlText>
              </MjmlButton>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                height="20px"
                width="20px"
              ></MjmlImage>
              <MjmlButton
                href={`http://localhost:3000/rating?mail=${email}&rating=4`}
              >
                <MjmlText align="center">4</MjmlText>
              </MjmlButton>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                height="20px"
                width="20px"
              ></MjmlImage>
              <MjmlButton
                href={`http://localhost:3000/rating?mail=${email}&rating=3`}
              >
                <MjmlText align="center">3</MjmlText>
              </MjmlButton>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                height="20px"
                width="20px"
              ></MjmlImage>
              <MjmlButton
                href={`http://localhost:3000/rating?mail=${email}&rating=2`}
              >
                <MjmlText align="center">2</MjmlText>
              </MjmlButton>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
                src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                height="20px"
                width="20px"
              ></MjmlImage>
              <MjmlButton
                href={`http://localhost:3000/rating?mail=${email}&rating=1`}
              >
                <MjmlText align="center">1</MjmlText>
              </MjmlButton>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

/*
 * Copyright (c) 2021-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
//styles
import { Grid, Stack } from "@mui/material";
//color
import colorVideo from "../../assets/colorExplosion.mp4";
import styles from "./Home.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import ConstructionIcon from "@mui/icons-material/Construction";
import BoltIcon from "@mui/icons-material/Bolt";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";

const Home = () => {
  // const { authState, oktaAuth } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState(null);

  const name = "Hi! I'm Misae Römer.";
  const intro =
    "Creative Full Stack Dev. Sales Engineer. . 9/10 Personality. Lets Solve Problems Together!";
  const funFact1 = "Creative Full Stack Dev";
  const funFact2 = "Sales Engineer";
  const funFact3 = "Rapid Prototyping Engineer";
  const funFact4 = "Alexandria, VA";
  const funFact5 = "Boy Mama";

  return (
    <div className={styles.container}>
      <video className={styles.video} src={colorVideo} autoPlay muted loop />
      <Stack direction="column" sx={{ backgroundColor: "blue" }}>
        <div className={styles.introName}>
          <div className={styles.aroundName}>
            <span>{name}</span>
          </div>
        </div>
        <div className={styles.intro}>
          <p className={styles.marquee}>
            <span>
              <ConstructionIcon
                sx={{
                  fontSize: 30,
                  verticalAlign: "middle",
                }}
              />{" "}
              {funFact1} &nbsp;{" "}
              <WorkIcon
                sx={{
                  fontSize: 30,
                  verticalAlign: "middle",
                }}
              />{" "}
              {funFact2} &nbsp;{" "}
              <BoltIcon
                sx={{
                  fontSize: 30,
                  verticalAlign: "middle",
                }}
              />{" "}
              {funFact3} &nbsp;
              <LocationOnIcon
                sx={{
                  fontSize: 30,
                  verticalAlign: "middle",
                }}
              />{" "}
              {funFact4} &nbsp;{" "}
              <SportsMartialArtsIcon
                sx={{
                  fontSize: 30,
                  verticalAlign: "middle",
                }}
              />{" "}
              {funFact5}
            </span>
          </p>
        </div>
      </Stack>
    </div>
  );
};
export default Home;

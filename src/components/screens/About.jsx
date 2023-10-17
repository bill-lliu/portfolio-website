import { Affix, Group, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const About = () => {
  const { currentScreen } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "About") {
      setTimeout(() => {
        open();
      }, 1500);
    } else {
      setTimeout(() => {
        close();
      }, 200);
    }
  }, [currentScreen, open, close]);

  return (
    <>
      {opened ? (
        <Affix className="screen">
          <Stack gap={0}>
            <Title className="title">About Myself</Title>
            <div className="content">
              <Group
                // TODO: trigger refresh on window resize
                wrap={window.innerWidth < 768 ? "wrap" : "nowrap"}
                gap={"80px"}
              >
                <div>
                  <a
                    href="https://www.linkedin.com/in/bill-lliu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile_image"
                      // src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDCMRQOM-bkOgOovaano4hqUpcUjWtZ_Ftow18Z3RlV86CYLpghmpGS3enCYglwu5DTmCw17uOhbEYghixlqpltXt1GTQ=w3024-h1718"
                      src="https://media.licdn.com/dms/image/sync/C4E27AQETAOR5yV0Djg/articleshare-shrink_480/0/1697153704310?e=1698156000&v=beta&t=dNicthtYWtIntoHIqrBz9BY9Zrseqlz-S4LLtEcs6gk"
                      loading="lazy"
                      alt="profile image"
                    />
                  </a>
                </div>
                <div>
                  <Text>
                    Hi! My name is Bill, and welcome to my latest work in
                    progress. This refresh is meant to be a personal challenge
                    to learn & use Blender, 3D Rendering, and web animations.
                    &#128736;&#65039;
                  </Text>
                  <br />
                  <Text>
                    Although this is still a work in progress, the most recent
                    updates can be found at this project&apos;s{" "}
                    <a
                      href="https://github.com/bill-lliu/portfolio-website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub repo.
                    </a>{" "}
                    &#128161;
                  </Text>
                  <br />
                  <Text>
                    I&apos;m currently a 4B Comp Eng student at the University
                    of Waterloo, with 7 swe internships under my belt, and have
                    a variety of experiences: ranging from producing clean,
                    test-driven code at large multi-billion dollar tech
                    corporations; to prototyping, iterating, and pivoting
                    products/features at seed-stage startups of &lt;10 people.
                    &#129489;&#8205;&#128187;
                  </Text>
                  <br />
                  <Text>
                    I&apos;m currently seeking 2024 new grad or internship
                    opportunities at companies with cool products and people, so
                    if you think I&apos;d be a good fit, I&apos;d love to
                    connect! &#128522;
                  </Text>
                  <br />
                  <Text>
                    Thanks for visiting! Feel free to shoot me a text in the
                    chat at the bottom right &#128071;
                  </Text>
                  <Text>
                    <i>&#40;I&apos;ll get notifs on my phone&#41;</i>
                  </Text>
                </div>
              </Group>
            </div>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default About;

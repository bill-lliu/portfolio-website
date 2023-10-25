import { Affix, Center, ScrollArea, Stack, Text, Title } from "@mantine/core";
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
          <Stack align="center">
            <Title className="about_title">About Myself</Title>
            <Center className="about_image">
              <a
                href="https://www.linkedin.com/in/bill-lliu/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="profile_image"
                  // src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDCMRQOM-bkOgOovaano4hqUpcUjWtZ_Ftow18Z3RlV86CYLpghmpGS3enCYglwu5DTmCw17uOhbEYghixlqpltXt1GTQ=w3024-h1718"
                  src="./profile_picture.jpeg"
                  loading="lazy"
                  alt="profile image"
                />
              </a>
            </Center>

            <ScrollArea.Autosize
              className="about_text"
              h={window.innerHeight - 520}
              type="auto"
            >
              <Stack>
                <Text>
                  Hi! My name is Bill, and welcome to my latest work in
                  progress. This refresh is meant to be a personal challenge to
                  learn & use Blender, 3D Rendering, and web animations.
                  &#128736;&#65039;
                </Text>
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
                <Text>
                  I&apos;m currently a 4B Comp Eng student at the University of
                  Waterloo, with 7 swe internships under my belt, and have a
                  variety of experiences: ranging from producing clean,
                  test-driven code at large multi-billion dollar tech
                  corporations; to prototyping, iterating, and pivoting
                  products/features at seed-stage startups of &lt;10 people.
                  &#129489;&#8205;&#128187;
                </Text>
                <Text>
                  I&apos;m currently seeking 2024 new grad or internship
                  opportunities at companies with cool products and people, so
                  if you think I&apos;d be a good fit, I&apos;d love to connect!
                  &#128522;
                </Text>
                <Text>
                  Thanks for visiting! Feel free to shoot me a text in the chat
                  at the bottom right &#128071;
                  <br />
                  <i>&#40;I&apos;ll get notifs on my phone&#41;</i>
                </Text>
              </Stack>
            </ScrollArea.Autosize>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default About;

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
                      src="https://media.licdn.com/dms/image/C4D03AQFQDR-27olCgg/profile-displayphoto-shrink_800_800/0/1528225259484?e=1703116800&amp;v=beta&amp;t=7z_zYgBQbBqhf1JZ5DYi-rnCQhODj2da5lf-31oiXcI"
                      loading="lazy"
                      alt="profile image"
                    />
                  </a>
                </div>
                <div>
                  <Text>
                    Hi! My name is Bill, and welcome to the latest iteration of
                    my website. I&apos;ve always wanted to try a 3D project on
                    the web, so this refresh seemed like the perfect
                    opportunity. &#128736;&#65039;
                  </Text>
                  <br />
                  <Text>
                    This website is still a work in progress, but my most recent
                    commits can be found at this project&apos;s{" "}
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
                    of Waterloo, with 7 swe internships under my belt. I have
                    experience from producing clean, test-driven code at large
                    multi-billion dollar tech corporations; to prototyping,
                    iterating, and pivoting products/features at seed-stage
                    startups of &lt;10 people. &#129489;&#8205;&#128187;
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

import { Affix, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Contact = () => {
  const { currentScreen } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "Contact") {
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
            <Title className="title">Contact</Title>
            <div className="contact_list">
              <Text>
                Email:{" "}
                <a
                  href="mailto:siyi.liu@uwaterloo.ca"
                  target="_blank"
                  rel="noreferrer"
                >
                  siyi.liu@uwaterloo.ca
                </a>{" "}
                or{" "}
                <a
                  href="mailto:billliusiyi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  billliusiyi@gmail.com
                </a>
              </Text>
              <br />
              <Text>
                Call:{" "}
                <a href="tel:+16477235918" target="_blank" rel="noreferrer">
                  +1 &#40;647&#41; 723-5918
                </a>
              </Text>
              <br />
              <Text>
                Text:{" "}
                <a href="sms:+16478083188" target="_blank" rel="noreferrer">
                  +1 &#40;647&#41; 808-3188
                </a>{" "}
                or{" "}
                <a href="sms:+14158289304" target="_blank" rel="noreferrer">
                  +1 &#40;415&#41; 828-9304
                </a>
              </Text>
              <br />
              <br />
              <br />
              <Text>Other:</Text>
              <br />
              <Text>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/bill-lliu
                </a>{" "}
              </Text>
              <br />
              <Text>
                GitHub:{" "}
                <a
                  href="https://github.com/bill-lliu"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/bill-lliu
                </a>{" "}
              </Text>
              <br />
              <Text>
                Blog:{" "}
                <a
                  href="https://sbill.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  sbill.substack.com
                </a>
              </Text>
              <br />
              <Text>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/bill.lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @bill.lliu
                </a>
              </Text>
            </div>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Contact;

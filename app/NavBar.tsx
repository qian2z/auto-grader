"use client";
import { Container, Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { IoMdPerson } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className="border-b mb-5 px-5 h-14 py-2">
      <Container>
        <Flex gap="4" justify="between">
          <NavLink
            link={{ label: "About Us", href: "/about-us" }}
            currentPath={currentPath}
          />
          <Flex mt="2">
            <Link href="/">
              <Flex gap="3" justify="center" align="center">
                <TfiWrite size={25} />
                <Text weight="bold" size="5">
                  AutoGrader
                </Text>
              </Flex>
            </Link>
          </Flex>
          <NavLink
            link={{ label: "Login", href: "/login", icon: <IoMdPerson /> }}
            currentPath={currentPath}
          />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLink = ({
  link,
  currentPath,
}: {
  link: { label: string; href: string; icon?: ReactNode };
  currentPath: string;
}) => {
  return (
    <Flex>
      <Link
        href={link.href}
        className={classnames({
          "nav-link": true,
          "!text-zinc-900 font-semibold bg-sky-100": link.href === currentPath,
        })}
      >
        <Flex gap="2" justify="center" align="center">
          <Text>{link.label}</Text>
          {link?.icon}
        </Flex>
      </Link>
    </Flex>
  );
};

export default NavBar;

"use client";
import { Container, Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiWrite } from "react-icons/tfi";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 h-14 py-4">
      <Container>
        <Flex>
          <Flex gap="4">
            <Link href="/">
              <Flex gap="3" justify="center" align="center">
                <TfiWrite />
                <Text weight="bold" size="5">
                  AutoGrader
                </Text>
              </Flex>
            </Link>
            <NavLinks />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Get Started", href: "/started" },
  ];

  return (
    <ul className="flex space-x-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-zinc-900 font-semibold bg-sky-100":
                link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;

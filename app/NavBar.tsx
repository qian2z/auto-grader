"use client";
import {
  Container,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  Flex,
  Text,
} from "@radix-ui/themes";
import classnames from "classnames";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import { MdLogin, MdLogout } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="border-b mb-5 px-5 h-14 py-2">
      <Container>
        <Flex gap="4" justify="between">
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
          <AuthStatus status={status} session={session} />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLink = ({
  link,
}: {
  link: { label: string; href: string; icon?: ReactNode };
}) => {
  return (
    <Flex>
      <Link
        href={link.href}
        className={classnames({
          "nav-link": true,
        })}
      >
        <Flex gap="1" justify="center" align="center">
          {link?.icon}
          <Text>{link.label}</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

const AuthStatus = ({
  status,
  session,
}: {
  status: string;
  session: Session | null;
}) => {
  if (status === "loading") return <Skeleton className="mt-3" width="3rem" />;

  if (status === "unauthenticated")
    return (
      <NavLink
        link={{
          label: "Login",
          href: "/api/auth/signin",
          icon: <MdLogin />,
        }}
      />
    );

  return (
    <Flex mt="2" className="cursor-pointer">
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Flex
            gap="2"
            justify="center"
            align="center"
            className="rounded-md hover:bg-sky-100 transition-colors px-2"
          >
            <FaUser />
            <Text size="3">{session!.user!.name}</Text>
          </Flex>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          >
            <MdLogout className="mr-1" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </Flex>
  );
};

export default NavBar;

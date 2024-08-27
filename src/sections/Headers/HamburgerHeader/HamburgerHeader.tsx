import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Menubar from "@radix-ui/react-menubar";
import { Button, Flex, Link } from "@radix-ui/themes";

export const HamburgerHeaderBar = () => {
  return (
    <Flex direction="row" justify="center" align="center" gapX="9" width="full">
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger>
            <HamburgerDropdown />
          </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>
            <Link href={"/"}>Home</Link>
          </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>
            <Link href={"/about"}>About</Link>
          </Menubar.Trigger>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>
            <Link href={"/contact"}>Contact</Link>
          </Menubar.Trigger>
        </Menubar.Menu>
      </Menubar.Root>
    </Flex>
  );
};

export const HamburgerDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button>
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Link href="/about">About</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/contact">Contact</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/contact">Blog</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

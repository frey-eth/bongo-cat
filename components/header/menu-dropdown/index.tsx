"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import menu_icon from "@icons/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useAccount, useDisconnect } from "wagmi";
const MenuDropdown = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  return (
    <Menu>
      <MenuButton>
        <Image src={menu_icon} alt="menu" width={24} height={24} />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className={
          "z-[200] backdrop-blur-xl bg-black/70 text-[23px] text-center w-full h-full px-6 text-white py-6 bg mt-5 whitespace-nowrap font-crotah "
        }
      >
        <MenuItem>
          <button
            onClick={() => open()}
            className="block data-[focus]:bg-blue-100 h-fit w-full"
          >
            {address
              ? `Connected ${address.slice(0, 4)}...${address.slice(
                  address.length - 7,
                  address.length
                )}`
              : "Connect Wallet"}{" "}
          </button>
        </MenuItem>
        <MenuItem>
          <Link
            className="block data-[focus]:bg-blue-100 border-t "
            href="/#about"
          >
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="block data-[focus]:bg-blue-100 border-t"
            href="/#tokenomics"
          >
            Tokenomics
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="block data-[focus]:bg-blue-100 border-t"
            href="/#buy"
          >
            How to buy
          </Link>
        </MenuItem>

        <MenuItem>
          <button
            onClick={() => disconnect()}
            className={`block data-[focus]:bg-blue-100 border-t w-full ${
              !address && "hidden"
            }`}
          >
            Disconnect
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default MenuDropdown;

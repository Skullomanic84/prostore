import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {APP_NAME} from "@/lib/constants";
import {Button} from "@/components/ui/button";
import { PiShoppingCartLight, PiUserCheckThin } from "react-icons/pi";
import {ModeToggle} from "@/components/shared/header/mode-toggle";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className={"flex-start"}>
                        <Image
                            src="/images/logo.svg"
                            alt={`${APP_NAME} logo`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                        <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
                    </Link>
                </div>
                <div className="space-x-2">
                    <ModeToggle />
                    <Button asChild variant="ghost">
                        <Link href="/cart">
                            <PiShoppingCartLight /> cart
                        </Link>
                    </Button>

                    <Button asChild >
                        <Link href="/login">
                            <PiUserCheckThin /> login
                        </Link>
                    </Button>

                </div>
            </div>
        </header>
    )
}
export default Header

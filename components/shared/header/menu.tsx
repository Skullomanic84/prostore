import {ModeToggle} from "@/components/shared/header/mode-toggle";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {PiShoppingCartLight, PiUserCheckThin, PiDotsThreeOutlineVerticalFill} from "react-icons/pi";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";



const Menu = () => {
    return (
        <div className={"flex justify-end gap-3"}>
            <nav className={"hidden md:flex w-full max-w-xm gap-1"}>
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
            </nav>
            <nav className={"md:hidden"}>
                <Sheet>
                    <SheetTrigger className={"align-middle"}>
                        <PiDotsThreeOutlineVerticalFill />
                    </SheetTrigger>
                    <SheetContent className={"flex flex-col items-start"}>
                        <SheetTitle>Navigation</SheetTitle>

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

                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}

export default Menu

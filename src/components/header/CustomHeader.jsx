import {Button} from "@/components/ui/button"
import {MenuIcon} from "lucide-react";
import Image from "next/image";
import logo from "./logo.png"
import Link from "next/link"

export function CustomHeader() {
    return (
              <header className="h-14 flex items-center">
        <div className="container flex items-center justify-center px-4 md:px-6">
          <Link className="flex items-center justify-center" href="/">
            {/*<MountainIcon className="h-6 w-6"/>*/}
            {/*<span className="sr-only">Acme Inc</span>*/}

            <div className=" w-full h-full relative">
              <Image
                  src={logo}
                  alt=""
                  width={200}
                  height={100}
              />
            </div>
          </Link>
          <nav className="ml-auto hidden lg:flex items-center gap-4 sm:gap-6">
            <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/">
              首页
            </Link>
            <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/about">
              关于我们
            </Link>
            <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/product">
              产品
            </Link>
            <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/concat">
              联系我们
            </Link>
          </nav>
          <Button className="lg:hidden ml-auto">
            <MenuIcon className="w-4 h-4"/>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
    )
}
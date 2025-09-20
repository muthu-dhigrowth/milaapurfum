"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/shop", label: "Shop" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    // Dropdown example (uncomment if needed)
    // {
    //   label: "Pages",
    //   isDropdown: true,
    //   items: [
    //     { to: "/", label: "Home" },
    //     { to: "/home-2", label: "Home 2" },
    //     { to: "/about", label: "About" },
    //     { to: "/shop", label: "Shop" },
    //     { to: "/blog", label: "Blog" },
    //     { to: "/contact", label: "Contact" },
    //     { to: "/privacy-policy", label: "Privacy Policy" },
    //     { to: "/faqs", label: "FAQs" },
    //   ],
    // },
  ];

  const NavLinkItems = () =>
    navLinks.map((link) =>
      link.isDropdown ? (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 py-2 text-base font-body font-medium text-primary hover:text-accent transition-colors font-Lato">
              {link.label}
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card border-border rounded-lg mt-2 font-body font-Lato">
            {link.items?.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link
                  to={item.to}
                  className="px-4 py-2 text-primary hover:bg-muted"
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          key={link.label}
          to={link.to}
          className="py-2 text-base font-body font-medium text-primary hover:text-accent transition-colors font-Lato"
        >
          {link.label}
        </Link>
      )
    );

  return (
    <>
      <header className="z-50 w-full bg-background/95 backdrop-blur-sm font-Lato bg-[#f0f4e9]">
        <div className="max-w-[1440px] mx-auto flex h-[100px] items-center px-8 lg:px-20">
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
            {/* Mobile nav */}
            <div className="lg:hidden justify-self-start">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6 text-primary" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-background pt-16 w-[300px] font-Lato"
                >
                  <nav className="flex flex-col gap-y-6 px-4">
                    <NavLinkItems />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-x-8">
              <NavLinkItems />
            </nav>

            {/* Logo */}
            <div className="flex justify-center">
              <Link to="/" aria-label="home">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/6572a0e92354ed5d69166fcd_soapanic-2.svg?"
                  alt="Soapnic logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Search + Cart */}
            <div className="flex items-center justify-end gap-x-6">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <img
                  src={
                    isSearchOpen
                      ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656573a24d4e159736518b6d_icon-1-1.svg?"
                      : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65657dcd93e7014c2600e777_icon-2-3.svg?"
                  }
                  alt="Search Icon"
                  width={22}
                  height={22}
                />
              </button>

              {/* Cart Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="relative" aria-label="Open cart">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65657fd78ca69397a4b6e572_icon-3-4.svg?"
                      alt="Cart Icon"
                      width={24}
                      height={24}
                    />
                    <div className="absolute -top-1.5 -right-2 bg-[#bccde3] text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </div>
                  </button>
                </SheetTrigger>
                <SheetContent className="w-full max-w-[440px] sm:w-[440px] bg-card p-0 flex flex-col font-body bg-white">
                  <SheetHeader className="p-6 border-b">
                    <div className="flex justify-between items-center">
                      <SheetTitle className="font-display text-primary text-2xl font-normal font-Bitter">
                        Your Cart
                      </SheetTitle>
                    </div>
                  </SheetHeader>

                  <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                    <img
                      src="https://cdn.prod.website-files.com/65642838c9018bf978a0ef82/656d56a088c14fc9849bb561_empty-cart-image.png"
                      alt="Empty Cart"
                      width={150}
                      height={150}
                      className="mb-4 object-contain"
                    />
                    <p className="text-text-medium mb-4 font-Lato">
                      No products inside your bag.
                    </p>
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="bg-transparent border-2 font-Lato hover:text-white border-primary text-primary-foreground hover:bg-primary/90 !rounded-full px-6 py-2 h-auto text-sm font-medium"
                      >
                        <Link to="/shop">Start Shopping</Link>
                      </Button>
                    </SheetClose>
                  </div>

                  <div className="p-4 border-t mb-2">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-text-dark font-Lato">Subtotal</span>
                      <span className="text-text-dark font-medium font-Lato">
                        $ 0.00 USD
                      </span>
                    </div>
                    <Button className="w-full bg-primary text-white  hover:bg-primary/90 rounded-full h-12 text-sm font-medium font-Lato">
                      Continue to Checkout
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[49] bg-[#f0f4e9] flex flex-col items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg"
          >
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-8 text-center">
              Search here
            </h1>
            <form className="w-full flex flex-col gap-3">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full border-2 h-14 rounded-full px-6 text-base border-primary focus:ring-primary"
              />
              <Button
                type="submit"
                className="bg-transparent border-2 hover:text-white border-primary text-primary hover:bg-primary/10 rounded-full h-14 px-8 text-base font-medium w-auto self-center"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Root
function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

// Trigger
function SheetTrigger(
    props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

// Close Button
function SheetClose(props: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

// Portal Wrapper
function SheetPortal(props: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

// Overlay (Background)
function SheetOverlay({
                        className,
                        ...props
                      }: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
      <SheetPrimitive.Overlay
          data-slot="sheet-overlay"
          className={cn(
              "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
              className
          )}
          {...props}
      />
  );
}

// Content
function SheetContent({
                        className,
                        children,
                        side = "right",
                        ...props
                      }: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  const sideClasses = {
    right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
    left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
    top: "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    bottom:
        "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
  };

  return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
            data-slot="sheet-content"
            className={cn(
                "fixed z-50 flex flex-col bg-background shadow-lg outline-none",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "transition-transform duration-300 ease-in-out",
                sideClasses[side],
                className
            )}
            {...props}
        >
          <SheetPrimitive.Close className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none transition">
            <XIcon className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>

          {children}
        </SheetPrimitive.Content>
      </SheetPortal>
  );
}

// Optional Header/Footer/Title/Description
function SheetHeader({
                       className,
                       ...props
                     }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="sheet-header"
          className={cn("flex flex-col gap-1.5 p-4 border-b", className)}
          {...props}
      />
  );
}

function SheetFooter({
                       className,
                       ...props
                     }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="sheet-footer"
          className={cn("mt-auto flex flex-col gap-2 p-4 border-t", className)}
          {...props}
      />
  );
}

function SheetTitle({
                      className,
                      ...props
                    }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
      <SheetPrimitive.Title
          data-slot="sheet-title"
          className={cn("text-lg font-semibold text-foreground", className)}
          {...props}
      />
  );
}

function SheetDescription({
                            className,
                            ...props
                          }: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
      <SheetPrimitive.Description
          data-slot="sheet-description"
          className={cn("text-sm text-muted-foreground", className)}
          {...props}
      />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

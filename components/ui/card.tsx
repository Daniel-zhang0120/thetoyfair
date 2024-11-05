import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    images?: { src: string; alt: string }[]
    imageWidth?: number
    imageHeight?: number
  }
>(({ className, images = [], imageWidth = 180, imageHeight = 80, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex overflow-hidden",
      className
    )}
  >
    {images.map((image, index) => (
      <div key={index} className="flex-shrink-0 border" style={{ borderColor: '#4AD966', borderWidth: '2px' }}>
        <Image
          src={image.src}
          alt={image.alt || ""}
          width={imageWidth}
          height={imageHeight}
          className="object-cover"
        />
      </div>
    ))}
    <div {...props} />
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src: string
    alt: string
    width?: number
    height?: number
  }
>(({ className, src, alt, width = 400, height = 300, ...props }, ref) => (
  <div ref={ref} className={cn("overflow-hidden rounded-t-lg", className)} {...props}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-cover"
    />
  </div>
))
CardImage.displayName = "CardImage"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage }

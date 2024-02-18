/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/91C4JznCezY
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {CustomHeader} from "@/components/header/CustomHeader";

export function ConcatComponent() {
  return (
    (<div className="grid gap-12">
      <CustomHeader />
      <div className="space-y-4 px-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in touch</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Complete the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
          <Button>Send message</Button>
        </div>
      </div>
      <div className="space-y-4 px-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Contact Information</h2>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>123 Main St. Springfield, IL 62701</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}
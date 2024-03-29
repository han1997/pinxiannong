/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PSMZbQ0GZt6
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {CustomHeader} from "@/components/header/CustomHeader";

export function IndexComponent() {
  return (
    (<div className="flex flex-col min-h-screen">
      <CustomHeader />
{/*
      <header className="bg-gray-900 py-4 sm:py-6 md:py-8">
        <div
          className="container flex items-center justify-between px-4 space-y-0.5 sm:space-y-1.5 md:space-y-2">
          <Link className="flex items-center space-x-2" href="#">
            <ShellIcon className="h-6 w-6" />
            <span className="font-bold tracking-widest">Mushroom</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-gray-50"
              href="#">
              Home
            </Link>
            <Link
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-gray-50"
              href="#">
              Page
            </Link>
            <Link
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-gray-50"
              href="#">
              Products
            </Link>
            <Link
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-gray-50"
              href="#">
              Process
            </Link>
            <Link
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-gray-50"
              href="#">
              Testimonials
            </Link>
            <Link
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-gray-50"
              href="#">
              Contact
            </Link>
          </nav>
          <button className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </header>
*/}
      <main className="flex-1">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              alt="Hero"
              className="aspect-[3.6]"
              height="400"
              src="/placeholder.svg"
              width="1440" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
              <h1
                className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl/line-through-overflow dark:text-gray-100">
                The Art of Cultivation
              </h1>
              <p
                className="max-w-[900px] text-center text-gray-900 md:text-2xl lg:text-3xl dark:text-gray-100">
                Experience the natural beauty and exceptional flavor of our sustainably grown mushrooms.
              </p>
            </div>
          </div>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Tradition of Excellence</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                For over three generations, we have been dedicated to producing the finest mushrooms using time-honored
                techniques and state-of-the-art technology. Our commitment to quality and innovation ensures that every
                mushroom we grow is a testament to our passion for perfection.
              </p>
            </div>
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Perfect Ingredient</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms are not only delicious but also packed with essential nutrients. They are a rich source of
                vitamins, minerals, and antioxidants, making them a healthy addition to any diet. Our mushrooms are
                carefully cultivated to bring out their natural flavor and goodness, ensuring that you get the best
                possible experience with every bite.
              </p>
            </div>
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Art of Cultivation</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mushrooms are grown in carefully controlled environments that mimic the natural conditions where
                they thrive. We combine traditional farming methods with the latest technological advancements to create
                the perfect growing conditions for our mushrooms. From the initial spore to the fully grown mushroom,
                every step of the cultivation process is handled with care and expertise, ensuring that our mushrooms
                are of the highest quality.
              </p>
            </div>
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Feast for the Senses</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms are a versatile ingredient that can be used in a variety of culinary creations. Whether you
                sauté them to enhance their earthy flavor, add them to soups and stews for a hearty texture, or include
                them in pasta dishes for a pop of umami, our mushrooms are sure to elevate every meal. We are dedicated
                to providing fresh, flavorful, and high-quality mushrooms that inspire chefs and delight food lovers.
              </p>
            </div>
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Essence of Umami</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms are prized for their rich and savory flavor, often described as umami – the fifth taste that
                brings depth and complexity to dishes. Our mushrooms are carefully nurtured to develop this distinctive
                taste, allowing you to experience the true essence of umami in every bite. Whether you are a gourmet
                chef or a home cook, our mushrooms are the secret ingredient that will take your culinary creations to
                the next level.
              </p>
            </div>
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Magic of Mushrooms</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms have long been celebrated for their unique and mysterious nature. They are not plants, nor are
                they animals – they belong to their own kingdom, Fungi. This distinction makes them fascinating and
                enigmatic, with a world of wonders waiting to be discovered. Beyond their culinary appeal, mushrooms
                have been used in traditional medicine and valued for their potential health benefits. While scientific
                research into the medicinal properties of mushrooms is ongoing, many people believe that certain
                mushrooms may have immune-boosting, anti-inflammatory, and antioxidant effects. Whether you are
                captivated by the science or simply enjoy the taste, there is no denying that mushrooms have a special
                place in our hearts and on our plates.
              </p>
            </div>
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Art of Cultivation</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mushrooms are grown in carefully controlled environments that mimic the natural conditions where
                they thrive. We combine traditional farming methods with the latest technological advancements to create
                the perfect growing conditions for our mushrooms. From the initial spore to the fully grown mushroom,
                every step of the cultivation process is handled with care and expertise, ensuring that our mushrooms
                are of the highest quality.
              </p>
            </div>
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Feast for the Senses</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms are a versatile ingredient that can be used in a variety of culinary creations. Whether you
                sauté them to enhance their earthy flavor, add them to soups and stews for a hearty texture, or include
                them in pasta dishes for a pop of umami, our mushrooms are sure to elevate every meal. We are dedicated
                to providing fresh, flavorful, and high-quality mushrooms that inspire chefs and delight food lovers.
              </p>
            </div>
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Essence of Umami</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms are prized for their rich and savory flavor, often described as umami – the fifth taste that
                brings depth and complexity to dishes. Our mushrooms are carefully nurtured to develop this distinctive
                taste, allowing you to experience the true essence of umami in every bite. Whether you are a gourmet
                chef or a home cook, our mushrooms are the secret ingredient that will take your culinary creations to
                the next level.
              </p>
            </div>
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
          </section>
          <section
            className="container grid max-w-3xl gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:max-w-5xl xl:gap-10">
            <img
              alt="Image"
              className="aspect-video rounded-xl overflow-hidden object-cover object-center"
              height="338"
              src="/placeholder.svg"
              width="600" />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Magic of Mushrooms</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mushrooms have long been celebrated for their unique and mysterious nature. They are not plants, nor are
                they animals – they belong to their own kingdom, Fungi. This distinction makes them fascinating and
                enigmatic, with a world of wonders waiting to be discovered. Beyond their culinary appeal, mushrooms
                have been used in traditional medicine and valued for their potential health benefits. While scientific
                research into the medicinal properties of mushrooms is ongoing, many people believe that certain
                mushrooms may have immune-boosting, anti-inflammatory, and antioxidant effects. Whether you are
                captivated by the science or simply enjoy the taste, there is no denying that mushrooms have a special
                place in our hearts and on our plates.
              </p>
            </div>
          </section>
          <section
            className="container grid max-w-sm gap-6 px-4 py-12 md:grid-cols-2 md:max-w-3xl md:gap-12 md:py-16 lg:max-w-4xl lg:gap-10 lg:py-20 xl:max-w-5xl xl:gap-14 xl:py-24">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Contact Us</h2>
              <p
                className="max-w-[400px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to experience the exceptional quality of our mushrooms? Have a question about our products? We’d
                love to hear from you. Reach out to us using the contact form below, and we’ll get back to you as soon
                as possible.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <Input className="w-full" placeholder="Name" type="text" />
                <Input className="w-full" placeholder="Email" type="email" />
                <Input className="w-full" placeholder="Subject" type="text" />
                <Textarea className="min-h-[100px]" placeholder="Message" />
              </div>
              <Button size="lg">Submit</Button>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-900 py-12 sm:py-16 md:py-20">
        <div
          className="container grid gap-6 px-4 text-gray-100 md:gap-8 md:px-6 dark:text-gray-400">
          <div className="space-y-2">
            <Link className="font-bold tracking-widest" href="#">
              Mushroom
            </Link>
            <p className="text-sm">
              Experience the natural beauty and exceptional flavor of our sustainably grown mushrooms.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Products
            </Link>
            <Link className="hover:underline" href="#">
              Process
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}


function ShellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}

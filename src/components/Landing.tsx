/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Sofia from "../assets/sofia-avatar.png";
import Nature from "../assets/nature.jpg";
import Objetivo1 from "../assets/obj1.svg";
import Objetivo2 from "../assets/obj2.svg";
import Objetivo3 from "../assets/obj3.svg";
import Objetivo4 from "../assets/obj4.svg";
import Objetivo5 from "../assets/obj5.svg";
import Objetivo6 from "../assets/obj6.svg";
import Objetivo7 from "../assets/obj7.svg";
import Objetivo8 from "../assets/obj8.svg";
import Objetivo9 from "../assets/obj9.svg";
import Objetivo10 from "../assets/obj10.svg";
import Objetivo11 from "../assets/obj11.svg";
import Objetivo12 from "../assets/obj12.svg";
import Objetivo13 from "../assets/obj13.svg";
import Objetivo14 from "../assets/obj14.svg";
import Objetivo15 from "../assets/obj15.svg";
import Objetivo16 from "../assets/obj16.svg";
import Objetivo17 from "../assets/obj17.svg";
import OnuLogo from "../assets/un-logo.svg";

const navigation = [
  { name: "Conversar com a Sofia", href: "https://wa.me/+12193886682" },
  { name: "Como funciona?", href: "/funcionamento" },
  { name: "Sobre nós", href: "/sobre-nos" },
];
const primaryFeatures = [
  {
    name: "Valor 1.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Valor 2.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Valor 3.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ServerIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
];

const footernav = {
  main: [
    { name: "Conversar com a Sofia", href: "#" },
    { name: "Como funciona?", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Sobre nós", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">🏞️</span>
              🏞️
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                🏞️
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14 pb-6 lg:pb-0">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            />
          </svg>
          <div className="mx-auto max-w-7xl px-6  py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Sofia 🏞️,
                <br /> sua amiga verde.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A primeira IA ambientalista do Brasil! <br />A SOFIA nasceu com
                o propósito de ser uma assistente ambiental para todas as
                comunidades vulneráveis.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://wa.me/+12193886682"
                  className="rounded-md bg-lime-500 px-3.5 py-2.5 sm:text-lg text-sm font-semibold text-white shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                >
                  Conversar com a Sofia
                </a>
                <a
                  href="#"
                  className="sm:text-lg text-sm font-semibold leading-6 text-gray-900"
                >
                  Como funciona? <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg
                viewBox="0 0 366 729"
                role="img"
                className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              >
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={400}
                  height={800}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <Image
                    alt="Sofia Avatar"
                    src={Sofia}
                    className="h-full w-full object-cover"
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto sm:grid lg:grid max-w-lg  items-center sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Image
              className="col-span-2 mb-8 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* About Sofia */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8 ">
          <div className="mx-auto max-w-3xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Quem e a SOFIA?
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fuga nisi iusto aliquid. Quisquam odit, consectetur enim minima
              aut error consequatur quo porro soluta aperiam sint odio quidem
              possimus numquam.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptatum id quia enim odio tempora voluptatem sit blanditiis et
              quisquam. Tempora atque quis cumque est consequatur facilis
              necessitatibus. Ab, dolore!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptatum id quia enim odio tempora voluptatem sit blanditiis et
              quisquam. Tempora atque quis cumque est consequatur facilis
              necessitatibus. Ab, dolore!
            </p>
          </div>
        </div>

        {/* Sofia's Purpose */}
        <div className="mx-auto max-w-7xl px-6 py-8 lg:py-2 lg:mt-0  lg:flex lg:items-center lg:gap-x-10 lg:px-8 ">
          <div className="mx-auto max-w-3xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Proposito
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fuga nisi iusto aliquid. Quisquam odit, consectetur enim minima
              aut error consequatur quo porro soluta aperiam sint odio quidem
              possimus numquam.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptatum id quia enim odio tempora voluptatem sit blanditiis et
              quisquam. Tempora atque quis cumque est consequatur facilis
              necessitatibus. Ab, dolore!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptatum id quia enim odio tempora voluptatem sit blanditiis et
              quisquam. Tempora atque quis cumque est consequatur facilis
              necessitatibus. Ab, dolore!
            </p>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto lg:max-w-3xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg lg:max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Agenda ONU 2030 🇺🇳
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              17 Objetivos e 169 Metas para todas as nações do mundo visando um
              desenvolvimento sustentável.
            </p>
          </div>

          <div className=" ml-4 grid grid-cols-2 gap-x-4 gap-y-4 justify-center lg:justify-center lg:mt-10 lg:flex lg:gap-x-8 ">
            <Image
              src={Objetivo1}
              alt="Objetivo 1"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo2}
              alt="Objetivo 2"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo3}
              alt="Objetivo 3"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo4}
              alt="Objetivo 4"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo5}
              alt="Objetivo 5"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo6}
              alt="Objetivo 6"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
          </div>
          <div className="ml-4 mt-4 grid grid-cols-2 gap-x-4 gap-y-4 justify-center lg:justify-center lg:mt-6 lg:flex lg:gap-x-8 ">
            <Image
              src={Objetivo7}
              alt="Objetivo 7"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo8}
              alt="Objetivo 8"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo9}
              alt="Objetivo 9"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo10}
              alt="Objetivo 10"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo11}
              alt="Objetivo 11"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo12}
              alt="Objetivo 12"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
          </div>
          <div className="ml-4 mt-4 grid grid-cols-2 gap-x-4 gap-y-4 justify-center lg:justify-center lg:mt-6 lg:flex lg:gap-x-8 ">
            <Image
              src={Objetivo13}
              alt="Objetivo 13"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo14}
              alt="Objetivo 14"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo15}
              alt="Objetivo 15"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo16}
              alt="Objetivo 16"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={Objetivo17}
              alt="Objetivo 17"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
            <Image
              src={OnuLogo}
              alt="ONU"
              className="h-fit w-36 lg:h-52 lg:w-52 rounded-md hover:scale-105 duration-75 ease-in-out"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-lime-700 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Comunidades parceiras
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla. Ac
                  euismod vel sit maecenas.
                </p>
              </div>
              <Image
                src={Nature}
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-h-[36rem] object-cover max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center text-center sm:space-x-12"
            aria-label="Footer"
          >
            {footernav.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {footernav.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Sofia, desenvolvida pela Sig. Todos direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

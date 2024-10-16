import { Chip } from "@nextui-org/chip";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { Button } from "@/components/ui/button";
import Analytics from "@/components/analytics";
import Team from "@/components/team";
import Flash from "@/components/flash";
import { Switch } from "@/components/ui/switch";

const problems = [
  {
    icon: <Analytics />,
    title: "Manque de visibilité sur la productivité des salariés",
    subtitle:
      "Difficulté à suivre la performance de chaque employé en temps réel, rendant complexe l'évaluation de la productivité et l'optimisation des ressources.",
  },
  {
    icon: <Team />,
    title: "Gestion complexe des statuts des employés",
    subtitle:
      "Absence de visibilité instantanée sur la disponibilité des employés, compliquant l'affectation rapide des tâches et la gestion des priorités.",
  },
  {
    icon: <Flash />,
    title: "Difficile d’identifier les employés les plus performants",
    subtitle:
      "Sans outils adaptés, il est difficile de reconnaître et récompenser vos meilleurs employés, limitant ainsi le potentiel de votre équipe.",
  },
];
const solutions = [
  {
    title: "Real-Time Productivity Tracking",
    subtitle:
      "Monitor employee tasks and performance in real-time, ensuring full visibility into your team's progress and productivity levels.",
    screen: "/dashboard.png",
  },
  {
    title: "Automated Status Management",
    subtitle:
      "Automatically track employee availability with status updates, making task delegation and workflow management seamless and efficient.",
    screen: "/dashboard.png",
  },
  {
    title: "Performance-Based Recognition",
    subtitle:
      "Identify top performers with daily insights and reward outstanding efforts, creating a culture of recognition and motivation.",
    screen: "/dashboard.png",
  },
  {
    title: "Comprehensive Productivity Reports",
    subtitle:
      "Generate detailed reports to analyze productivity trends, empowering data-driven decisions that boost team efficiency and business success.",
    screen: "/dashboard.png",
  },
];
const steps = [
  {
    title: "Create Your Account",
    subtitle:
      "Sign up in just a few seconds and gain instant access to your dashboard. Start exploring the features tailored to improve your workflow and efficiency.",
    icon: "/user.svg",
  },
  {
    title: "Set Up Your Preferences",
    subtitle:
      "Customize your profile, set personal and team goals, and configure the platform to match your unique requirements. Tailor the experience to fit your business needs effortlessly.",
    icon: "/settings.svg",
  },
  {
    title: "Start Tracking Your Progress",
    subtitle:
      "Begin using the platform to monitor key performance metrics and track real-time progress. Stay on top of your objectives and drive your team towards success with actionable insights.",
    icon: "/chart.svg",
  },
];
const features = [
  {
    title: "Real-Time Performance",
    subtitle:
      "Track employee productivity and task completion in real time, allowing for immediate insights into your team's efficiency.",
    icon: "/monitor.svg",
  },
  {
    title: "Automated Task",
    subtitle:
      "Assign, track, and manage tasks effortlessly with an automated workflow that ensures nothing falls through the cracks.",
    icon: "/task.svg",
  },
  {
    title: "Customizable Reports",
    subtitle:
      "Generate in-depth, customizable reports that provide detailed insights into individual and team performance over time.",
    icon: "/report.svg",
  },
  {
    title: "Employee Recognition System",
    subtitle:
      "Motivate your team by recognizing top performers and rewarding them with badges, keeping morale high and encouraging productivity.",
    icon: "/recognition.svg",
  },
];
const pricingPlans = [
  {
    title: "Starter",
    price: "0€",
    description: "Parfait pour les petites équipes qui démarrent.",
    features: [
      "Gestion de 3 utilisateurs maximum",
      "Suivi de productivité basique",
      "Accès aux rapports mensuels",
      "Support client via la communauté",
    ],
  },
  {
    title: "Pro",
    price: "29€",
    description: "Idéal pour les équipes en pleine croissance.",
    features: [
      "Gestion jusqu'à 20 utilisateurs",
      "Suivi de productivité en temps réel",
      "Accès aux rapports hebdomadaires",
      "Intégration avec Google Calendar et Slack",
      "Support client prioritaire par email",
    ],
  },
  {
    title: "Premium",
    price: "99€",
    description:
      "Pour les entreprises qui veulent optimiser chaque aspect de leur gestion.",
    features: [
      "Utilisateurs illimités",
      "Rapports personnalisés en temps réel",
      "Automatisation complète des tâches",
      "Suivi avancé des performances",
      "Intégrations premium (Trello, Asana, Zapier)",
      "Support client 24/7 avec un gestionnaire dédié",
    ],
  },
];
const Home = () => {
  return (
    <>
    <section id="hero" data-aos="fade-in" data-aos-delay="100" className="">
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 container mx-auto text-center py-12 sm:py-16 md:py-24 lg:py-32">
        <Chip
          color="primary"
          variant="dot"
          className="mb-3 sm:mb-4 md:mb-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Website under development...
        </Chip>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-4 md:mb-6"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          Streamline Your Business Management
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          Optimize tasks, track performance, and empower <br /> your team with our
          all-in-one management platform.
        </p>
        <Button
          className="mb-3 sm:mb-4 md:mb-6"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          Get Started for Free
        </Button>
        <p className="text-xs sm:text-sm" data-aos="fade-up" data-aos-delay="1200">
          7 day free trial. No credit card required.
        </p>
      </div>

      <div className="w-full relative" data-aos="fade-up" data-aos-delay="1400">
        <div className="p-2 shadow-[0px_-18px_22px_rgba(0,0,0,0.1)] border rounded-lg w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto">
          <img
            src="/dashboardscreen.png"
            alt="hero dashboardscreen"
            className="border rounded-lg w-full h-auto"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-background via-background to-transparent lg:h-2/4"></div>
      </div>
    </section>


{
  /* Problem section */
}
    <section id="problem" className="w-full" data-aos="fade-up">
      <div>
        <div className="text-center px-4 sm:px-6">
          <p className="mb-2 uppercase text-sm sm:text-base">Problem</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Overcoming Common Obstacles in Business Management
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center w-full lg:w-9/12 mx-auto py-8 sm:py-10 md:py-20"
          data-aos="zoom-in"
        >
          {problems.map((problem, index) => (
            <div key={index} className="p-4 flex flex-col items-center gap-4 text-center">
              <div className="rounded-full bg-[#F3F3F3] w-[35px] sm:w-[40px] md:w-[50px] p-2 mx-auto">
                {problem.icon}
              </div>
              <h1 className="font-semibold text-base sm:text-lg md:text-xl">{problem.title}</h1>
              <p className="text-sm sm:text-base text-muted-foreground sm:w-8/12">{problem.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

{
  /* Solutions */
}
    <section id="solutions" data-aos="fade-in">
      <div className="bg-neutral-100">
        <div className="text-center px-4 sm:px-6">
          <p className="mb-4 md:mb-8 text-xs sm:text-sm pt-4 md:pt-8 uppercase">Solutions</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8">
            Optimize Team Productivity and Real-Time Management
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
            Our intuitive solution lets you track employee performance, manage
            statuses, and recognize <br className="hidden md:inline" /> efforts to
            unlock your team's full potential and drive business success.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-10 md:py-20"
          data-aos="fade-up"
        >
          {solutions.map((solution, index) => (
            <div
            key={index}
            className={`border p-4 rounded-md bg-neutral-50 h-auto relative overflow-hidden ${
              index === 2 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : index === 3 && "col-span-2"
            }`}
          >
              <h1 className="font-semibold text-base sm:text-lg mb-2">{solution.title}</h1>
              <p className="text-xs sm:text-sm md:text-base mb-8">{solution.subtitle}</p>
              <img
                src={solution.screen}
                alt="dashboard"
                className={`${index === 2 ? "w-full h-[30%] sm:h-full" : ""}`}
              />
              <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>

{
  /* Steps */
}
    <section id="howitswork" data-aos="fade-up">
      <div className="py-8 md:py-16 text-center">
        <p className="mb-4 md:mb-8 text-xs sm:text-sm uppercase">How it works</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8">
          Just 3 steps to get started
        </h1>
      </div>
      <div className="container mx-auto px-4 sm:px-2 md:px-12">
        <div className="flex flex-col md:flex-row justify-around items-center py-6 sm:py-8 md:py-12">
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full md:w-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-row w-full sm:w-[400px] md:w-[500px] gap-4 sm:gap-6"
                data-aos="fade-right"
              >
                <img src={step.icon} alt="icon" width={30} height={30} />
                <div>
                  <button className="text-start">
                    <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                      {step.title}
                    </h1>
                    <p className="text-xs sm:text-sm">{step.subtitle}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="fade-left" className="mt-8 md:mt-0 w-full md:w-auto">
            <img
              src="dashboard.png"
              alt="dashboard"
              className="w-full sm:w-[500px] md:w-[630px] h-auto border rounded-lg p-2 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>

{
  /* Features */
}
<section id="features" data-aos="zoom-in">
  <div className="text-center pt-10 md:pt-20 pb-12">
    <p className="mb-4 md:mb-8 text-sm uppercase">Features</p>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8">
      Powerful Features to Boost Your Team's Productivity
    </h1>
  </div>
  <div className="flex flex-col gap-10 md:gap-20 w-full md:w-8/12 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((features, index) => (
        <div key={index} className="text-center flex flex-col gap-4">
          <div className="bg-[#F3F3F3] w-[40px] md:w-[45px] p-2 rounded-full mx-auto">
            <img src={features.icon} alt="icons" className="w-full h-auto" />
          </div>
          <h1 className="font-semibold text-lg md:text-xl">{features.title}</h1>
          <p>{features.subtitle}</p>
          <hr className="h-[2px] rounded-full bg-neutral-300/50" />
        </div>
      ))}
    </div>
    <img
      src="dashboard.png"
      alt="das"
      className="border rounded-lg p-2 w-full h-auto mx-auto"
    />
  </div>
</section>


      {/* Pricing */}
      <section id="pricing" data-aos="fade-up">
        <div className="text-center pt-32 pb-16">
          <p className="mb-6 text-sm uppercase">Pricing</p>
          <h1 className="mb-6 text-5xl font-semibold">
            Choose the plan that's right for you
          </h1>
          <div className="flex gap-4 justify-center">
            <p>Monthly</p>
            <Switch />
            <p>Yearly</p>
          </div>
        </div>
        <div className="container mx-auto w-full h-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((pricingPlan, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 flex flex-col justify-between h-full"
                data-aos="zoom-in"
              >
                <div className="text-center mb-6">
                  <p className="text-2xl font-semibold mb-2">
                    {pricingPlan.title}
                  </p>
                  <p className="text-xl font-bold">
                    <span>{pricingPlan.price}</span>
                    <span className="text-sm font-normal">/ Monthly</span>
                  </p>
                  <p className="text-gray-500 mt-2">
                    {pricingPlan.description}
                  </p>
                </div>

                <ul className="mt-6 mb-6 flex flex-col gap-2">
                  {pricingPlan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-4">
                      <img src="/check.svg" alt="" width={20} height={20} />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Button
                    className="w-full my-2"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Subscribe
                  </Button>
                  <p className="text-gray-400 text-sm mt-2">
                    Perfect for individuals and small projects
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" data-aos="fade-in">
        <div className="text-center pt-20 pb-12">
          <p className="mb-8 text-sm uppercase">faq</p>
          <h1 className="mb-8 text-5xl font-semibold">
            Frequently asked questions
          </h1>
        </div>
        <div className="w-6/12 mx-auto">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Comment puis-je suivre la productivité de mes employés en temps réel ?"
            >
              Grâce à notre tableau de bord intuitif, vous pouvez suivre en
              temps réel les heures de travail, les tâches complétées et les
              statuts des employés. Des rapports détaillés vous aident également
              à analyser la productivité et les performances de chaque membre de
              l'équipe.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Quels types de rapports puis-je générer avec la plateforme ?"
            >
              Vous pouvez générer des rapports personnalisés pour suivre la
              productivité de vos équipes, comparer les performances entre
              employés et analyser les données sur une base hebdomadaire,
              mensuelle ou en temps réel.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Puis-je personnaliser les fonctionnalités selon mes besoins ?"
            >
              Oui, notre plateforme est entièrement personnalisable. Vous pouvez
              adapter le tableau de bord, les rapports, et même les statuts des
              employés selon les spécificités de votre entreprise.
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="Quels sont les outils intégrés à la plateforme ?"
            >
              Notre plateforme s'intègre facilement avec des outils de
              communication tels que Slack et Microsoft Teams, ainsi qu'avec des
              calendriers comme Google Calendar, pour une gestion centralisée et
              fluide.
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              title="Est-ce que je peux automatiser certaines tâches ?"
            >
              Oui, la plateforme permet d'automatiser des tâches répétitives,
              comme les rappels de tâches, les notifications de statut ou la
              génération de rapports périodiques, pour vous faire gagner du
              temps et améliorer l'efficacité.
            </AccordionItem>
          </Accordion>
          <p className="text-center mt-12">
            Still have questions? Email us at{" "}
            <span className="underline">yannis.mthpro@gmail.com</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" data-aos="fade-up">
        <div className="text-center bg-neutral-100 py-32 my-20">
          <p className="mb-8 text-sm uppercase">Ready to get started</p>
          <h1 className="mb-8 text-5xl font-semibold">
            Start your free trial today.
          </h1>
          <Button>
            Get started for free{" "}
            <img
              src="/arrowr.svg"
              alt=""
              width={20}
              height={20}
              className="ml-2"
            />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-neutral-800 py-8" data-aos="fade-in">
        <hr className="py-2" />
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-black uppercase">Chronos</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Streamlining business management, one task at a time.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-6 md:mb-0">
            <a
              href="#features"
              className="text-sm hover:text-neutral-700 transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm hover:text-neutral-700 transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm hover:text-neutral-700 transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-neutral-700 transition"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-neutral-700 transition"
            >
              <img src="/x.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-neutral-700 transition"
            >
              <img src="/insta.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-neutral-700 transition"
            >
              <img src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center text-neutral-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} Chronos. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;

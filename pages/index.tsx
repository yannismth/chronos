import {Chip} from "@nextui-org/chip";
import { Button } from "@/components/ui/button"
import Analytics from '@/components/analytics'
import Team from '@/components/team'
import Flash from '@/components/flash'

const problems = [
  {
    icon: <Analytics />,  // Icône Analytics
    title: "Manque de visibilité sur la productivité des salariés",
    subtitle: "Difficulté à suivre la performance de chaque employé en temps réel, rendant complexe l'évaluation de la productivité et l'optimisation des ressources.",
  },
  {
    icon: <Team />,  // Icône Team
    title: "Gestion complexe des statuts des employés",
    subtitle: "Absence de visibilité instantanée sur la disponibilité des employés, compliquant l'affectation rapide des tâches et la gestion des priorités.",
  },
  {
    icon: <Flash />,  // Icône Flash
    title: "Difficile d’identifier les employés les plus performants",
    subtitle: "Sans outils adaptés, il est difficile de reconnaître et récompenser vos meilleurs employés, limitant ainsi le potentiel de votre équipe.",
  },
];
const solutions = [
  {
    title: "Real-Time Productivity Tracking",
    subtitle: "Monitor employee tasks and performance in real-time, ensuring full visibility into your team's progress and productivity levels.",
    screen:"/dashboard.png"
  },
  {
    title: "Automated Status Management",
    subtitle: "Automatically track employee availability with status updates, making task delegation and workflow management seamless and efficient.",
    screen:"/dashboard.png"
  },
  {
    title: "Performance-Based Recognition",
    subtitle: "Identify top performers with daily insights and reward outstanding efforts, creating a culture of recognition and motivation.",
    screen:"/dashboard.png"
  },
  {
    title: "Comprehensive Productivity Reports",
    subtitle: "Generate detailed reports to analyze productivity trends, empowering data-driven decisions that boost team efficiency and business success.",
    screen:"/dashboard.png"
  }
];
const steps = [
  {
    title: "Create Your Account",
    subtitle: "Sign up in just a few seconds and gain instant access to your dashboard. Start exploring the features tailored to improve your workflow and efficiency.",
    icon: "/user.svg"
  },
  {
    title: "Set Up Your Preferences",
    subtitle: "Customize your profile, set personal and team goals, and configure the platform to match your unique requirements. Tailor the experience to fit your business needs effortlessly.",
    icon: "/settings.svg"
  },
  {
    title: "Start Tracking Your Progress",
    subtitle: "Begin using the platform to monitor key performance metrics and track real-time progress. Stay on top of your objectives and drive your team towards success with actionable insights.",
    icon: "/chart.svg"
  }
];
const features = [
  {
    title: "Real-Time Performance",
    subtitle: "Track employee productivity and task completion in real time, allowing for immediate insights into your team's efficiency.",
    icon: "/monitor.svg" // Icône de suivi en temps réel
  },
  {
    title: "Automated Task",
    subtitle: "Assign, track, and manage tasks effortlessly with an automated workflow that ensures nothing falls through the cracks.",
    icon: "/task.svg" // Icône de gestion des tâches
  },
  {
    title: "Customizable Reports",
    subtitle: "Generate in-depth, customizable reports that provide detailed insights into individual and team performance over time.",
    icon: "/report.svg" // Icône de rapports
  },
  {
    title: "Employee Recognition System",
    subtitle: "Motivate your team by recognizing top performers and rewarding them with badges, keeping morale high and encouraging productivity.",
    icon: "/recognition.svg" // Icône de reconnaissance des employés
  }
];
const Home = () => {
    return <>
      <section>
        <div className="w-6/12 container mx-auto text-center py-32">
          <Chip color="primary" variant="dot" className="mb-6" data-aos="fade-right" data-aos-delay="400">Website under development...</Chip>
          <h1 className="text-6xl font-semibold mb-6" data-aos="fade-left" data-aos-delay="600">Streamline Your Business Management</h1>
          <p className="text-lg mb-6" data-aos="fade-right" data-aos-delay="800">Optimize tasks, track performance, and empower <br /> your team with our all-in-one management platform.</p>
          <Button className="mb-6" data-aos="fade-left" data-aos-delay="1000">Get Started for Free</Button>
          <p className="text-sm" data-aos="fade-up" data-aos-delay="1200">7 day free trial. No credit card required.</p>
        </div>

        <div className="w-full relative" data-aos="fade-up" data-aos-delay="1400">
          <div className="p-2 shadow-[0px_-18px_22px_rgba(0,0,0,0.1)] border rounded-lg w-6/12 mx-auto">
            <img src="/dashboardscreen.png" alt="hero dashboardscreen" width={1000} height={600} className="border rounded-lg"/>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background to-transparent lg:h-2/4"></div>
        </div>
      </section>
      {/* Problem section */}
      <section className="w-full">
        <div>
          <div className="text-center">
            <p className="mb-2 uppercase">Problem</p>
            <h1 className="text-5xl font-semibold">Overcoming Common Obstacles in Business Management</h1>
          </div>
          <div className="grid grid-cols-3 justify-center w-9/12 mx-auto py-20">
            {problems.map((problems, index) => (
              <div key={index} className="p-4 flex flex-col gap-4">
                <div className="rounded-full bg-foreground-200 w-[50px] p-2">{problems.icon}</div>
                <h1 className="font-semibold text-xl">{problems.title}</h1>
                <p className="text-muted-foreground">{problems.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-neutral-100">
          <div className="text-center">
            <p className="mb-8 text-sm pt-8 uppercase">Solutions</p>
            <h1 className="mb-8 text-5xl font-semibold">Optimize Team Productivity and Real-Time Management</h1>
            <p className="text-slate-600 text-lg">Our intuitive solution lets you track employee performance, manage  statuses, and recognize <br /> efforts to unlock  your team's full potential and drive business success.</p>
          </div>
          <div className="grid grid-cols-3 w-6/12 mx-auto gap-4 py-20">
            {solutions.map((solutions,index) => (
              <div key={index} className={`border p-4 rounded-md bg-neutral-50 h-2/12 relative overflow-hidden ${index === 2 ? "row-span-2" : (index === 3 && "col-span-2")}`}>
                <h1 className="font-semibold mb-2">{solutions.title}</h1>
                <p className="mb-8">{solutions.subtitle}</p>
                <img src={solutions.screen} alt="dashboard" className={`${index === 2 ? 'w-[100%] h-[30%] ml-20' : ''}`}/> {/* Modifier l'image en svg */}
                <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="py-20 text-center">
          <p className="mb-8 text-sm uppercase">How it's works</p>
          <h1 className="mb-8 text-5xl font-semibold">Just 3 step to get started</h1>
        </div>
        <div className="container mx-auto px-12">
          <div className="flex flex-row justify-around items-center py-8">
            <div className="flex flex-col items-center gap-12">
              {steps.map((steps,index) => (
                <div key={index} className="flex flex-row w-[500px] gap-6">
                  <img src={steps.icon} alt="icones" width={30} height={30}/>
                  <div>
                    <button className="text-start">
                      <h1 className="text-xl font-semibold">{steps.title}</h1>
                      <p className="text-sm">{steps.subtitle}</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img src="dashboard.png" alt="dash" width={630} height={630} className="border rounded-lg p-2 shadow-sm"/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center pt-20 pb-12">
          <p className="mb-8 text-sm uppercase">Features</p>
          <h1 className="mb-8 text-5xl font-semibold">Powerful Features to Boost Your Team's Productivity</h1>
        </div>
        <div className="flex flex-col gap-20 w-8/12 mx-auto">
          <div className="flex gap-6">
            {features.map((features,index) => (
              <div key={index} className="text-center flex flex-col gap-4">
                <div className="bg-slate-100 w-[45px] p-2 rounded-full mx-auto"><img src={features.icon} alt="icons" width={100} height={100}/></div>
                <h1 className="font-semibold text-xl">{features.title}</h1>
                <p>{features.subtitle}</p>
                <hr className="h-[2px] rounded-full bg-neutral-300/50"/>
              </div>
            ))}
          </div>
          <img src="dashboard.png" alt="das" width={1152} height={1000} className="border rounded-lg p-2 mx-auto"/>
        </div>
      </section>
  </>
  };
  
  export default Home;
  
import {Chip} from "@nextui-org/chip";
import { Button } from "@/components/ui/button"
const Home = () => {
    return <>
      <section>
        <div className="w-6/12 container mx-auto text-center py-32">
          <Chip color="primary" variant="dot" className="mb-6">Website under development...</Chip>
          <h1 className="text-6xl font-semibold mb-6">Streamline Your Business Management</h1>
          <p className="text-lg mb-6">Optimize tasks, track performance, and empower <br /> your team with our all-in-one management platform.</p>
          <Button className="mb-6">Get Started for Free</Button>
          <p className="text-sm">7 day free trial. No credit card required.</p>
        </div>

        <div className="w-full relative">
          <div className="p-2 shadow-[0px_-18px_22px_rgba(0,0,0,0.1)] border rounded-lg w-6/12 mx-auto">
            <img src="/dashboardscreen.png" alt="hero dashboardscreen" width={1000} height={600} className="border rounded-lg"/>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background to-transparent lg:h-2/4"></div>
        </div>
      </section>
      {/* Problem section */}
      <section className="w-full h-screen">
        <div>
          <div>
            <p>Problem</p>
            <h1 className="text-3xl">Overcoming Common Obstacles in Business Management</h1>
          </div>
          <div>

          </div>
        </div>
      </section>
  </>
  };
  
  export default Home;
  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const login = () => {
    return(
        <>
        <section className="flex flex-col w-full h-screen items-center justify-center">
            <div className="border rounded-lg w-[360px]">
                <div className="p-6">
                    <h1 className="text-xl font-semibold">Login</h1>
                    <p className="text-sm text-muted-foreground mt-2">Enter your email below to login to your account</p>
                </div>
                <div className="text-center flex flex-col px-4 pb-4 gap-4">
                    <Button variant="outline"><img src="google-line.svg" alt="google logo" width={20} height={20} className="mr-2"/>Login with Google</Button>
                    <Button variant="outline"><img src="github-line.svg" alt="github logo" width={20} height={20} className="mr-2"/>Login with Github</Button>
                    <div className="flex items-center">
                        <hr className="w-32"/>
                        <p className="uppercase px-4 text-muted-foreground text-xs">Or continue with</p>
                        <hr className="w-32"/>
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-sm">Email</label>
                        <Input type="text" placeholder="m@example.com" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <label className="text-sm">Password</label>
                            <a href="/" className="underline text-sm mr-2">Forgot your password ?</a>
                        </div>
                        <Input type="password"/>
                        <Button variant="default" className="w-full my-4">Login</Button>
                        <p className="text-sm">Don't have an account ? <span className="underline"><a href="/">Signup</a></span></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default login
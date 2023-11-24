import Image from "next/image"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
        <div className=" items-center justify-center flex flex-col w-full h-screen bg-cover min-h-[650px] black-gradient ">
        <div className="fixed top-8 px-12 w-full">
          <div className="w-48">
            <Image
              src="/logo.png"
              alt="red netflix logo text png"
              width={80}
              height={10}
            />
          </div>
        </div>
        {children}
      </div>
    )
  }
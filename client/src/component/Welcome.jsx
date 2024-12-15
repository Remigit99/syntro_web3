
import { SiEthereum } from "react-icons/si";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Input from "./Input";


const Welcome = () => {
  return (
    <header className="pt-20 pb-8">
      <div className="w-[80%] mx-auto my-0 flex justify-between text-white">
        <div>
          <h1 className="font-bold">
            Send Crypto <br />
            across the world
          </h1>
          <p className="mt-6 mb-8 w-[60%]">
            Explore the crypto world. Buy and sell cryptocurrencies
            easily on Syntro
          </p>
        </div>


        <div className="flex flex-col items-center">

          <div>
            <div className="bg-purple-500 rounded-2xl w-[320px] h-[200px] p-2">
              <div className="flex flex-col justify-between h-full">

                <div className="flex justify-between items-center">
                  <span className="w-[40px] h-[40px] p-2 rounded-full border flex justify-center items-center border-white">

                    <SiEthereum size={30} style={{ display: "grid", placeItems: "center" }} />
                  </span>
                  <IoMdInformationCircleOutline />
                </div>

                <div>
                  <div className="mb-6">
                    <p className="font-medium">0xafc2...7a689</p>
                  </div>
                  <div>
                    <h2 className="font-semibold">Ethereum</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[400px] rounded-2xl h-[350px] mt-12 p-4 bg-slate-800">

<div className="flex flex-col gap-2">
              <Input placeholder="Wallet Address"/>
              <Input placeholder="Amount"/>
              <Input placeholder="Keyword"/>
              <Input placeholder="Enter Message"/>
         
              </div>
              <hr className="px-4 h-2 my-6"/>

              <div>
                <button className="rounded-full">Send Now</button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </header>
  )
}

export default Welcome
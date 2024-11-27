import Image from "next/image";

export default function Welcome() {
    return (
            <div className="py-8 min-h-[45vh] text-center sm:py-8">
                <h5 className="mb-2 text-3xl font-bold text-black">A more detailed explanation of Minecraft</h5>
                <p className="mb-5 text-base text-gray-700 sm:text-lg">Latest information updates.</p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        className="flex w-full sm:w-auto bg-blue-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg items-center justify-center px-4 py-2.5"
                    >
                        <Image
                            className="mr-3 w-7 h-7"
                            src="/JavaICON.png"
                            width={50}
                            height={50}
                            priority
                            alt="Java Edition"
                        />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Java Edition</div>
                            <div className="text-sm font-semibold">Data Document</div>
                        </div>
                    </a>

                    {/* ปุ่ม Bedrock Edition */}
                    <a
                        href="/BedrockEdition"
                        className="flex w-full sm:w-auto bg-blue-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg items-center justify-center px-4 py-2.5"
                    >
                        <Image
                            className="mr-3 w-7 h-7"
                            src="/BedrockICON.png"
                            width={50}
                            height={50}
                            priority
                            alt="Bedrock Edition"
                        />
                        <div className="text-left">
                            <div className="mb-1 text-xs">Bedrock Edition</div>
                            <div className="text-sm font-semibold">Data Document</div>
                        </div>
                    </a>
                </div>
            </div>
    );
}

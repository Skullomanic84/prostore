import Image from 'next/image'
import loader from "@/resources/assets/loader.gif"

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <Image
                src={loader}
                alt="loading"
                height={30}
                width={30}
            />
        </div>
    )
}
export default Loading

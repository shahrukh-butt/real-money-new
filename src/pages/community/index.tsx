import Post from "../../components/Post";

export default function Community() {





    return (
        <div className='flex flex-col items-center justify-center gap-10 relative'>

            <p className='Bold-heading uppercase'>Community</p>


            <div className="rounded-box w-[62%] ">
                <div className="rounded-box-inner">
                    {/* Posts */}
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>

        </div>
    )
}

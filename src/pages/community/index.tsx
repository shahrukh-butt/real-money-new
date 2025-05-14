import Post from "../../components/Post";

export default function Community() {





    return (
        <div className='flex flex-col items-center justify-center gap-10 relative px-5 md:px-0'>

            <p className='Bold-heading uppercase'>Community</p>


            <div className="rounded-box md:w-[62%]  ">
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

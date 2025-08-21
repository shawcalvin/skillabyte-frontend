import { Image } from "@/components/ui/media";
import { Divider } from "@/components/ui/divider";


export default function AboutPage() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-primary-blue-800 text-3xl font-bold mt-16">About Us</div>
                <Divider className="max-w-[128px] my-4 mb-16" />
                <div className="max-w-7xl flex flex-col sm:flex-row justify-center items-center mr-16 mb-16">
                    <Image
                        src="https://skillabyte-public.s3.us-west-1.amazonaws.com/static/stairs-graphic.svg"
                        alt="Skillabyte - Step Up Your Training"
                        size={500}
                        className="mr-16"
                    />
                    <div className="flex flex-col justify-center">
                        <div className="text-primary-blue-800 font-bold text-xl">
                            Skillabyte LLC: Step Up Your Skills
                        </div>
                        <div className="text-gray-800 mt-2">
                            At Skillabyte, we&apos;re on a mission to revolutionize learning. Our tagline, &quot;Step up your training,&quot; isn&apos;t just a promise—it&apos;s a commitment to making education more engaging, innovative, and relevant. Whether you&apos;re a professional looking to enhance your skills or an organization seeking cutting-edge training solutions, Skillabyte is here to help you grow with purpose and excitement.
                        </div>
                        <div className="text-gray-800 mt-4">
                            We know that learning should be an experience, not a boring compliance exercise. We believe that learning should inspire curiosity, build real-world skills, and most of all, be enjoyable. At Skillabyte, we take a fresh approach to education—one that&apos;s driven by innovation and the understanding that impactful learning is lifelong learning.
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl flex flex-col sm:flex-row justify-center items-center">
                    <div className="flex flex-col justify-center mr-16 mb-16">
                        <div className="text-primary-blue-800 font-bold text-xl">
                            Meet Our Founder
                        </div>
                        <div className="text-gray-800 mt-2">
                            Skillabyte LLC was founded by Dr. David A. Wood, a <a href="https://marriott.byu.edu/directory/details?id=1076" target="_blank" className="text-primary-blue-500 underline">professor of accounting</a> at Brigham Young University and a passionate innovator in education. Over the past two decades, Dr. Wood has been a leader in accounting education—from co-creating the <a href="http://eyarc.site/" target="_blank" className="text-primary-blue-500 underline">EYARC Experience platform</a> with the EY Foundation, to creating the free <a href="https://www.techhub.training/" target="_blank" className="text-primary-blue-500 underline">TechHub.Training</a> learning resource, to creating dozens of free accounting cases and coauthoring a market-leading <a href="https://www.pearson.com/en-us/subject-catalog/p/accounting-information-systems/P200000010389/9780138114411" target="_blank" className="text-primary-blue-500 underline">accounting information systems textbook</a>. His work has consistently focused on making educational content more accessible, practical, and engaging for students around the world.
                        </div>
                        <div className="text-gray-800 mt-4">
                            Dr. Wood&apos;s dedication to developing cutting-edge curriculum has earned him numerous awards for educational innovation. After years of focusing on student education, he realized that many of these same innovations could be extended to help professionals who need to step up their skills—and who deserve content that is not just informative but truly engaging. In 2024, Dr. Wood launched Skillabyte to bring this vision to the professional market.
                        </div>
                        <div className="text-gray-800 mt-4">
                            Dr. Wood loves connecting with other professionals and learning from their experiences. Feel free to reach out to him on <a href="https://www.linkedin.com/in/davidawood/" target="_blank" className="text-primary-blue-500 underline">LinkedIn</a> or via email at davidwood@byu.edu—he&apos;s always happy to hear from those who share his passion for learning and innovation.
                        </div>
                    </div>
                    <Image
                        src="/images/headshots/DavidWood.png"
                        alt="Skillabyte - Step Up Your Training"
                        size={400}
                        className="mr-16 rounded-full border-4 border-primary-gray-200"
                    />
                </div>
            </div>
        </>
    )
}
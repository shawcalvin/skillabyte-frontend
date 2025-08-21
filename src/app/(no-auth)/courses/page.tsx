import { Image } from '@/components/ui/media'
import { HttpClient } from '@/lib/client'
import { Product } from '@/lib/types/payments'
import { CourseList } from './course-list'

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
    const products = (await HttpClient.get<Product[]>('/payments/products/', false)).data

    return (
        <>
            <div className='flex flex-col items-center text-primary-blue-800'>
                <div className='w-full max-w-7xl'>
                    <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                        <div className='text-3xl font-semibold mt-16 lg:mr-16'>
                            Explore our catalog of expert-designed CPE courses
                            <div className='text-gray-800 text-xl mt-4 font-normal'>
                                Whether you&apos;re looking to enhance your understanding of generative AI, master the art of prompt engineering, or sharpen your audit inquiry skills, Skillabyte has the right course for you. From foundational knowledge to specialized training, each course is crafted to help you achieve your professional goals, no matter your experience level.
                            </div>
                        </div>
                        <Image
                            src='/images/graphics/step.svg'
                            alt='Skillabyte Courses'
                            className='mt-16 lg:mt-0'
                            size={400}
                        />
                    </div>
                    <CourseList courses={products} />
                </div>
            </div>
        </>
    )
}

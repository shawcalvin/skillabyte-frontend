import { HttpClient } from "@/lib/client";
import { CourseList } from "./course-list";
import { RegisteredCourse } from "@/lib/types/course";
import { Product } from "@/lib/types/payments";
import { Divider } from "@/components/ui/divider";

export const dynamic = 'force-dynamic';

export default async function CatalogPage() {
    const response = await HttpClient.get<Product[]>('/payments/products/');
    const products = response.data;

    const registeredRes = await HttpClient.get<RegisteredCourse[]>('/courses/registered/')
    const registeredCourses = registeredRes.data

    return (
        <>
            <div className="text-primary-blue-800 font-bold text-2xl text-center mb-8">
                Course Catalog
            </div>
            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-lg shadow-sm p-4 text-primary-blue-900">
                    <p className="text-xl font-bold">Get Unlimited Access to All CPE Courses for Just $300/Year</p>
                    <Divider className="mt-2 mb-4" />
                    <div className="flex flex-col sm:flex-row items-center justify-center">
                        <img
                            alt=""
                            src="/images/graphics/cart.svg"
                            className="mx-auto w-full h-auto max-w-64 object-contain px-4"
                        />
                        <div className="space-y-4 mx-8">
                            <p className="text-lg">Get unlimited access to our entire CPE course catalog—including all current and future courses—for just $300/year. Stay current with evolving industry topics and continuously expand your expertise with new and updated content, all for one flat annual fee.</p>
                            <p className="text-lg">
                                Email us at <span className="text-primary-orange-500">support@skillabyte.com</span> to get started today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CourseList courses={products} registered={registeredCourses} />
        </>
    )
}
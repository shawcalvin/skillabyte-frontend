import { Divider } from '@/components/ui/divider'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function InstructionsPage() {
    return (
        <>
            <div className='text-2xl text-primary-blue-800 text-center font-bold mt-16'>Course Instructions</div>
            <div className="bg-white text-primary-blue-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                        <div></div>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">What content is included in the course?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>Each course is composed of a learning module and a qualified assessment. You must complete the learning module to unlock access to the qualified assessment. Then, to receive credit for the course, you must pass the qualified assessment with at least a score of 70%.</p>
                                        <p>Each learning module is composed of a combination of informational text, videos, review questions, and interactive activities. All content in the learning module must be completed before you can access the qualified assessment. However, learning module content is ungraded and can be attempted as many times as you like.</p>
                                        <p>The qualified assessment is composed of several multiple choice questions designed to test your understanding of the learning module. You must pass the learning module with a score of at least 70% to receive credit  for the course. You may attempt the learning module as many times as necessary.</p>
                                        <p>Both the learning module and the qualified assessment are accessed by navigating to a course from the dashboard page. On the course details page, you can access the course content through the navigation buttons near the bottom of the page. Note that the &quot;Start Quiz&quot; option will only become available after completing the learning module.</p>
                                        <img
                                            src="/images/instructions/course-preview.png"
                                            alt="Skillabyte Course Page Instructions"
                                            className="p-8"
                                        />
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">How do I navigate through a learning module?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>To navigate through the pages of the learning module, use the &quot;Next&quot; and &quot;Previous&quot; buttons at the bottom of each learning module page. You may encounter a navigation button that is disabled.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/module-navigation-locked.png"
                                                alt="Skillabyte Course Instructions Navigation Locked"
                                                className="p-8"
                                            />
                                        </div>
                                        <p>A disabled navigation button means that some module content, such as a review question or interactive activity, must be completed before navigating to the next page. After completing the appropriate module content, the navigation button will unlock as shown.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/module-navigation-unlocked.png"
                                                alt="Skillabyte Course Instructions Navigation Unlocked"
                                                className="p-8"
                                            />
                                        </div>
                                        <p>Additionally, you may navigate directly to a learning module page using the page navigation in the learning module header. However, a page will only become available for navigation after you have visited it at least once using the previously mentioned navigation methods.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/module-header.png"
                                                alt="Skillabyte Course Instructions Navigation Header"
                                                className="p-8"
                                            />
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">How can I quickly find specific information within a learning module?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>If you are looking for specific course content, you can use the keyword search function. The keyword search is available at the top of every learning module page. Note that while you can search for content throughout a course, you cannot access the content until you have visited the page it is found on.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/module-header.png"
                                                alt="Skillabyte Course Instructions Navigation Locked"
                                                className="p-8"
                                            />
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">How can I find key terms used in a course?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>A list of key terms is available at the end of every learning module. This glossary serves as an overview of the concepts covered in the course and is a useful resource in preparing for the qualified assessment. Find the course glossary by opening a learning module and navigating to the last module page.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/glossary.png"
                                                alt="Skillabyte Course Instructions Navigation Locked"
                                                className="p-8"
                                            />
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">How do I access the qualified assessment?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>To receive credit for a course, you must pass the qualified assessment with a score of at least 70%. You may take the qualified assessment an unlimited number of times. Begin the qualified assessment by clicking the &quot;Start Quiz&quot; button on the course page.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/course-preview.png"
                                                alt="Skillabyte Course Instructions Qualified Assessment"
                                                className="p-8"
                                            />
                                        </div>
                                        <p>Additionally, the qualified assessment can be accessed on the final learning module page. The module navigation will include a &quot;Begin Quz&quot; option to launch the qualified assessment.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/module-navigation-quiz.png"
                                                alt="Skillabyte Course Instructions Navigation Quiz"
                                                className="p-8"
                                            />
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">How do I view feedback for the qualified assessment?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>After passing a qualified assessment, you can view feedback for each assessment attempt on the course details page by clicking on the quiz attempt that you want to review. Feedback will only become available after you pass the assessment with a score of at least 70%.</p>
                                        <div className="w-full flex justify-center">
                                            <img
                                                src="/images/instructions/course-preview.png"
                                                alt="Skillabyte Course Instructions Qualified Assessment"
                                                className="p-8"
                                            />
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">How long after enrolling in a course do I have to complete it?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <div className="space-y-4 mt-8">
                                        <p>All courses for CPE credit must be completed within one year of your course purchase or enrollment date. You can still review or finish the course after one year, but any work completed beyond that period will not count toward your CPE credit.</p>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Label } from "@/components/ui/fieldset";
import { Subheading, Title } from "@/components/ui/heading";
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio";
import { HttpClient } from "@/lib/client"
import { QuizAttempt, QuizDetails } from "@/lib/types/content"


export default async function QuizReviewPage({
    params
}: {
    params: { organizationId: string, learnerId: string, courseId: string, attemptId: string }
}) {

    const attempt = (await HttpClient.get<QuizAttempt>(`/content/quizzes/organization/${params.organizationId}/learner/${params.learnerId}/attempts/${params.attemptId}`)).data;
    const quiz = (await HttpClient.get<QuizDetails>(`/content/quizzes/${params.courseId}/details`)).data

    if (!attempt) {
        return (
            <PermissionDeniedPage organizationId={params.organizationId} learnerId={params.learnerId} courseId={params.courseId} title={quiz.course.title} />
        )
    }

    return (
        <>
            <div className="flex flex-col items-center text-primary-blue-900">
                <div className="w-full max-w-7xl p-2">
                    <div className='w-full h-28 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-primary-blue-900 font-bold text-xl rounded-lg overflow-hidden shadow-lg mb-8'>
                        <div className='flex items-center px-6 w-full h-full border-b-2 border-gray-200 '>
                            {quiz.course.title}
                        </div>
                    </div>
                    <Title>
                        Quiz Review
                    </Title>
                    <Divider className="mt-4 mb-8" />
                    {quiz.questions.map((question, index) => {
                        const selectedAnswer = attempt.question_completions.find(entry => entry.question.id === question.id);
                        const selectedAnswerDetails = question.answer_choices.find(answer => answer.id === selectedAnswer?.given_answer);

                        return (
                            <div key={index} className="w-full">
                                <Subheading className="mb-4">{`${question.question_num ? question.question_num + ". " : ""}`}{question.question}</Subheading>
                                <RadioGroup value={attempt.question_completions.find(entry => entry.question.id === question.id)?.given_answer.toString()}>
                                    {question.answer_choices.sort(answer => answer.answer_num).map((answer, index) => (
                                        <>
                                            <RadioField key={index}>
                                                <Radio color='orange' value={answer.id.toString()}
                                                />
                                                <Label>{answer.answer}</Label>
                                            </RadioField>
                                        </>
                                    ))}
                                </RadioGroup>
                                <div className="w-full space-y-5 mt-2 mb-8">
                                    <div className={`${selectedAnswerDetails?.is_correct ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100'} text-sm mt-8 border-2 p-4 rounded-md`}>
                                        {selectedAnswerDetails?.is_correct ? '✅' : '❌'} {selectedAnswerDetails?.feedback}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                    <div className="w-full flex justify-center">
                        <Button href={`/facilitator/organizations/${params.organizationId}/learners/${params.learnerId}`} className="mt-16">
                            Return to Learner Overview
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}


function PermissionDeniedPage({ organizationId, learnerId, courseId, title }: { organizationId: string; learnerId: string; courseId: string; title: string }) {
    return (
        <>
            <div className="flex flex-col items-center text-primary-blue-900">
                <div className="w-full max-w-7xl p-2">
                    <div className='w-full h-28 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-primary-blue-900 font-bold text-xl rounded-lg overflow-hidden shadow-lg mb-8'>
                        <div className='flex items-center px-6 w-full h-full border-b-2 border-gray-200 '>
                            {title}
                        </div>
                    </div>
                    <div className="text-center mt-16 text-red-500 font-semibold text-lg">
                        You do not have permission to review this quiz.
                    </div>
                    <div className="w-full flex justify-center">
                        <Button href={`/facilitator/organizations/${organizationId}/learners/${learnerId}`} className="mt-16">
                            Return to Learner Overview
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
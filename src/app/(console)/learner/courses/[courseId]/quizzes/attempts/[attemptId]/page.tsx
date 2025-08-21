import { Divider } from "@/components/ui/divider";
import { Title } from "@/components/ui/heading";
import { HttpClient } from "@/lib/client"
import { ProtectedQuiz } from "@/lib/types/quizzes"
import { GradedQuiz } from "@/components/interactive/quiz";
import { QuizAttempt } from "@/lib/types/content";


export default async function QuizPage({
    params
}: {
    params: { courseId: number, attemptId: number }
}) {
    const res = await HttpClient.get<ProtectedQuiz>(`/content/quizzes/${params.courseId}`);
    const quiz = res.data;

    quiz.questions.sort((a, b) => a.question_num - b.question_num);

    const attempts = (await HttpClient.get<QuizAttempt[]>(`/content/quizzes/courses/${params.courseId}/attempts`)).data;
    const unfinishedQuizAttempt = attempts.find(attempt => !attempt.time_submitted);

    const givenAnswers = Array(quiz.questions.length).fill(null);

    if (unfinishedQuizAttempt) {
        const questionCompletions = unfinishedQuizAttempt.question_completions;

        questionCompletions.forEach(completion => {
            const questionIndex = quiz.questions.findIndex(q => q.id === completion.question.id);
            if (questionIndex !== -1) {
                givenAnswers[questionIndex] = completion.given_answer;
            }
        });
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
                        {quiz.title}
                    </Title>
                    <Divider className="mt-4 mb-8" />
                    <GradedQuiz courseId={params.courseId} attemptId={params.attemptId} quiz={quiz} givenAnswers={givenAnswers} />
                </div>
            </div>
        </>
    )
}
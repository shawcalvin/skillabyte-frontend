import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuizAttempt } from "@/lib/types/content";
import { RegisteredCourse } from "@/lib/types/course";
import { Learner } from "@/lib/types/user"

type LearnerActivityProps = {
    organizationId: number;
    learner: Learner;
    courses: RegisteredCourse[];
    attempts: QuizAttempt[];
}

export function LearnerActivity({ organizationId, courses, attempts, learner }: LearnerActivityProps) {

    const pickRelevantAttempt = (list: QuizAttempt[]) => {
        if (!list.length) return undefined;
        return [...list].sort((a, b) => {
            const sa = a.score ?? -Infinity;
            const sb = b.score ?? -Infinity;
            if (sb !== sa) return sb - sa;
            const ta = new Date(a.time_submitted ?? a.time_started ?? 0).getTime();
            const tb = new Date(b.time_submitted ?? b.time_started ?? 0).getTime();
            return tb - ta;
        })[0];
    };

    return (
        <div className="flex justify-center text-primary-blue-900">
            <div className="w-full max-w-7xl flex flex-col items-center">
                <div className="font-bold text-xl mb-8">
                    User Activity
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>
                                Course Name
                            </TableHeader>
                            <TableHeader>
                                Completion
                            </TableHeader>
                            <TableHeader>
                                Grade
                            </TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.map((course, index) => {
                            const courseAttempts = attempts?.filter((attempt: QuizAttempt) => attempt.quiz.course.id === course.course.id) || [];

                            let status = "Not Started";
                            let maxScore = 0;
                            let attemptLink

                            if (courseAttempts.length > 0) {
                                const isCompleted = courseAttempts.some((attempt: QuizAttempt) => !!attempt.time_submitted);
                                const isInProgress = courseAttempts.some((attempt: QuizAttempt) => !attempt.time_submitted);

                                if (isCompleted) {
                                    status = "Completed";
                                } else if (isInProgress) {
                                    status = "In Progress";
                                }

                                maxScore = Math.max(...courseAttempts.map((attempt: QuizAttempt) => attempt.score));

                                const attempt = pickRelevantAttempt(courseAttempts);
                                attemptLink = attempt
                                    ? `/facilitator/organizations/${organizationId}/learners/${learner.id}/courses/${course.course.id}/quizzes/attempts/${attempt.id}`
                                    : undefined;
                            }

                            return (
                                <TableRow key={index} href={attemptLink}>
                                    <TableCell>{course.course.title}</TableCell>
                                    <TableCell>{status}</TableCell>
                                    <TableCell>
                                        {status === 'Completed' ? maxScore : '--'}
                                    </TableCell>
                                </TableRow>

                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
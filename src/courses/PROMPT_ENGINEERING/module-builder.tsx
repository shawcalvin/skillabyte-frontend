"use client"

import Page1 from './learning-module/1-introduction';
import Page2 from './learning-module/2-background';
import Page3 from './learning-module/3-basics';
import Page4 from './learning-module/4-summary-of-techniques';
import Page5 from './learning-module/5-review-quiz';
import Page6 from './learning-module/6-advanced-techniques';
import Page7 from './learning-module/7-practice';
import Page8 from './learning-module/8-ethics';
import Page9 from './learning-module/9-applications';
import Page10 from './learning-module/10-data-analysis';
import Page11 from './learning-module/11-reporting';
import Page12 from './learning-module/12-communication';
import Page13 from './learning-module/13-training';
import Page14 from './learning-module/14-next-steps';
import Page15 from './learning-module/15-conclusion';
import { LearningModulePage } from '@/lib/types/modules';

export default function moduleBuilder() {
    const pages: LearningModulePage[] = [
        (props) => <Page1 {...props} />,
        (props) => <Page2 {...props} />,
        (props) => <Page3 {...props} />,
        (props) => <Page4 {...props} />,
        (props) => <Page5 {...props} />,
        (props) => <Page6 {...props} />,
        (props) => <Page7 {...props} />,
        (props) => <Page8 {...props} />,
        (props) => <Page9 {...props} />,
        (props) => <Page10 {...props} />,
        (props) => <Page11 {...props} />,
        (props) => <Page12 {...props} />,
        (props) => <Page13 {...props} />,
        (props) => <Page14 {...props} />,
        (props) => <Page15 {...props} />
    ];

    return { pages };
}
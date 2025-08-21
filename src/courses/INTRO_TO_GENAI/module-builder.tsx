"use client"

import Page1 from './learning-module/1-ai-history';
import Page2 from './learning-module/2-terms';
import Page3 from './learning-module/3-gpt';
import Page4 from './learning-module/4-benefits';
import Page5 from './learning-module/5-interactive-activities';
import Page6 from './learning-module/6-challenges';
import Page7 from './learning-module/7-dealing-with-challenges';
import Page8 from './learning-module/8-review-quiz';
import Page9 from './learning-module/9-ai-governance';
import Page10 from './learning-module/10-emerging-trends';
import Page11 from './learning-module/11-implications';
import Page12 from './learning-module/12-considerations';
import Page13 from './learning-module/13-conclusion';
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
        (props) => <Page13 {...props} />
    ];

    return { pages };
}
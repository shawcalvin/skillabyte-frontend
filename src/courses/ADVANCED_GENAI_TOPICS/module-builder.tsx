"use client"

import Page0 from './learning-module/0-table-of-contents';
import Page1 from './learning-module/1-introduction';
import Page2 from './learning-module/2-model-development';
import Page3 from './learning-module/3-training-techniques';
import Page4 from './learning-module/4-tool-integration';
import Page5 from './learning-module/5-prompting';
import Page6 from './learning-module/6-multi-agent-systems';
import Page7 from './learning-module/7-review-quiz';
import Page8 from './learning-module/8-rag';
import Page9 from './learning-module/9-advanced-reasoning-models';
import Page10 from './learning-module/10-second-review-quiz';
import Page11 from './learning-module/11-human-in-the-loop';
import Page12 from './learning-module/12-techniques';
import Page13 from './learning-module/13-conclusion';
import { LearningModulePage } from '@/lib/types/modules';

export default function moduleBuilder() {
    const pages: LearningModulePage[] = [
        (props) => <Page0 {...props} />,
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
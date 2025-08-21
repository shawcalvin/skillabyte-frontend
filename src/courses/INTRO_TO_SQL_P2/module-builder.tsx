"use client"

import { LearningModulePage } from '@/lib/types/modules';
import Page1 from './learning-module/1-joins';
import Page2 from './learning-module/2-practice-joins';
import Page3 from './learning-module/3-multiple-joins';
import Page4 from './learning-module/4-union';
import Page5 from './learning-module/5-distinct';
import Page6 from './learning-module/6-limit-offset';
import Page7 from './learning-module/7-comprehensive-practice';
import Page8 from './learning-module/8-summary';

export default function moduleBuilder() {
    const pages: LearningModulePage[] = [
        (props) => <Page1 {...props} />,
        (props) => <Page2 {...props} />,
        (props) => <Page3 {...props} />,
        (props) => <Page4 {...props} />,
        (props) => <Page5 {...props} />,
        (props) => <Page6 {...props} />,
        (props) => <Page7 {...props} />,
        (props) => <Page8 {...props} />
    ];

    return { pages: pages };
}
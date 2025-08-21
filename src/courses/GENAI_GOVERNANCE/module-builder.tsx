"use client"

import { LearningModulePage } from '@/lib/types/modules';
import Page1 from './learning-module/1-introduction';
import Page2 from './learning-module/2-framework';
import Page3 from './learning-module/3-risks';
import Page4 from './learning-module/4-quiz';
import Page5 from './learning-module/5-domains';
import Page6 from './learning-module/6-mitigate-risks';
import Page7 from './learning-module/7-mitigate-risks-two';
import Page8 from './learning-module/8-mitigate-risks-3';
import Page9 from './learning-module/9-applying-the-framework';
import Page10 from './learning-module/10-challenge-1';
import Page11 from './learning-module/11-challenge-2';
import Page12 from './learning-module/12-challenge-3';
import Page13 from './learning-module/13-challenge-4';
import Page14 from './learning-module/14-conclusion';

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
        (props) => <Page14 {...props} />
    ];

    return { pages: pages };
}
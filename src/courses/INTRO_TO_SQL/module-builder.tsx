"use client"

import { LearningModulePage } from '@/lib/types/modules';
import Page1 from './learning-module/1-databases-and-querying';
import Page2 from './learning-module/2-sql-commands';
import Page3 from './learning-module/3-select-from-clauses';
import Page4 from './learning-module/4-select-operations';
import Page5 from './learning-module/5-practice-select-operations';
import Page6 from './learning-module/6-where-clause';
import Page7 from './learning-module/7-order-by-clause';
import Page8 from './learning-module/8-sql-in-practice';
import Page9 from './learning-module/9-group-by-clause';
import Page10 from './learning-module/10-having-clause';
import Page11 from './learning-module/11-conclusion';

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
        (props) => <Page11 {...props} />
    ];

    return { pages: pages };
}
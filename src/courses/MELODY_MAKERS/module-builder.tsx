"use client"

import { LearningModulePage } from '@/lib/types/modules'
import Page1 from './learning-module/1-background'
import Page2 from './learning-module/2-instructions'
import Page3 from './learning-module/3-interview'
import Page4 from './learning-module/4-reflection'
import Page5 from './learning-module/5-conclusion'

export default function moduleBuilder() {
    const pages: LearningModulePage[] = [
        (props) => <Page1 {...props} />,
        (props) => <Page2 {...props} />,
        (props) => <Page3 {...props} />,
        (props) => <Page4 {...props} />,
        (props) => <Page5 {...props} />,
    ];

    return { pages };
}
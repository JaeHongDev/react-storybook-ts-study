import React from "react";

import Task from "./Task";

export default {
    component: Task,
    title: 'Task',
}

const Template = args => <Task {...args} />


//Template.bind => 함수의 복사본을 만드는 자바스크립트의 표준 기법
export const Default = Template.bind({});

Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'Task_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED'
    }
}


export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVEDs'
    }
}




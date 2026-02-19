import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                date: '15/07/2024',
                tasks:[
                    {id: 1, task: 'Get Groceries from the market', status: 'Pending'},
                    {id: 2, task: 'Go to Gym', status: 'Completed'},
                    {id: 3, task: 'Water the plants', status: 'Completed'},
                ]
            },
            {
                date: '16/07/2024',
                tasks:[
                    {id: 1, task: 'Go to the park', status: 'Completed'},
                    {id: 2, task: 'Get m room cleaned', status: 'Pending'}
                ]
            },
        ]
    },
    reducers:{
        statusUpdateBtn: (state, action)=> {
            const { date, id } = action.payload

            const dateGroup = state.tasks.find((item) => item.date === date )

            if(dateGroup){
                const task = dateGroup.tasks.find((t) => t.id === id)

                if(task){
                    task.status = task.status === 'Pending' ? 'Completed' : 'Pending'
                }
            }
        }
    },
})

export const { statusUpdateBtn } = taskSlice.actions

export default taskSlice.reducer
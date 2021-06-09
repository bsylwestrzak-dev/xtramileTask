const userState = {
        project: '',
        course: '',
        person: '',
        email: '',
        department: '',
        location: '',
        courseStartedDate: '',
        openedLessonsCount: '',
        completedDate: '',
        completedLessonsCount: '',
        totalLessonsCount: '',
        haveNotStarted: '',
        notOnSchedule: '',
        haveStarted: '',
        quizScore: '',
        quizScoreTotal: '',
        certificateTitle: '',
}

export const userReducer = (state = userState, action) => {
    switch(action.type){
        case "SET_USER_DATA":
            return {...state, ...action.payload}
        default:
            return state    
    }
}
import {
    SET_USER
} from '../actions/types';

const initialUserState = {
    currentUser : null,
    isLoading : true
}

//로그인 시 isLoading true, 로그인 완료 시 isLoading false
//useraction에서 가져온 user의 payload를 currentUser에 정의하여줌

export default function(state = initialUserState, action){
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                currentUser : action.payload,
                isLoading: false
            }
            
            default :
                return state;
    }
}
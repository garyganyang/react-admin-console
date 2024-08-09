import {legacy_createStore as createStore, combineReducers} from "redux";


/**
 * GPT:
 * 在 Redux 中，action 通常是一个普通的 JavaScript 对象，它至少包含一个 type 属性，用于指示要执行的操作。type 是一个必须的字段，它是一个字符串，用于区分不同的 action。
 * 除了 type 字段外，action 对象还可以包含其他字段，如 payload，它可以携带与 action 相关的数据。在 TypeScript 中，可以使用接口（Interfaces）来定义 action 的结构，以提高代码的可维护性和类型安全性。
 */
export const UserComponentReducerActionType = {
    "ADD_COUNT": "ADD_COUNT",
}

export interface UserComponentReducerAction {
    type: string;
    count: number,
    number: number,
    payload: any; // 可以根据需要替换为更具体的类型
}

//定义数据
const UserComponentInitState = {
    count: 0,
};

function UserComponentReducer(state = UserComponentInitState, action: UserComponentReducerAction) {
    switch (action.type) {
        case UserComponentReducerActionType.ADD_COUNT:
            return {...state, count: state.count + action.number};
        default:
            return state;
    }
}

/**
 * GPT:
 * 在 Redux 中，action 通常是一个普通的 JavaScript 对象，它至少包含一个 type 属性，用于指示要执行的操作。type 是一个必须的字段，它是一个字符串，用于区分不同的 action。
 * 除了 type 字段外，action 对象还可以包含其他字段，如 payload，它可以携带与 action 相关的数据。在 TypeScript 中，可以使用接口（Interfaces）来定义 action 的结构，以提高代码的可维护性和类型安全性。
 */
export const HomeComponentReducerActionType = {
    "UPDATE_NAME": "UPDATE_NAME",
}

interface HomeComponentReducerAction {
    type: string;
    name: string,
    payload: any; // 可以根据需要替换为更具体的类型
}

const HomeComponentInitState = {
    name: "学了太多东西了,头都要炸了",
};

function HomeComponentReducer(state = HomeComponentInitState, action: HomeComponentReducerAction) {
    switch (action.type) {
        case HomeComponentReducerActionType.UPDATE_NAME:
            return {...state, name: action.name};
        default:
            return state;
    }
}

/**
 * GPT:
 * 如果不同的子 reducer 都监听同一个 action 类型，Redux 允许这种情况发生。
 * 当 store.dispatch 被调用时，根 reducer 会将 action 对象传递给所有子 reducer。
 * 每个子 reducer 都会接收到相同的 action，并根据 action 的 type 字段来决定是否对该 action 做出反应。
 * Redux 的这种设计使得你可以很容易地在不同的 reducer 之间共享 action 和 state 更新逻辑，同时也保持了组件的独立性和可测试性。
 * 如果你需要在不同的 reducer 之间进行更复杂的通信，你可以使用中间件（redux-thunk）来实现。
 **/
const store = createStore(combineReducers({UserComponentReducer, HomeComponentReducer}));

export default store;

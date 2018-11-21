export interface User {
	_id: string;
	username: string;
}

export interface UserAction {
	type: 'SET_ME';
	user: User;
}
/**
 * 用户登录action
 * @param user 当前登录的用户信息
 */
export const login = (user: User): UserAction => ({
	type: 'SET_ME',
	user
});

/**
 * 用户注销
 */
export const logout = (): UserAction => ({
	type: 'SET_ME',
	user: null
});

/** 初始用户状态 */
const initialState: User = null;

export const userReducer = (state: User = initialState, action: UserAction) => {
	switch (action.type) {
		case 'SET_ME':
			return action.user;

		default:
			return state;
	}
};

export interface AuthResponseType {
	email: string
	displayName?: string
	uid: string
	photoURL?: string
}

export interface AuthLoginRequestType {
	email: string
	password: string
	acceptTerms: boolean
}

export interface AutRestPasswordRequestType {
	email: string
	password: string
}

export interface AuthRequestType extends AuthLoginRequestType {
	fullname: string
	username: string
	confirmPassword: string
}

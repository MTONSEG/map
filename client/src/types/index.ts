export interface IServerObject {
	id: string
	name: string
	lat: number
	long: number
	direction: number
	endLat: number
	endLong: number
	lastUpdated: number
}

export interface IClientObject extends IServerObject {
	isLost: boolean
}

export interface IToken {
	access: string
	refresh: string
}

import { API_URL } from '../constants/constants'

class DataFetcher {
	private apiUrl: string

	constructor(apiUrl: string) {
		this.apiUrl = apiUrl
	}

	private async fetchData(params: string) {
		const res = await fetch(`${this.apiUrl}${params}`)
		return res
	}

	public async getPostsByQuery(query: string) {
		return this.fetchData(query)
	}

	public async getPostById(id?: string) {
		return (await this.fetchData(`/${id}`)).json()
	}
}

export const dataFetcher = new DataFetcher(API_URL)

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

type AuthContext = {}

type AuthProviderProps = {
	children: ReactNode
}

type User = {
	id: string
	name: string
	image?: string
}

const Context = createContext<AuthContext | null>(null)

export function useAuth() {
	return useContext(Context)
}


export function AuthProvider({ children }: AuthProviderProps) {

	const signup = useMutation({
		mutationFn: (user: User) => {
			return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user)
		}
	})

	return <Context.Provider value={{}}>
		{children}
	</Context.Provider>
}
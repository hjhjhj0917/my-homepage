import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: null
    }),
    getters: {
        isLoggedIn: (state) => !!state.token
    },
    actions: {
        login() {
            this.token = 'dummy-token'
            localStorage.setItem('token', this.token)
            this.user = { name: 'John Doe' }
        },
        register(userData) {
            this.token = 'dummy-token'
            localStorage.setItem('token', this.token)
            this.user = {
                name: `${userData.firstName} ${userData.lastName}`,
                email: userData.email
            }
        },
        logout() {
            this.token = null
            localStorage.removeItem('token')
            this.user = null
        }
    }
})
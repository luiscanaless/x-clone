'use client'

import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Variant = 'LOGIN' | 'REGISTER'

export const AuthForm = () => {

    const router = useRouter()

    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...form,
                redirect: false
            }).then((res) => {
                if (res?.error) {
                    throw new Error('Invalid credentials!');
                }

                if (res?.ok) {
                    router.push('/home')
                }
            })
        }

        if (variant === 'REGISTER') {
            axios.post('/api/register', form)
                .then(() => {
                    signIn('credentials', {
                        ...form,
                        redirect: false
                    }).then((res) => {
                        if (res?.error) {
                            throw new Error('Invalid credentials!');
                        }

                        if (res?.ok) {
                            router.push('/home')
                        }
                    })
                })
        }

    }

    const toggleVariant = () => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {
                        variant === 'LOGIN'
                            ? 'Sign in to your account'
                            : 'Create an account'
                    }
                </h1>
                <section>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        {
                            variant === 'REGISTER'
                            &&
                            (
                                <>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="your name"
                                            onChange={handleInput}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input
                                            type="username"
                                            name="username"
                                            id="username"
                                            placeholder="your username"
                                            onChange={handleInput}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </>
                            )
                        }
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInput}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                onChange={handleInput}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            {
                                variant === 'LOGIN'
                                    ? 'Sign in'
                                    : 'Create an account'
                            }
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {
                                variant === 'LOGIN'
                                    ? 'Don’t have an account yet?'
                                    : 'Already have an account?'
                            }
                            <span onClick={toggleVariant} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
                                {
                                    variant === 'LOGIN'
                                        ? 'Sign up'
                                        : 'Login here'
                                }
                            </span>
                        </p>
                    </form>
                </section>
            </div>
        </div>

    )
}

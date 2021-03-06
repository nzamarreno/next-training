import * as React from "react"
import { AppContext } from "../context/appContext"
import useContext from "../hooks/useContext"
import Input from "./input"
import Link from 'next/link'

const Main = React.FC = () => {
    const { todoStore } = useContext(AppContext);
    const [value, setValue] = React.useState('');

    const handleOnChange = (value) => {
        setValue(value)
    }

    const handleOnClick = () => {
        todoStore.addTask(value)
        setValue('')
    }

    return (
        <div className="container">
            <main>
                <h1 className="title">
                    Welcome to <a>EduardoLand.js!</a>
                </h1>

                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>

                <div className="search">
                    <Input
                        value={value}
                        onChange={handleOnChange} />
                    <button onClick={handleOnClick} className="button">Add</button>
                </div>

                <ul className="grid">
                    {todoStore.list.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <h3>{item} &rarr;</h3>
                            </div>
                        )
                    })}
                </ul>

                <Link href="/list">
                    <a className="link">Click here if you want to change page...</a>
                </Link>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="logo" />
                </a>
            </footer>
            <style jsx>{`
            .search {
                width: 100%;
                display: flex;
                align-items: center;
            }

            .button {
                font-size: 1rem;
                font-weight: bold;
                height: 49px;
                border: none;
                border-radius: 10px;
                color: #FFFFFF;
                padding: 0 20px;
                background-color: #0070f3;
            }

            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            footer img {
                margin-left: 0.5rem;
            }

            footer a {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            a {
                color: inherit;
                text-decoration: none;
            }

            .link {
                color: #0070f3;
                font-size: 1.4rem;
                font-weight: bold;
                text-decoration: underline;
            }

            .title a {
                color: #0070f3;
                text-decoration: none;
            }

            .title a:hover,
            .title a:focus,
            .title a:active {
            text-decoration: underline;
            }

            .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            }

            .title,
            .description {
            text-align: center;
            }

            .description {
                line-height: 1.5;
                font-size: 1.5rem;
            }

            code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }

            .grid {
                width: 100%;
                margin-top: 3rem;
            }

            .card {
            margin: 1rem;
            padding: 1rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
            color: #0070f3;
            border-color: #0070f3;
            }

            .card h3 {
            font-size: 1.5rem;
            margin: 0;
            }

            .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
            }

            .logo {
            height: 1em;
            }

            @media (max-width: 600px) {
            .grid {
                width: 100%;
                flex-direction: column;
            }
            }
        `}</style>

            <style jsx global>{`
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
            box-sizing: border-box;
            }
        `}</style>
        </div>
    )
}

export default Main
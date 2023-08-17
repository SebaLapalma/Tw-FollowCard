import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>

            <TwitterFollowCard userName='SebaLapalma2'>
            🔥 Untie all the ropes 🔥
            </TwitterFollowCard>

            <TwitterFollowCard userName='midudev' >
                Miguel Ángel Durán
            </TwitterFollowCard>
            
            <TwitterFollowCard userName='LauraEBGarcia'>
                Locos ya estamos ; 💚
            </TwitterFollowCard>

        </section>
    )
}
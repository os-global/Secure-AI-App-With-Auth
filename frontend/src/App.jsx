import ClerkProviderWithRoutes from './auth/ClerkProviderWithRoutes'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { ChallengeGenerator } from './challenge/ChallengeGenerator'
import { HistoryPanel } from './history/HistoryPanel'
import { AuthenticationPage } from './auth/AuthenticationPage'
import './App.css'

function App() {
  return <ClerkProviderWithRoutes>
    <Routes>
      <Route path="/sign-in/*" element={<AuthenticationPage />}></Route>
      <Route path="/sign-up" element={<AuthenticationPage />}></Route>
      <Route element={<Layout />}>
        <Route path="/" element={<ChallengeGenerator />}></Route>
        <Route path="/history" element={<HistoryPanel />}></Route>
      </Route>
    </Routes>
  </ClerkProviderWithRoutes>
}

export default App

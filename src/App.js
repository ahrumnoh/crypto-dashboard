// import NewsFeed from "./components/NewsFeed"
// import CurrencyConverter from "./components/CurrencyConverter"

// const App = () => {
//   return (
//     <div className="app">
//       {/* <NewsFeed /> */}
//       <CurrencyConverter />
//       <NewsFeed />

  
      
//     </div>
//   )
// }

// export default App


import NewsFeed from './components/NewsFeed'
import CurrencyConverter from './components/CurrencyConverter'

const App = () => {
  return (
    <div className="app">
        <h1>Crypto Dashboard</h1>
        <div className="app-wrapper">
            <CurrencyConverter />
            <NewsFeed />
        </div>

    </div>
  )
}

export default App
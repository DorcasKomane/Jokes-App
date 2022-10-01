
import './App.css'
import Joke from './components/Joke'

export default function App() {
  return (
      <div className='joke--container'>
        <div className='jokes'>
          <Joke 
          setup='I got my daughter a fridge for her birthday.'
          punchline="I can't wait to see her face light up when she opens it."
          />
        </div>
          
        <div className='jokes'>
          <Joke 
            setup='How did the hacker escape the police?'
            punchline='He just ransomware!'
          />
        </div>
        
        <div className='jokes'>
          <Joke 
            setup="Why don't pirates travel on mountain roads?"
            punchline='Scurvy.'
          />
        </div>
        
        <div className='jokes'>
          <Joke 
            setup='Why do bees stay in the hive in the winter?'
            punchline='Swarm.'
          />
        </div>
        
        <div className='jokes'>
          <Joke 
            setup="What's the best thing about Switzerland?"
            punchline="I don't know, but the flag is a big plus!"
          />
        </div>

        <div className='jokes'>
        <Joke 
          setup=""
          punchline="It's hard to explain puns to kleptomaniacs because 
          they always take things literally."
        />
      </div>
      </div>
  );
}

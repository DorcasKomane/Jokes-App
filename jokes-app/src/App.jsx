
import './App.css'
import Jokes from './components/Jokes'

export default function App() {
  return (
      <div >
        <div className='jokes'>
          <Jokes 
          setup='I got my daughter a fridge for her birthday.'
          punchline="I can't wait to see her face light up when she opens it."
          />
        </div>
          
        <div className='jokes'>
          <Jokes 
            setup='How did the hacker escape the police?'
            punchline='He just ransomware!'
          />
        </div>
        
        <div className='jokes'>
          <Jokes 
            setup="Why don't pirates travel on mountain roads?"
            punchline='Scurvy.'
          />
        </div>
        
        <div className='jokes'>
          <Jokes 
            setup='Why do bees stay in the hive in the winter?'
            punchline='Swarm.'
          />
        </div>
        
        <div className='jokes'>
          <Jokes 
            setup="What's the best thing about Switzerland?"
            punchline="I don't know, but the flag is a big plus!"
          />
        </div>
      </div>
  );
}


import Jokes from './Components/Jokes';

function App() {

  return (
    <div>
        <Jokes
            Setup="I got my daughter a fridge for her birthday."
            Punchline="I can't wait to see her face light up when she opens it."
            upvotes = {6}
            downvotes = {3}
            isPun={true}
        />
        <Jokes
            Setup="How did the hacker escape the police?"
            Punchline="He just ransomware!"
            upvotes = {6}
            downvotes = {3}
            isPun={false}
        />
        <Jokes
            Setup="Why don't pirates travel on mountain roads?"
            Punchline=" Scurvy."
            upvotes = {4}
            downvotes = {2}
            isPun={false}
        />
        <Jokes
            Setup="Why do bees stay in the hive in the winter?"
            Punchline="Swarm."
            upvotes = {7}
            downvotes = {2}
            isPun={true}
        />
        <Jokes
            Setup="What's the best thing about Switzerland?"
            Punchline="I don't know, but the flag is a big plus!"
            upvotes = {5}
            downvotes = {6}
            isPun={false}
        />
        <Jokes
            Setup=""
            Punchline="This is a punchline withour setup"
            upvotes = {9}
            downvotes = {9}
            isPun={true}
        />
    </div>
  );
}

export default App;

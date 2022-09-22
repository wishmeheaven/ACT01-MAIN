import {useState} from 'react'

const Content = () => {
 const [name, setName] = useState('Dave');
 const [count, setCount] = useState(0);

    const handleNameContent = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
      setCount(count +1)
      setCount(count +1)
        console.log(count)
    }

    // value of the current state after the first two count+1 calls -
    // won't change in the console because it simply shows
    // the value that was passed into the function
    const handleClick2 = () => {
        console.log(count)
    }
    
  return (
    <main>
        <p>
            Hello {name}!
        </p>
        <button onClick={handleNameContent}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click It2</button>
    </main>
    
  )
}

export default Content
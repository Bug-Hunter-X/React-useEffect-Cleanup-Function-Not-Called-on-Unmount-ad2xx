```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const intervalId = setInterval(() => {
      if (isMounted) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId); // Always clear the interval
      isMounted = false; // Set flag to false
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
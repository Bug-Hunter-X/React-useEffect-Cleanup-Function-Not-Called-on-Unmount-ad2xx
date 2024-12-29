# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common React bug where the cleanup function in `useEffect` is not always called when a component unmounts prematurely.  This can lead to memory leaks or unexpected behavior if the cleanup function is responsible for tasks such as canceling subscriptions, clearing intervals, or removing event listeners.

The `bug.js` file contains the buggy code. The `bugSolution.js` file demonstrates the correct implementation.  The issue is that the parent component might re-render, which may cause the component to unmount and mount again before the cleanup function is called. 
Simple rules of useEffect


Understanding useEffect can be tricky. If you have worked with class based components before you might have used componentDidMount() and componentDidUnmount() lifecycle methods.

Now with hooks we have useEffect() for handling lifecycle.



useEffect takes two arguments function () => () and array [] to take dependencies to decide when to run

Runs each time state changes, if you dont pass [] as second argument

useEffect(() => {
    //
})


Runs when component mounts and unmounts

useEffect(() => {
    //
}, [])


Runs when the value in [run] changes. So run is dependency here.

run could be state, route parameter etc

useEffect(() => {
    //
}, [run])

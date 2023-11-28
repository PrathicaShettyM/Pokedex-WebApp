function useDebounce(cb, delay=2000){
    let timerId;

    return (...args)=>{
        // if somebody call the callback before the previous one is executed
        clearTimeout();
            timerId = setTimeout(()=>{    
            cb(...args);
        }, delay)
    }
}
export default useDebounce;
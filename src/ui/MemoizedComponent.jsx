import React from 'react'


function CountButton({onClick, count, name}) { 
    console.log('CountButton render', name);
    return (
        <button className='btn btn-primary m-2'
        name={name}
        type='button'
        onClick={onClick}>
           Count: {count}
        </button>
    )
}

export function NonMemoizedCounter() { 
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const increment1=()=>{ console.log("NMC.increment1"); setCount1(c=>c+1); }
    const increment2=()=>{ console.log("NMC.increment2"); setCount2(c=>c+1); }
    return (
        <>
        <CountButton count={count1} onClick={increment1} name="Count1" />
        <CountButton count={count2} onClick={increment2} name="Count2" />
        </>
    )
}
export const MemoizedButton = React.memo(function MemoizedButton(
    { onClick, count, name }
){
    console.log('MemoizedButton render', name);
    return (
        <button className='btn btn-primary m-2'
        name={name}
        type='button'
        onClick={onClick}>
           Count: {count}
        </button>
    )
});
export function MemoizedCounter() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const increment1=React.useCallback(()=>{
        console.log("MC.increment1");
        setCount1(c=>c+1);
    }, [count1]);
    const increment2=React.useCallback(()=>{
        console.log("MC.increment2");
        setCount2(c=>c+1);
    }, [count2]);
    return (
        <>
        <MemoizedButton count={count1} onClick={increment1} name="Count1" />
        <MemoizedButton count={count2} onClick={increment2} name="Count2" />
        </>
    )
}
function MemoizedComponent() {
  return (
    <div>
        <div className='alert alert-info'>
            <h4>Memoized Component</h4>
            <MemoizedCounter/>
        </div>
        <div className='alert alert-warning'>
            <h4>Non-Memoized Component</h4>
            <NonMemoizedCounter/>
        </div>
    </div>
  )
}

export default MemoizedComponent
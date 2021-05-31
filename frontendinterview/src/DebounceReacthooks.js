
import { useCallback, useState } from "react"

function Debounce() {
    const [search, setSearch] = useState([]);

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null
                func.apply(context, args);
            }, 5000);
        }
    }
    const handlechgange = (event) => {
        debugger
        const { value } = event.target;
        console.log(value)
    }

    const optimizedfn = useCallback(debounce(handlechgange))
    return (
        <div>
            <h3>Debounce Example React hooks</h3>
            <input 
                type={'text'} 
                name={'search'} 
                placeholder={'Enter something'}
                classname={'search'} 
                onChange={optimizedfn}
            />
        </div>
    );
}
export default Debounce;

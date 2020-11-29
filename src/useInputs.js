import {useState, useCallback} from 'react';

//useInputs라는 커스텀 훅 use라고 시작을 해서 우리가 구현할 기능에 대한 단어를 넣어서 함수를 만듬 
function useInputs(initialForm){
    //form이라는 새로운 상태를 선언하게 되는데 그 상태의 초기값은 initialForm이다.
    const[form, setForm] = useState(initialForm);
    const onChange = useCallback(e =>{
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
        //[]의존하는 다른 상태가 없으니까 비워줌
    },[]);
    //파라미터로 가져온 값을 사용하고 있으니까 [initialForm] 이라고 적어줌
    const reset = useCallback(() => setForm(initialForm),[initialForm]);

    return [form,onChange,reset];
};

export default useInputs;
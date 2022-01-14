import React, { useState } from 'react';
import './GithubUsernameForm.css';

type GithubUserNameFormProps = {
    onSubmitUsername: (username: string) => void;
}

function GithubUserNameForm({ onSubmitUsername}: GithubUserNameFormProps) {
    const [input, setInuput] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInuput(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className='GithubUsernameForm'>
            <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
            <button type='submit'> 조회 </button>
        </form>
    )
}

export default GithubUserNameForm;
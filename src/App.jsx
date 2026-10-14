import { useState } from 'react';
import StudentRegistrationForm from './components/StudentRegistrationForm.jsx';
import StudentSummary from './components/StudentSummary.jsx';

const emptyStudent={name:'',email:'',rollNumber:'',course:'',year:''};
export default function App(){const [student,setStudent]=useState(emptyStudent);const [registered,setRegistered]=useState(null);function update(event){setStudent(current=>({...current,[event.target.name]:event.target.value}));setRegistered(null)}function submit(event){event.preventDefault();setRegistered(student)}return <main className="layout"><section className="intro"><span>UNIT 4 · PRACTICAL 4</span><h1>Student<br/><em>Registration</em></h1><p>Complete the form to create a student registration record.</p><div className="star">✳</div></section><section className="work"><StudentRegistrationForm value={student} onChange={update} onSubmit={submit}/>{registered&&<StudentSummary student={registered}/>}</section></main>}

"use client";

import React, {ChangeEvent, FormEvent, useState} from "react";

type Form = {
  from: string;
  subject: string;
  message: string;
};

function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>보낸 메일</label>
        <input type="email" id="from" name="from" required autoFocus value={form.from} onChange={onChange} />

        <label>제목</label>
        <input type="text" id="subject" name="subject" required value={form.subject} onChange={onChange} />

        <label>내용</label>
        <textarea rows={10} id="message" name="message" required value={form.message} onChange={onChange} />
        <button>보내기</button>
      </form>
    </>
  );
}

export default ContactForm;

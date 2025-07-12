"use client";
import { createCamps } from "@/utils/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="border" type="submit" disabled={pending}>
      {pending ? "Submiting..." : "Submit"}
    </button>
  );
}

const form = () => {
  const [message, formAction] = useActionState(createCamps, null);

  return (
    <>
      {message}
      <form action={formAction}>
        <input
          className="border m-10"
          name="title"
          placeholder="campingName"
          type="text"
          defaultValue="Korat Route 3060"
        />
        <input
          className="border m-10 "
          type="text"
          placeholder="location"
          name="location"
          defaultValue="Korat"
        />
        <Submit />
      </form>
    </>
  );
};
export default form;

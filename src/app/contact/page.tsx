"use client";
import Button from "@/components/ui/Button";
import Inputs, { TextArea } from "@/components/ui/Inputs";
import "@/scss/contact/page.scss";
import { useState } from "react";
const page = () => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <section className="contact-section">
      {/* <div className="left"></div> */}
      <div className="right">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              setLoading(true);
              const d = await fetch("/api/sendData", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              console.log(d);
              if (d.ok) {
                alert("Thank you!!");
              } else {
                const j = await d.json();
                alert(j.message);
              }
              setLoading(false);
            } catch (e) {
              setLoading(false);

              console.log(e);
            }
          }}
        >
          <Inputs
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
            label="Name"
            type="text"
            required
            disabled={loading}
          />
          <Inputs
            onChange={(e: any) => setData({ ...data, email: e.target.value })}
            label="Email"
            type="email"
            required
            disabled={loading}
          />
          <TextArea
            label="Message"
            onChange={(e: any) => setData({ ...data, message: e.target.value })}
            required
            disabled={loading}
          />
          <Button disabled={loading} type={"submit"}>
            {loading ? "Loading..." : "submit"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default page;

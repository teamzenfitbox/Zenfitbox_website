"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Please enter a valid email"),

  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  goal: z.string().min(1, "Please select a goal"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const goals = [
  "Weight Loss",
  "Muscle Gain",
  "Boxing Training",
  "Strength Training",
  "General Fitness",
];

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();

      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("goal", data.goal);
      formData.append("message", data.message);
      
      
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_API!, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
    
      

      if (result.success) {
        setResult("Inquiry sent successfully!");
        setSuccess(true);

        reset();
      } else {
        setResult("Failed to send inquiry");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      console.error(error);
    }
  };
  setTimeout(() => {
    setResult("");
  }, 5000);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl md:p-8 backdrop-blur-md"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-500"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-500"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-500"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Goal */}
        <div>
          <select
            {...register("goal")}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-500"
          >
            <option value="">Select Your Goal</option>

            {goals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>

          {errors.goal && (
            <p className="mt-1 text-sm text-red-500">{errors.goal.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your fitness goals..."
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-500"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send size={18} />
            </>
          )}
        </button>
      </div>
      {result && (
        <p
          className={`text-center mt-4 font-bold ${success ? "text-yellow-500" : "text-red-500"}`}
        >
          {result}
        </p>
      )}
    </form>
  );
}

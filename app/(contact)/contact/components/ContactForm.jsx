"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();
//   console.log(`env : ${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`)

  const onSubmitHandler = async (data) => {
    await onSubmit(data);
    
    // Try EmailJS if configured, otherwise use mailto
    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } catch (error) {
        console.error('EmailJS error:', error);
        // Fallback to mailto
        const subject = `Contact Form: ${data.name}`;
        const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
        window.location.href = `mailto:naitikraj74600@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    } else {
      // Use mailto if EmailJS not configured
      const subject = `Contact Form: ${data.name}`;
      const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
      window.location.href = `mailto:naitikraj74600@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
      <div className="space-y-4">
        {/* Name and Email in a 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground block">
              Your Name
            </label>
            <Input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              name="name"
              placeholder="Naitik"
              className="rounded-lg border-primary/20 w-full"
            />
            {errors.name && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground block">
              Email
            </label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              name="email"
              placeholder="naitik@example.com"
              className="rounded-lg border-primary/20 w-full"
            />
            {errors.email && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Message field - full width */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-muted-foreground block">
            Message
          </label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="rounded-lg border-primary/20 min-h-[150px] w-full resize-y"
          />
          {errors.message && (
            <span className="text-xs text-red-500 block mt-1">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl py-6 text-base font-semibold mt-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-4">
        This will open your email client. Or email me directly at{" "}
        <a 
          href="mailto:naitikraj74600@gmail.com" 
          className="text-blue-400 hover:underline font-medium"
        >
          naitikraj74600@gmail.com
        </a>
      </p>
    </form>
  );
};

export default ContactForm;

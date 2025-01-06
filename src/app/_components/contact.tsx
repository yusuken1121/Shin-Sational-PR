"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { apiClientFetch } from "../utils/apiClient";
import { API_URL, NOTION_API_KEY } from "@/config/ENV";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name cannot exceed 100 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters long")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // const api_url = process.env.NEXT_PUBLIC_API_URL;
    // alert(api_url);
    try {
      const response = await fetch(`api/notion-submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Server response:", data);
    } catch (error) {
      console.error(error);
      console.log(error);

      alert("An error occurred. Please try again later.");
    }
    console.log(values);
  };
  return (
    <section
      id="contact"
      className="flex items-center justify-center w-full h-full py-24 bg-primary"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-lg mx-auto"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="shadcn" /> */}
                    <Input
                      placeholder="John Doe"
                      className="bg-background border-zinc-700"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="sample@sample.com"
                      className="bg-background border-zinc-700"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      className="bg-background border-zinc-700"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end sm:justify-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}

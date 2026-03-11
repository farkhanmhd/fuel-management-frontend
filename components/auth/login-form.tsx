"use client";

import { useForm, useStore } from "@tanstack/react-form";
import { useTransitionRouter } from "next-view-transitions";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/lib/auth/actions";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const defaultLoginValues: LoginSchema = {
  username: "",
  password: "",
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { push } = useTransitionRouter();
  const form = useForm({
    validators: {
      onSubmit: loginSchema,
    },
    defaultValues: defaultLoginValues,
    onSubmit: async ({ value }) => {
      try {
        const result = await loginAction(value);

        if (result.meta && result.meta.code === 200) {
          push("/dashboard");
          toast.success(result.meta.message);
          form.reset();
        } else {
          toast.error(result.meta.message);
        }
      } catch {
        toast.error("Invalid credentials");
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        id="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="font-medium text-xl">
              Welcome to Alfa Scorpii <br /> Fuel Management Information System
            </h1>
          </div>
          <form.Field
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                  <Input
                    aria-invalid={isInvalid}
                    autoComplete="off"
                    disabled={isSubmitting}
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Username"
                    value={field.state.value}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
            name="username"
          />

          <form.Field
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    aria-invalid={isInvalid}
                    autoComplete="off"
                    disabled={isSubmitting}
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Password"
                    type="password"
                    value={field.state.value}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
            name="password"
          />

          <Field>
            <Button disabled={isSubmitting} size="lg" type="submit">
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

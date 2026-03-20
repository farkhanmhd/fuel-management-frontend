"use client";

import { Orbit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm, useStore } from "@tanstack/react-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const { push } = useRouter();
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
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      {/* Logo / Brand mark */}
      <div className="flex flex-col items-center gap-3">
        <Image
          alt="Alfa Scorpii"
          className="rounded-2xl bg-white object-contain p-2 shadow-lg"
          height={56}
          priority
          src="/alfa-scorpii.png"
          width={56}
        />
        <div className="text-center">
          <p className="font-semibold text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
            Alfa Scorpii
          </p>
          <h1 className="mt-0.5 font-semibold text-foreground text-xl leading-tight tracking-tight">
            Fuel Management
            <br />
            Information System
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Form */}
      <form
        id="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup className="gap-5">
          <form.Field
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field
                  className="flex flex-col gap-1.5"
                  data-invalid={isInvalid}
                >
                  <FieldLabel
                    className="font-semibold text-muted-foreground text-xs uppercase tracking-widest"
                    htmlFor={field.name}
                  >
                    Username
                  </FieldLabel>
                  <Input
                    aria-invalid={isInvalid}
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded-xl border-border bg-muted/40 px-4 text-sm transition-all placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-foreground/30"
                    disabled={isSubmitting}
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Enter your username"
                    value={field.state.value}
                  />
                  {isInvalid && (
                    <FieldError
                      className="text-destructive text-xs"
                      errors={field.state.meta.errors}
                    />
                  )}
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
                <Field
                  className="flex flex-col gap-1.5"
                  data-invalid={isInvalid}
                >
                  <FieldLabel
                    className="font-semibold text-muted-foreground text-xs uppercase tracking-widest"
                    htmlFor={field.name}
                  >
                    Password
                  </FieldLabel>
                  <Input
                    aria-invalid={isInvalid}
                    autoComplete="off"
                    className="h-11 rounded-xl border-border bg-muted/40 px-4 text-sm transition-all placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-foreground/30"
                    disabled={isSubmitting}
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Enter your password"
                    type="password"
                    value={field.state.value}
                  />
                  {isInvalid && (
                    <FieldError
                      className="text-destructive text-xs"
                      errors={field.state.meta.errors}
                    />
                  )}
                </Field>
              );
            }}
            name="password"
          />

          <Field className="mt-2">
            <Button
              className="h-11 w-full rounded-xl font-semibold text-sm tracking-wide transition-all duration-200"
              disabled={isSubmitting}
              size="lg"
              type="submit"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <HugeiconsIcon className="animate-spin" icon={Orbit01Icon} />
                  Signing in…
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      {/* Footer note */}
      <p className="text-center text-[11px] text-muted-foreground/60 leading-relaxed">
        Authorized personnel only. <br />
        Unauthorized access is strictly prohibited.
      </p>
    </div>
  );
}

"use client";

import {
  Cancel01Icon,
  EyeIcon,
  EyeOff,
  LockPasswordIcon,
  PencilEdit01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm, useStore } from "@tanstack/react-form";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { changePasswordAction } from "@/lib/actions/actions";
import { changePasswordSchema } from "@/lib/schemas/account";

const passwordFields = [
  {
    name: "current_password" as const,
    label: "Password Saat Ini",
    placeholder: "Masukkan password saat ini",
  },
  {
    name: "new_password" as const,
    label: "Password Baru",
    placeholder: "Minimal 6 karakter",
  },
  {
    name: "confirm_password" as const,
    label: "Konfirmasi Password Baru",
    placeholder: "Ulangi password baru",
  },
];

function PasswordInput({
  id,
  name,
  value,
  onChange,
  onBlur,
  disabled,
  placeholder,
  isInvalid,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  disabled: boolean;
  placeholder: string;
  isInvalid: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        aria-invalid={isInvalid}
        autoComplete="off"
        className="pr-9"
        disabled={disabled}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={show ? "text" : "password"}
        value={value}
      />
      <button
        className="absolute top-1/2 right-2.5 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => setShow((s) => !s)}
        tabIndex={-1}
        type="button"
      >
        <HugeiconsIcon
          className="size-4"
          icon={show ? EyeOff : EyeIcon}
          strokeWidth={2}
        />
      </button>
    </div>
  );
}

export function ChangePasswordForm() {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm({
    validators: { onSubmit: changePasswordSchema },

    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const result = await changePasswordAction(value);
        if (result.data?.status === "success") {
          toast.success("Password berhasil diubah");
          form.reset();
          setIsEditing(false);
        } else {
          toast.error(`Gagal mengubah password ${result.error?.message}`);
        }
      } catch (error) {
        let message = "Server Error";

        if (error instanceof Error) {
          message = error.message;
        }

        toast.error(`Gagal mengubah password ${message}`);
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {isEditing ? (
        <motion.form
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5"
          exit={{ opacity: 0, y: 6 }}
          initial={{ opacity: 0, y: 6 }}
          key="expanded"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <FieldGroup className="gap-4">
            {passwordFields.map(({ name, label, placeholder }) => (
              <form.Field
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <div className="flex items-start gap-3 rounded-xl border bg-muted/30 p-3">
                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm">
                          <HugeiconsIcon
                            className="size-3.5 text-muted-foreground"
                            icon={LockPasswordIcon}
                            strokeWidth={2}
                          />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <p className="font-medium text-[11px] text-muted-foreground uppercase tracking-wide">
                            {label}
                          </p>
                          <PasswordInput
                            disabled={isSubmitting}
                            id={field.name}
                            isInvalid={isInvalid}
                            name={field.name}
                            onBlur={field.handleBlur}
                            onChange={field.handleChange}
                            placeholder={placeholder}
                            value={field.state.value}
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </div>
                      </div>
                    </Field>
                  );
                }}
                key={name}
                name={name}
              />
            ))}
          </FieldGroup>

          <div className="flex justify-end gap-2">
            <Button
              disabled={isSubmitting}
              onClick={handleCancel}
              size="sm"
              type="button"
              variant="ghost"
            >
              <HugeiconsIcon
                className="size-3.5"
                icon={Cancel01Icon}
                strokeWidth={2}
              />
              Batal
            </Button>
            <Button disabled={isSubmitting} size="sm" type="submit">
              {isSubmitting ? "Menyimpan..." : "Simpan Password"}
            </Button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-4"
          exit={{ opacity: 0, y: -6 }}
          initial={{ opacity: 0, y: -6 }}
          key="collapsed"
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Perbarui password Anda secara berkala untuk menjaga keamanan akun.
          </p>
          <Button
            className="shrink-0"
            onClick={() => setIsEditing(true)}
            size="sm"
            variant="outline"
          >
            <HugeiconsIcon
              className="size-3.5"
              icon={PencilEdit01Icon}
              strokeWidth={2}
            />
            Ubah Password
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

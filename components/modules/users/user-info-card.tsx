"use client";

import {
  Cancel01Icon,
  FloppyDiskIcon,
  PencilEdit01Icon,
  UserIcon,
  UserIdVerificationIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { useForm, useStore } from "@tanstack/react-form";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { updateUserAction } from "@/lib/actions/users";
import type { UserData } from "@/lib/api/users";
import { updateUserSchema } from "@/lib/schemas/users";

interface UserInfoCardProps {
  user: UserData;
}

type InfoField = {
  name: "username" | "name";
  label: string;
  mono?: boolean;
  icon: IconSvgElement;
};

const fields: InfoField[] = [
  {
    name: "username",
    label: "Username",
    mono: true,
    icon: UserIdVerificationIcon,
  },
  {
    name: "name",
    label: "Nama",
    icon: UserIcon,
  },
];

export function UserInfoCard({ user }: UserInfoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(user);

  const form = useForm({
    validators: { onSubmit: updateUserSchema },
    defaultValues: {
      username: user.username,
      name: user.name,
    },
    onSubmit: async ({ value }) => {
      try {
        const { data, error } = await updateUserAction(user.uuid, value);
        if (data) {
          toast.success("Data user berhasil diperbarui");
          setUserData((prev) => ({ ...prev, ...value }));
          setIsEditing(false);
        } else {
          toast.error("Gagal menambahkan user", {
            description:
              error?.message ??
              "Terjadi kesalahan pada server. Silakan coba beberapa saat lagi.",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Gagal menambahkan user", {
            description: `Terjadi kesalahan pada server. Silakan coba beberapa saat lagi. ${error.message}`,
          });
        }
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
            <HugeiconsIcon
              className="size-4 text-primary"
              icon={UserIcon}
              strokeWidth={2}
            />
          </div>
          <CardTitle className="font-semibold text-base">
            Informasi User
          </CardTitle>
        </div>

        <div className="flex items-center gap-2">
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)} variant="outline">
              <HugeiconsIcon
                className="size-3.5"
                icon={PencilEdit01Icon}
                strokeWidth={2}
              />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {isEditing ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {fields.map(({ name, label, mono, icon }) => (
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
                              icon={icon as never}
                              strokeWidth={2}
                            />
                          </div>
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <p className="font-medium text-[11px] text-muted-foreground uppercase tracking-wide">
                              {label}
                            </p>
                            <Input
                              aria-invalid={isInvalid}
                              autoComplete="off"
                              className={`h-7 px-2 text-sm ${mono ? "font-mono" : ""}`}
                              disabled={isSubmitting}
                              id={field.name}
                              name={field.name}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
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
            </div>

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
                <HugeiconsIcon
                  className="size-3.5"
                  icon={FloppyDiskIcon}
                  strokeWidth={2}
                />
                {isSubmitting ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {fields.map(({ name, label, mono, icon }) => (
              <div
                className="group flex items-start gap-3 rounded-xl border bg-muted/30 p-3 transition-colors hover:bg-muted/60"
                key={name}
              >
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm">
                  <HugeiconsIcon
                    className="size-3.5 text-muted-foreground"
                    icon={icon as never}
                    strokeWidth={2}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 font-medium text-[11px] text-muted-foreground uppercase tracking-wide">
                    {label}
                  </p>
                  <p
                    className={`truncate font-medium text-sm ${mono ? "font-mono" : ""}`}
                    title={userData[name]}
                  >
                    {userData[name]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

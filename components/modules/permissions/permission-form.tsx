"use client";

import { useForm, useStore } from "@tanstack/react-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type PermissionSchema,
  permissionSchema,
  permissionType,
} from "@/lib/schemas/permissions";

type Props = {
  disabled?: boolean;
  permission: PermissionSchema;
  onSubmitAction: (props: {
    value: PermissionSchema;
    formApi: unknown;
  }) => unknown;
};

export const PermissionForm = ({
  disabled,
  permission,
  onSubmitAction,
}: Props) => {
  const form = useForm({
    validators: { onSubmit: permissionSchema },
    defaultValues: permission,
    onSubmit: onSubmitAction,
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);
  const isDisabled = disabled || isSubmitting;

  return (
    <form
      id="add-permission-form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Permission Type</FieldLabel>
                <Select
                  disabled={isDisabled}
                  onValueChange={(value) =>
                    field.handleChange(value as (typeof permissionType)[number])
                  }
                  value={field.state.value}
                >
                  <SelectTrigger
                    aria-invalid={isInvalid}
                    className="uppercase"
                    id={field.name}
                    onBlur={field.handleBlur}
                  >
                    <SelectValue placeholder="Pilih tipe permission" />
                  </SelectTrigger>
                  <SelectContent>
                    {permissionType.map((type) => (
                      <SelectItem className="uppercase" key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
          name="type"
        />

        <form.Field
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Resource</FieldLabel>
                <Input
                  aria-invalid={isInvalid}
                  autoComplete="off"
                  autoFocus
                  disabled={isDisabled}
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Masukkan nama resource"
                  value={field.state.value}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
          name="resource"
        />

        <form.Field
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>
                  Note{" "}
                  <span className="font-normal text-muted-foreground">
                    (opsional)
                  </span>
                </FieldLabel>
                <Input
                  aria-invalid={isInvalid}
                  autoComplete="off"
                  disabled={isDisabled}
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value || null)}
                  placeholder="Tambahkan catatan"
                  value={field.state.value ?? ""}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
          name="note"
        />
      </FieldGroup>
    </form>
  );
};

import { z } from 'zod';

/**
 * Schema de validación para formulario de cita
 */
export const appointmentSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: z.string()
    .email('Por favor ingresa un email válido')
    .optional()
    .or(z.literal('')),
  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]{10,}$/, 'Teléfono inválido')
    .optional()
    .or(z.literal('')),
  date: z.string()
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'La fecha debe ser hoy o en el futuro'),
  time: z.string()
    .regex(/^\d{2}:\d{2}$/, 'Formato de hora inválido'),
  service: z.string()
    .min(1, 'Debes seleccionar un servicio'),
  message: z.string()
    .max(500, 'El mensaje no puede exceder 500 caracteres')
    .optional()
    .or(z.literal(''))
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

/**
 * Schema de validación para formulario de contacto
 */
export const contactSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: z.string()
    .email('Por favor ingresa un email válido'),
  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]{10,}$/, 'Teléfono inválido')
    .optional()
    .or(z.literal('')),
  subject: z.string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(100, 'El asunto no puede exceder 100 caracteres'),
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres')
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Validar y retornar errores formateados
 */
export function validateAppointment(data: unknown) {
  try {
    const validated = appointmentSchema.parse(data);
    return { success: true, data: validated, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { success: false, data: null, errors };
    }
    return { success: false, data: null, errors: { general: 'Error de validación' } };
  }
}

export function validateContact(data: unknown) {
  try {
    const validated = contactSchema.parse(data);
    return { success: true, data: validated, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { success: false, data: null, errors };
    }
    return { success: false, data: null, errors: { general: 'Error de validación' } };
  }
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/my-bookings')({
  component: () => <div>Hello /_auth/my-bookings!</div>
})
import { useState } from 'react'

import { Flex, Text, TextField } from '@radix-ui/themes'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/components/shadcn/ui/form'
import { Input } from '@/presentation/components/shadcn/ui/input'
import { Button } from '@/presentation/components/shadcn/ui/button'

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import useEditModal from '@/presentation/hooks/use-edit-modal'

import { Modal } from '../modal/modal'

import useLoadCustomerDetail from '@/presentation/hooks/use-load-customer-detail'
import useGetCustomerById from '@/presentation/hooks/use-get-customer-by-id'

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string().min(1),
  age: z.number().positive(),
  phoneNumber: z.string().min(1),
  socialAccounts: z.string().min(1),
  cpf: z.string().min(1),
  homeAddress: z.string().min(1),
  mailingAddress: z.string().min(1),
  goals: z.string().min(1),
  jobPosition: z.string().min(1),
})

const EditModal = () => {
  const customerModal = useEditModal()
  const customer = useEditModal((state) => state.data)
  console.log(customer)

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: customer?.firstName,
      lastName: customer?.lastName,
      dateOfBirth: customer?.dateOfBirth,
      age: customer?.age,
      phoneNumber: customer?.phoneNumber,
      socialAccounts: customer?.socialAccounts,
      cpf: customer?.cpf,
      homeAddress: customer?.homeAddress,
      mailingAddress: customer?.mailingAddress,
      goals: customer?.goals,
      jobPosition: customer?.jobPosition,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      await axios.patch(
        `http://localhost:4004/customer/User/${customer?.ID}`,
        values,
      )
      toast.success('Updated successfully!')
      customerModal.onClose()
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={customerModal.isOpen}
      onClose={customerModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Of Birth</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Date Of Birth"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialAccounts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Accounts</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Social Accounts"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="CPF" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="homeAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Home Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mailingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mailing Address | Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Mailing Address | Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Goals</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Goals"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Position</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Job Position"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={customerModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default EditModal

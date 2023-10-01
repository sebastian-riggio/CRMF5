import { z } from 'zod';
import { ProfileFormSchema } from '@/components/ProfileForm/ProfileForm'
import { axiosPrivate } from './axiosPrivate'

export const createUser = (data: z.infer<typeof ProfileFormSchema>) => {
  return axiosPrivate.post('/user', data)
}

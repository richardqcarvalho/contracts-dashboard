import * as React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/primitives/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/app/components/primitives/drawer'
import { Separator } from '@/app/components/primitives/separator'
import { useMediaQuery } from '@/app/hooks/use-media-query'
import { formatDate, formatValue } from '@/app/lib/utils'
import { ContractT } from '@/app/types/contract'

export const AppDrawer = ({
  open,
  setOpen,
  data,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  data: ContractT
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Contract details</DialogTitle>
          </DialogHeader>
          <Separator />
          <DialogDescription>
            <b>ID: </b>
            {` ${data.id}`}
          </DialogDescription>
          <DialogDescription>
            <b>Name: </b>
            {` ${data.name}`}
          </DialogDescription>
          <DialogDescription>
            <b>Client: </b>
            {` ${data.client}`}
          </DialogDescription>
          <DialogDescription>
            <b>Start date: </b>
            {` ${formatDate(data.startDate)}`}
          </DialogDescription>
          <DialogDescription>
            <b>Expiration date: </b>
            {` ${formatDate(data.expirationDate)}`}
          </DialogDescription>
          <DialogDescription>
            <b>Status: </b>
            {` ${data.status}`}
          </DialogDescription>
          <DialogDescription>
            <b>Value: </b>
            {` ${formatValue(data.value)}`}
          </DialogDescription>
          <DialogDescription>
            <b>Type: </b>
            {` ${data.type}`}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Contract details</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription>
          <b>ID: </b>
          {` ${data.id}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Name: </b>
          {` ${data.name}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Client: </b>
          {` ${data.client}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Start date: </b>
          {` ${formatDate(data.startDate)}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Expiration date: </b>
          {` ${formatDate(data.expirationDate)}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Status: </b>
          {` ${data.status}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Value: </b>
          {` ${formatValue(data.value)}`}
        </DrawerDescription>
        <DrawerDescription>
          <b>Type: </b>
          {` ${data.type}`}
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  )
}

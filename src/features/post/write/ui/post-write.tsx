'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Switch } from '@/shared/ui/switch';
import { Label } from '@/shared/ui/label';
import { Controller, useForm } from 'react-hook-form';
import { PostWriteSchema, postWriteSchema } from '../model/post-write-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputError from '@/shared/ui/input-error';
import { Loader } from 'lucide-react';
import { usePostWriteMutation } from '../model/actions';

export function PostWrite() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PostWriteSchema>({
    resolver: zodResolver(postWriteSchema),
    mode: 'onBlur',
    defaultValues: {
      type: '',
      title: '',
      content: '',
      isPublished: false,
    },
  });

  const { mutate } = usePostWriteMutation();

  const onSubmit = async (data: PostWriteSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    mutate(data);
    reset();
  };

  return (
    <Drawer onOpenChange={(_) => reset()}>
      <DrawerTrigger asChild>
        <Button variant="outline">Write Post</Button>
      </DrawerTrigger>
      <DrawerContent
        className="scale-100 transform-none animate-none transition-none bg-white text-black"
        style={{ backfaceVisibility: 'visible', willChange: 'auto' }}
      >
        <div className="mx-auto w-full max-w-md py-20">
          <DrawerHeader>
            <DrawerTitle>Are you Creative?</DrawerTitle>
            <DrawerDescription>This Action is creative.</DrawerDescription>
          </DrawerHeader>
          <form className="p-4 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('type')}
              disabled={isSubmitting}
              placeholder="Post Type"
            />
            {errors?.type?.message && (
              <InputError message={errors?.type?.message} />
            )}
            <Input
              {...register('title')}
              disabled={isSubmitting}
              placeholder="Post Title"
            />
            {errors?.title?.message && (
              <InputError message={errors?.title?.message} />
            )}
            <Textarea
              {...register('content')}
              disabled={isSubmitting}
              className="min-h-32"
              placeholder="Write Your Own Insight..."
            />
            {errors?.content?.message && (
              <InputError message={errors?.content?.message} />
            )}

            <div className="flex items-center space-x-2">
              <Controller
                name="isPublished"
                control={control}
                render={({ field }) => (
                  <Switch
                    id="check-publish"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="check-publish">check publish</Label>
            </div>
            <DrawerFooter className="p-0">
              <Button
                type="submit"
                className="select-none"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  'Submit'
                )}
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={() => reset()}>
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

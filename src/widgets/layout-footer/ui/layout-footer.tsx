import { Button } from '@/shared/ui/button';

export function LayoutFooter() {
  return (
    <div className="fixed bottom-0 w-full border-t bg-slate-100 p-4">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="ghost">
            개인정보처리방침
          </Button>
          <Button size="sm" variant="ghost">
            이용약관
          </Button>
        </div>
      </div>
    </div>
  );
}

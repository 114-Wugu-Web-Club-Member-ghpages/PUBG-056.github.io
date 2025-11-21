import SearchModal from '../SearchModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SearchModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setOpen(true)}>Open Search Modal</Button>
      <SearchModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
